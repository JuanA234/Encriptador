

navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );


document.getElementById("botonC").style.display = "none";
//Función para encriptar el texto que ingresamos

function encriptador(){
    var texto = document.getElementById("texto").value;
    var palabras = texto.split(" ");
    var palabrasEncriptadas = palabras.map(function(palabra){
        for(let i=0; i<palabras.length; i++){
            if(palabra[i]=='a'){
                palabra = palabra.replace(/a/g, "ai");
            }else if(palabra[i]=='e'){
                palabra = palabra.replace(/e/g, "enter");
            }else if(palabra[i]=='i'){
                palabra = palabra.replace(/i/g, "imes");
            }
            else if(palabra[i]=='o'){
                palabra = palabra.replace("o", "ober"); 
            }
            else if(palabra[i]=='u'){
                palabra = palabra.replace("u", "ufat"); 
            }
    
            /*
            switch(palabra[i]){
                case 'a':
                    break;
                case 'e':
                    palabra = palabra.replaceAll(/e/g, "enter");
                case 'i':
                    palabra = palabra.replaceAll(/i/g, "imes");
                    break;
                case 'o':
                    palabra = palabra.replaceAll("o", "ober");
                    break;
                case 'u':
                    palabra = palabra.replaceAll("u", "ufat");
                    break;
                default:
                    break;  
            }
            */

        }

        
        return palabra;
    });

        var encriptado = palabrasEncriptadas.join(" ");

        document.getElementById("textoE/D").innerHTML = encriptado; 
        document.getElementById("muneco").style.display = "none";
        document.getElementById("cuadro_texo").style.display = "none";
        document.getElementById("botonC").style.display = "block";
        
}



//función para desencriptar el texto que ingresamos
function desencriptador(){
    var texto = document.getElementById("texto").value;
    var palabras = texto.split(" ");
    var palabrasDesencriptadas = palabras.map(function(palabra){
        palabra = palabra.replaceAll(/ai/g, "a");
        palabra = palabra.replaceAll(/enter/g, "e");
        palabra = palabra.replaceAll(/imes/g, "i");
        palabra = palabra.replaceAll(/ober/g, "o");
        palabra = palabra.replaceAll(/ufat/g, "u");
      
        return palabra;
    });

    var desencriptado = palabrasDesencriptadas.join(" ");
    document.getElementById("textoE/D").innerHTML = desencriptado; 
    document.getElementById("muneco").style.display = "none";
    document.getElementById("cuadro_texo").style.display = "none";
    document.getElementById("botonC").style.display = "block";
}

/*



function copiar() {
    var copyText = document.querySelector("#textoE/D");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#botonC").addEventListener("click", copiar);
  
*/

