let bgChanger = document.querySelectorAll('.menu-links');
for( i = 0; i < bgChanger.length; i++ ){
    bgChanger[i].addEventListener('click', function(){
        this.classList.toggle('active2');
    })
};