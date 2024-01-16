let currentColor = 'black';
const screen = document.querySelector('#tela');
const ctx = screen.getContext('2d');
let cantDraw = false;
let sideX;
let sideY;

const draw = (posX, posY) => {
    let pX= posX - screen.offsetLeft;
    let pY= posY - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(sideX, sideY);
    ctx.lineTo(pX, pY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    sideX = pX;
    sideY = pY;
}

const mouseDownE = (e) => {
    cantDraw=true;
    sideX = e.pageX - screen.offsetLeft;
    sideY = e.pageY - screen.offsetTop;
}
const mouseMoveE = (e) => {
    if(cantDraw) {
        draw(e.pageX, e.pageY);
    }
}
const mouseUpE = (e) => {
    cantDraw=false;
}
const colorClick = (e) => {
    let color = e.target.getAttribute('data-color');
    if(color!=currentColor){
        e.target.classList.add('active');
        document.querySelectorAll('.color').forEach(btn=>{
            if(btn.getAttribute('data-color')==currentColor)  btn.classList.remove('active');
        });
        currentColor=color;
    }
}

document.querySelectorAll('.color').forEach(c=>c.addEventListener('click', colorClick));
screen.addEventListener('mousedown', mouseDownE);
screen.addEventListener('mousemove', mouseMoveE);
screen.addEventListener('mouseup', mouseUpE);

