(function(){
  function showStatus(message,isError){
    var status=document.getElementById('pdfStatus');
    if(!status){
      status=document.createElement('div');
      status.id='pdfStatus';
      status.style.cssText='position:fixed;top:16px;left:50%;transform:translateX(-50%);z-index:9999;max-width:92vw;padding:12px 18px;border-radius:8px;background:#fff;color:#222;font: bold 16px sans-serif;text-align:center;box-shadow:0 3px 14px rgba(0,0,0,.35)';
      document.body.appendChild(status);
    }
    status.textContent=message;
    status.style.border='3px solid '+(isError?'#c00':'#ffd500');
  }

  function loadImage(src){
    return new Promise(function(resolve,reject){
      var image=new Image();
      image.onload=function(){resolve(image);};
      image.onerror=function(){reject(new Error('画像を読み込めませんでした: '+src));};
      image.src=src;
    });
  }

  function drawRoundRect(context,x,y,width,height,radius){
    radius=Math.min(radius,width/2,height/2);
    context.beginPath();
    context.moveTo(x+radius,y);
    context.lineTo(x+width-radius,y);
    context.quadraticCurveTo(x+width,y,x+width,y+radius);
    context.lineTo(x+width,y+height-radius);
    context.quadraticCurveTo(x+width,y+height,x+width-radius,y+height);
    context.lineTo(x+radius,y+height);
    context.quadraticCurveTo(x,y+height,x,y+height-radius);
    context.lineTo(x,y+radius);
    context.quadraticCurveTo(x,y,x+radius,y);
    context.closePath();
  }

  function renderPage(image,pageIndex,config,caption){
    var canvas=document.createElement('canvas');
    canvas.width=image.naturalWidth;
    canvas.height=image.naturalHeight;
    var context=canvas.getContext('2d');
    context.fillStyle='#fff';
    context.fillRect(0,0,canvas.width,canvas.height);
    context.drawImage(image,0,0);
    (config.pageBoxes[pageIndex]||[]).forEach(function(id){
      var box=config.boxes[id];
      if(!box)return;
      var x=box.x*canvas.width/100;
      var y=box.y*canvas.height/100;
      var width=box.w*canvas.width/100;
      var height=box.h*canvas.height/100;
      drawRoundRect(context,x,y,width,height,Math.min(canvas.width,canvas.height)*.012);
      context.fillStyle='rgba(255,0,0,0.32)';
      context.fill();
      context.lineWidth=Math.max(4,Math.min(canvas.width,canvas.height)*.004);
      context.strokeStyle='rgba(255,34,34,0.95)';
      context.stroke();
    });
    if(config.pageArrows&&config.pageArrows[pageIndex]&&config.arrow){
      var arrow=config.arrow;
      var fontSize=arrow.h*canvas.height/100;
      context.font='900 '+fontSize+'px sans-serif';
      context.textAlign='center';
      context.textBaseline='top';
      context.fillStyle='#ff2222';
      context.shadowColor='rgba(255,0,0,.7)';
      context.shadowBlur=Math.max(4,fontSize*.2);
      context.fillText('\u25bc',(arrow.x+arrow.w/2)*canvas.width/100,arrow.y*canvas.height/100);
      context.shadowBlur=0;
    }
    var text=String(caption||'').trim();
    if(!text)return canvas;

    var fontSize=Math.max(22,Math.min(40,canvas.width*.024));
    var padding=fontSize;
    var maxWidth=canvas.width-padding*2;
    var font='bold '+fontSize+'px "Yu Gothic","Hiragino Kaku Gothic ProN",Meiryo,sans-serif';
    var lines=[];
    context.font=font;
    text.split(/\r?\n/).forEach(function(paragraph){
      var line='';
      Array.from(paragraph).forEach(function(character){
        if(line&&context.measureText(line+character).width>maxWidth){
          lines.push(line);
          line=character;
        }else{
          line+=character;
        }
      });
      lines.push(line);
    });

    var lineHeight=fontSize*1.5;
    var captionHeight=padding*2+lineHeight*lines.length;
    var pageCanvas=document.createElement('canvas');
    pageCanvas.width=canvas.width;
    pageCanvas.height=canvas.height+captionHeight;
    pageCanvas.pdfLandscape=image.naturalWidth>image.naturalHeight;
    var pageContext=pageCanvas.getContext('2d');
    pageContext.fillStyle='#fff';
    pageContext.fillRect(0,0,pageCanvas.width,pageCanvas.height);
    pageContext.drawImage(canvas,0,0);
    pageContext.fillStyle='#d1d5db';
    pageContext.fillRect(0,canvas.height,pageCanvas.width,Math.max(3,fontSize*.1));
    pageContext.font=font;
    pageContext.fillStyle='#222';
    pageContext.textBaseline='top';
    lines.forEach(function(line,index){
      pageContext.fillText(line,padding,canvas.height+padding+lineHeight*index);
    });
    return pageCanvas;
  }

  function bytesFromBase64(base64){
    var binary=window.atob(base64);
    var bytes=new Uint8Array(binary.length);
    for(var i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i);
    return bytes;
  }

  function asciiBytes(text){return new TextEncoder().encode(text);}

  function concatenate(parts){
    var length=parts.reduce(function(total,part){return total+part.length;},0);
    var result=new Uint8Array(length);
    var offset=0;
    parts.forEach(function(part){result.set(part,offset);offset+=part.length;});
    return result;
  }

  function createPdf(pageCanvases){
    var pageWidth=595.28;
    var pageHeight=841.89;
    var margin=20;
    var objects=[];
    var pageRefs=[];
    objects[1]=asciiBytes('<< /Type /Catalog /Pages 2 0 R >>');
    pageCanvases.forEach(function(canvas,index){
      var landscape=canvas.pdfLandscape===true||(canvas.pdfLandscape!==false&&canvas.width>canvas.height);
      var width=landscape?pageHeight:pageWidth;
      var height=landscape?pageWidth:pageHeight;
      var scale=Math.min((width-margin*2)/canvas.width,(height-margin*2)/canvas.height);
      var imageWidth=canvas.width*scale;
      var imageHeight=canvas.height*scale;
      var x=(width-imageWidth)/2;
      var y=(height-imageHeight)/2;
      var pageId=3+index*3;
      var contentId=pageId+1;
      var imageId=pageId+2;
      var jpeg=bytesFromBase64(canvas.toDataURL('image/jpeg',.94).split(',')[1]);
      var content=asciiBytes('q\n'+imageWidth.toFixed(3)+' 0 0 '+imageHeight.toFixed(3)+' '+x.toFixed(3)+' '+y.toFixed(3)+' cm\n/Im0 Do\nQ');
      var contentObject=concatenate([
        asciiBytes('<< /Length '+content.length+' >>\nstream\n'),
        content,
        asciiBytes('\nendstream')
      ]);
      var imageObject=concatenate([
        asciiBytes('<< /Type /XObject /Subtype /Image /Width '+canvas.width+' /Height '+canvas.height+' /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length '+jpeg.length+' >>\nstream\n'),
        jpeg,
        asciiBytes('\nendstream')
      ]);
      objects[pageId]=asciiBytes('<< /Type /Page /Parent 2 0 R /MediaBox [0 0 '+width.toFixed(2)+' '+height.toFixed(2)+'] /Resources << /XObject << /Im0 '+imageId+' 0 R >> >> /Contents '+contentId+' 0 R >>');
      objects[contentId]=contentObject;
      objects[imageId]=imageObject;
      pageRefs.push(pageId+' 0 R');
    });
    objects[2]=asciiBytes('<< /Type /Pages /Kids ['+pageRefs.join(' ')+'] /Count '+pageCanvases.length+' >>');

    var parts=[asciiBytes('%PDF-1.4\n')];
    var offsets=[0];
    var byteLength=parts[0].length;
    for(var objectId=1;objectId<objects.length;objectId++){
      offsets[objectId]=byteLength;
      var objectParts=[asciiBytes(objectId+' 0 obj\n'),objects[objectId],asciiBytes('\nendobj\n')];
      objectParts.forEach(function(part){parts.push(part);byteLength+=part.length;});
    }
    var xrefOffset=byteLength;
    var xref='xref\n0 '+objects.length+'\n0000000000 65535 f \n';
    for(var entry=1;entry<objects.length;entry++)xref+=String(offsets[entry]).padStart(10,'0')+' 00000 n \n';
    xref+='trailer\n<< /Size '+objects.length+' /Root 1 0 R >>\nstartxref\n'+xrefOffset+'\n%%EOF';
    parts.push(asciiBytes(xref));
    return new Blob(parts,{type:'application/pdf'});
  }

  window.exportGuidePdf=function(pages,config,title){
    if(new URLSearchParams(window.location.search).get('downloadPdf')!=='1')return;
    showStatus('PDFを作成しています… 画像を読み込んでいます');
    if(!pages||!config||!config.boxes||!config.pageBoxes){
      showStatus('PDFを作成できませんでした。ページ設定を確認してください。',true);
      return;
    }
    Promise.all(pages.map(function(page){return loadImage(page.img);}))
      .then(function(images){
        var canvases=images.map(function(image,index){return renderPage(image,index,config,pages[index].speak);});
        var filename=(title||'手順書').replace(/[\\/:*?"<>|]/g,'_').trim()||'手順書';
        var url=URL.createObjectURL(createPdf(canvases));
        var link=document.createElement('a');
        link.href=url;
        link.download=filename+'.pdf';
        link.click();
        setTimeout(function(){URL.revokeObjectURL(url);},1000);
        showStatus('PDFを保存しました。全'+pages.length+'ページです。');
      })
      .catch(function(error){showStatus(error.message||'PDFの作成に失敗しました。',true);});
  };
})();