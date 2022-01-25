var gasolina;

var etanol;

function calcular(){
    etanol = parseFloat(formulario.formularioetanol.value.replace(",","."));  
    gasolina = parseFloat(formulario.formulariogasolina.value.replace(",","."));

     if (etanol < 0.7*gasolina){
         document.getElementById("experiencia").src="etanol.png";
     }
  
      else{
          document.getElementById("experiencia").src="gasolina.png";
      }
}

function limpar(){
    document.getElementById("experiencia").src="neutro.png"
}