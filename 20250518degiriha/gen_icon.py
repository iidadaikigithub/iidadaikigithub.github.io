from PIL import Image, ImageDraw, ImageFont

def make_icon(size, text, filename):
    img = Image.new('RGB', (size, size), 'white')
    draw = ImageDraw.Draw(img)
    try:
        font = ImageFont.truetype("DejaVuSans-Bold.ttf", size // 3)
    except:
        font = ImageFont.load_default()
    bbox = draw.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    h = bbox[3] - bbox[1]
    draw.text(((size-w)//2, (size-h)//2), text, fill='black', font=font)
    img.save(filename)

make_icon(192, 'PWA', '20250518degiriha/icon-192.png')
make_icon(512, 'PWA', '20250518degiriha/icon-512.png')
