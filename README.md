# Encriptador de texto Alura

Challenge en Alura que se basa en la creación de un sitio web que pueda encriptar texto


## Funcionamiento encriptador 🛠️

#### Javascript　

```javascript
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

```

## Desencriptar texto
#### Javascript　

```javascript
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
```
 
