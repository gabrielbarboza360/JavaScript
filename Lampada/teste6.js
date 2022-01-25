function acender(){
    document.getElementById('lampadaoff').src="lampadaon.jpg";
}

function apagar(){
    document.getElementById('lampadaoff').src="lampadaoff.jpg";
}

function piscapisca(){
    var intervalo = 0;
    var contador = 0;
    while(contador < 10){
         
     intervalo += 300;
     setTimeout("document.getElementById('lampadaoff').src='lampadaon.jpg';",intervalo);
     intervalo += 300;
     setTimeout("document.getElementById('lampadaoff').src='lampadaoff.jpg';",intervalo);
     contador++;

    }
}