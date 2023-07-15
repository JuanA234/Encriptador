


window.onload = function(){
    document.getElementById("botonE").onclick=encriptador; 
}

//Función para encriptar el texto que ingresamos

function encriptador(){
    var texto = document.getElementById("texto").value;
    var encriptado = [].map.call(texto,function(texto){
        for(let i = 0; i<texto.length; i++){
            switch(texto[i]){
                case 'a':
                    texto = texto.replaceAll("a", "ai");
                    break;
                case 'e':
                    texto = texto.replaceAll("e", "enter");
                    break;
                case 'i':
                    texto = texto.replaceAll("i", "imes");
                    break;
                case 'o':
                    texto = texto.replaceAll("o", "ober");
                    break;
                case 'u':
                    texto = texto.replaceAll("u", "ufat");
                    break;
                default:
                    break;  
            }
            break;
        }
        return texto;
    }).join('');

    document.getElementById("encriptado").innerHTML = encriptado;
    document.getElementById("muneco").style.display = "none";
    document.getElementById("cuadro_texo").style.display = "none";
    document.getElementById("encriptador").style.display = encriptado;
}



function desencriptador(texto){
    var desencriptado = [].map.call(texto,function(x){
        for(let i = 0; i<texto.length; i++){
            switch(texto[i]){
                case 'a':
                    x = texto.replaceAll("ai", "a");
                    break;
                case 'e':
                    x = texto.replaceAll("enter", "e");
                    break;
                case 'i':
                    x = texto.replaceAll("imes", "i");
                    break;
                case 'o':
                    x = texto.replaceAll("ober", "o");
                    break;
                case 'u':
                    x = texto.replaceAll("ufat", "u");
                    break;
                default:
                    break;  
            }
            break;
        }
    
        return x;
    }).join('');
    return desencriptado; 
}






