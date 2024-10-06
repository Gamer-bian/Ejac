// menu responsive 
const menuabrir = document.querySelector('#close-open-i');
const menucerrar = document.querySelector('#close-i');
const list = document.querySelector('.header__ul-reponsive');

menucerrar.addEventListener('click', function () {
    list.classList.toggle('header__ul-reponsive-open'); 
    menuabrir.style.display = 'block';
    menucerrar.style.display = 'none';   
})

menuabrir.addEventListener('click', function() {
    list.classList.toggle('header__ul-reponsive-open');
    menuabrir.style.display = 'none';
    menucerrar.style.display = 'block';
});

// boton de ir hacia arriba
const btnup = document.querySelector('#botonup');
const btnupcontainer = document.querySelector('.boton-go-to-top-container');

btnup.addEventListener('click', (e)=>{
    if(e.target == btnup || e.target == btnupcontainer){
        window.scrollTo({
            behavior: 'smooth',
            top: 0
        });
    }
});

window.addEventListener('scroll', function(){
    let y = document.documentElement.scrollTop;
    if(y === 0){
        btnup.classList.add('hidebtn');
        btnup.classList.remove('showbtn');
    }else if(y >= 300){
        btnup.classList.add('showbtn');
        btnup.classList.remove('hidebtn');
    }
})
