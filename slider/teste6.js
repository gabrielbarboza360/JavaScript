var intervalo = 1000;


function slide1(){
   document.getElementById('imagem1').src="banner1.jpg";
   setTimeout("slide2()",intervalo);
}

function slide2(){
    document.getElementById('imagem1').src="banner2.jpg";
    setTimeout("slide3()",intervalo);
}

function slide3(){
    document.getElementById('imagem1').src="banner3.jpg";
    setTimeout("slide1()",intervalo);
}