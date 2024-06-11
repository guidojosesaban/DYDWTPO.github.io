const menuBtn = document.getElementById('menuBtn');
const respNav = document.getElementById('respNav');

menuBtn.addEventListener('click', function(){
    if(respNav.style.display === 'flex'){
        respNav.style.display = 'none';
    } else {
        respNav.style.display = 'flex';
    }
});
