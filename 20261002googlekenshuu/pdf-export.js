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

  function loadJsPdf(){
    return new Promise(function(resolve,reject){
      if(window.jspdf&&window.jspdf.jsPDF){resolve(window.jspdf.jsPDF);return;}
      var script=document.createElement('script');
      script.src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.2/jspdf.umd.min.js';
      script.onload=function(){
        if(window.jspdf&&window.jspdf.jsPDF)resolve(window.jspdf.jsPDF);
        else reject(new Error('PDFライブラリを読み込めませんでした。'));
      };
      script.onerror=function(){reject(new Error('PDF作成ライブラリの読み込みに失敗しました。インターネット接続を確認してください。'));};
      document.head.appendChild(script);
    });
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

  function renderPage(image,pageIndex,config){
    var canvas=document.createElement('canvas');
    canvas.width=image.naturalWidth;
    canvas.height=image.naturalHeight;
    var context=canvas.getContext('2d');
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
    return canvas.toDataURL('image/jpeg',.94);
  }

  window.exportGuidePdf=function(pages,config,title){
    if(new URLSearchParams(window.location.search).get('downloadPdf')!=='1')return;
    showStatus('PDFを作成しています… 画像を読み込んでいます');
    if(!pages||!config||!config.boxes||!config.pageBoxes){
      showStatus('PDFを作成できませんでした。ページ設定を確認してください。',true);
      return;
    }
    Promise.all([loadJsPdf(),Promise.all(pages.map(function(page){return loadImage(page.img);}))])
      .then(function(results){
        var JsPDF=results[0];
        var images=results[1];
        var pdf=null;
        images.forEach(function(image,index){
          var orientation=image.naturalWidth>image.naturalHeight?'landscape':'portrait';
          if(!pdf)pdf=new JsPDF({orientation:orientation,unit:'mm',format:'a4',compress:true});
          else pdf.addPage('a4',orientation);
          var pageWidth=pdf.internal.pageSize.getWidth();
          var pageHeight=pdf.internal.pageSize.getHeight();
          var margin=7;
          var scale=Math.min((pageWidth-margin*2)/image.naturalWidth,(pageHeight-margin*2)/image.naturalHeight);
          var width=image.naturalWidth*scale;
          var height=image.naturalHeight*scale;
          var x=(pageWidth-width)/2;
          var y=(pageHeight-height)/2;
          pdf.addImage(renderPage(image,index,config),'JPEG',x,y,width,height,undefined,'FAST');
        });
        var filename=(title||'手順書').replace(/[\\/:*?"<>|]/g,'_').trim()||'手順書';
        pdf.save(filename+'.pdf');
        showStatus('PDFを保存しました。全'+pages.length+'ページです。');
      })
      .catch(function(error){showStatus(error.message||'PDFの作成に失敗しました。',true);});
  };
})();