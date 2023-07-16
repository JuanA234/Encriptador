navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText)
  );

document.getElementById("botonC").style.display = "none";
//Función para encriptar el texto que ingresamos

function encriptador() {
  var texto = document.getElementById("texto").value;
  var palabras = texto.split(/(?=[a-zA-Z])/);
  console.log(palabras);
  var palabrasEncriptadas = palabras.map(function (palabra) {
  
      switch (palabra) {
        case "a":
          palabra = palabra.replace(/a/g, "ai");
          break;

        case "i":
          palabra = palabra.replace(/i/g, "imes");
          break;
        case "e":
          palabra = palabra.replace(/e/g, "enter");
          break;

        case "o":
          palabra = palabra.replace("o", "ober");
          break;

        case "u":
          palabra = palabra.replace("u", "ufat");
          break;
      }
    
     
      //console.log(palabras);
      //console.log(palabra);
    
   
     return palabra;
  });

  var encriptado = palabrasEncriptadas.join("");

  document.getElementById("textoE/D").innerHTML = encriptado;
  document.getElementById("muneco").style.display = "none";
  document.getElementById("cuadro_texo").style.display = "none";
  document.getElementById("botonC").style.display = "block";
}

//función para desencriptar el texto que ingresamos
function desencriptador() {
  var texto = document.getElementById("texto").value;
  var palabras = texto.split(" ");
  var palabrasDesencriptadas = palabras.map(function (palabra) {
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
