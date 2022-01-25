var sorteio = Math.floor(Math.random() * 6 + 1); // Math.random faz sorteado numeros aleatores o site quando é atualizado


switch(sorteio){
    case 1: document.getElementById("teste").src="face1.png"; 
    break;

    case 2: document.getElementById("teste").src="face2.png"; 
    break;

    case 3: document.getElementById("teste").src="face3.png"; 
    break;
    
    case 4: document.getElementById("teste").src="face4.png"; 
    break;

    case 5: document.getElementById("teste").src="face5.png"; 
    break;

    case 6: document.getElementById("teste").src="face6.png"; 
    break;

    default: break
}