

document.getElementById("botonC").style.display = "none";
//Función para encriptar el texto que ingresamos

function encriptador() {
  var texto = document.getElementById("texto").value;
  var letras = texto.split(/(?=[a-zA-Z])/);
  var letrasEncriptadas = letras.map(function (letra) {
    switch (letra) {
      case "a":
        letra = letra.replace(/a/g, "ai");
        break;
      case "i":
        letra = letra.replace(/i/g, "imes");
        break;
      case "e":
        letra = letra.replace(/e/g, "enter");
        break;

      case "o":
        letra = letra.replace("o", "ober");
        break;
      case "u":
        letra = letra.replace("u", "ufat");
        break;
    }

    return letra;
  });

  var encriptado = letrasEncriptadas.join("");

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





function copiarTexto() {
    var elemento = document.getElementById("textoE/D");
    var texto = elemento.textContent || elemento.innerText;

    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(texto)
        .then(function() {
        })
        .catch(function(error) {
          console.error("Error al copiar el texto: ", error);
        });
    } else {
      var textarea = document.createElement("textarea");
      textarea.value = texto;
      textarea.style.position = "fixed";  // Para asegurar que esté visible aunque esté oculto
      document.body.appendChild(textarea);
      textarea.focus();
      textarea.select();
      try {
        var copiado = document.execCommand("copy");
        if (copiado) {
          alert("Texto copiado: " + texto);
        } else {
          throw new Error("No se pudo copiar el texto");
        }
      } catch (error) {
        console.error("Error al copiar el texto: ", error);
      }
      document.body.removeChild(textarea);
    }
  }

