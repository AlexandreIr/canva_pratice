let currentColor = 'black';
const screen = document.querySelector('#tela');
const ctx = screen.getContext('2d');

const colorClick = (e) =>{
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

