const menuBtn=document.querySelector('.menu');
const navItem=document.querySelector('.nav-items');
menuBtn.addEventListener('click',function(){
    navItem.classList.toggle('show');
    if(navItem.classList.contains('show')){
        menuBtn.src='./photos/icons/cross.svg';
    }else{
        menuBtn.src='./photos/icons/menu.svg';
    }
})