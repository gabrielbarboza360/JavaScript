var beep = new Audio();
beep.src = "beep.mp3";
beep.play();

var explosao = new Audio()
explosao.src = "explosao.mp3";
explosao.play();

var check = false;

function inicia(){
    if (check == false){
    var time1 = setInterval(function(){start()}, 1500);
    var time2 = setTimeout(function(){preto()}, 1920);
    var contador = 10;

    function start(){
        beep.play();  
        window.document.getElementById('txt').innerHTML = contador;
         if(contador == 0){
             clearInterval(time1);
             explosao.play();
             window.document.getElementById('imagem1').src = "explosion.gif";
             document.getElementById('txt').innerHTML = "GAME OVER"
}
        contador --;
    
}
}
    check = true;
}

function preto(){
    document.getElementById('imagem1').src = "preto.png"
}