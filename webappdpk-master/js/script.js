let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');


menu.onclick = () =>{
    /*untuk mengganti ikon menu menjadi ikon "X" atau sebaliknya saat tombol menu diklik*/
    menu.classList.toggle('fa-times');
    /*digunakan untuk mengaktifkan atau menonaktifkan efek tampilan tertentu pada elemen header saat tombol menu diklik.*/
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

/*elemen cursor1 dan cursor2 akan selalu mengikuti pergerakan mouse di atas halaman web*/
window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

/*membuat efek visual saat mouse berada di atas tautan-tautan dalam halaman web*/
document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    /*untuk membuat animasi atau efek interaktif yang berubah sesuai dengan interaksi mouse pada tautan dalam halaman web*/
    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});