// Declaracion de variables de diferentes elementos HTML
let fraseEncriptada = document.getElementById("textarea-encrip");
let frase = document.getElementById("textarea-men-encritador");
let loader = document.getElementById("loader-encriptador");
let muneco = document.getElementById("muneco");
let mensaje = document.getElementById("mensaje");
// Declaracon de variables
let setTime;

// Funcion para cuando el usuario haga click en el boton encriptar
const encriptar = () => {
  // se declara un variable
  let textoEncriptado;
  // primero se ejecutara la funcion validacionMayus
  validacionMayus();
  //  un if si el textarea perteneciente a la variable fraseEncriptada esta vacio... si lo esta continuara con el codigo.
  if (fraseEncriptada.value.trim() == "") {
    // gracias al método replace() y los modificadores g que recorre toda las palabras e i que tome las letras a pesar q este en mayuscula o en minuscula... la variable textoEncriptado guandara los valores escritos de frase y hara los respectivos reemplasos de las letras
    textoEncriptado = frase.value
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");

    //si el text area llamado frase no esta vacio
    if (frase.value.trim() !== "") {
      // aparecera el div de imagen de carga que se le asigno la variable loader
      loader.style.zIndex = 1;
      // se hace esconder e div q se le asigno el nombre de la variable muneco (que tiene dispaly ="block")
      muneco.style.display = "none";
      // lo mismo con el div mensaje.
      mensaje.style.display = "none";
      // hace un intervalo de tres segundos gracias a la funcion tiempo()
      tiempo();
      // se muestra lo que contiene texto encriptado al text area con la variable fraseEncriptada
      fraseEncriptada.innerText = textoEncriptado;
      // codigo para asgurarse que funciono (opcional si se desea utilizarlo)
      // console.log(textoEncriptado);
      //limpia el campo gracias a la funcion limpiar()
      limpiar();
      // si hace click y el campo esta vacio
    } else {
      // se enviara un mensaje de alerta al usuario diciendo que no ha ingresado nada
      alert("Error. No ha ingresado ninguna información.");
    }

    // si el text area llamado fraseEncrptada  NO está vacío entonces...
  } else {
    // se le pregunta al usuario y su resultado se guardara en una variable llamada confirmar
    let confirmar = confirm("¿Desea descifrar otra vez?");
    // si la respuesta fue SI o OK
    if (confirmar == true) {
      // se hara otra vez el proceso de encriptar
      textoEncriptado = fraseEncriptada.value
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

      // se hace aparecer el div  del mensaje que se le asigno la variable loader (gracias a z-index)
      loader.style.zIndex = 1;
      // se hace esconder el text area q se le asigno el nombre de la variable fraseEncriptada
      fraseEncriptada.style.zIndex = -1;
      // se esconde el button con el id "boton-copiar" (que tiene display: block)
      document.getElementById("boton-copiar").style.display = "none";
      // hace un intervalo de tres segundos gracias a la funcion tiempo()
      tiempo();
      // se muestra lo que contiene texto encriptado al text area con la variable fraseEncriptada
      fraseEncriptada.innerText = textoEncriptado;
      // a travez de .disabled = true se desactiva en boton con el id boton-encriptar para que el usuario no continue interactuando con el boton
      document.getElementById("boton-encripar").disabled = true;
      // a travez de .disabled = true se desactiva en boton con el id boton-desecriptar para que el usuario no continue interactuando con el boton
      document.getElementById("boton-desepcriptar").disabled = true;
      // se ejecutara la funcion validacion() (si el usuario desea copiar el texto encriptado)
      validacion();
      // si el usuario no dese desifrar otra vez el texto escrito
    } else {
      // se ejecutara la funcion limpiar() para limpiar los campos
      limpiar();
    }
  }
};

//funcion para desencriptar el mensaje ya encriptado
const desenpcriptar = () => {
  let textoEncriptado = fraseEncriptada.value
    // gracias al método replace() y los modificadores g que recorre toda las palabras e i que tome las letras a pesar q este en mayuscula o en minuscula... la variable textoEncriptado guandara los valores escritos de fraseEncriptada y hara los respectivos reemplasos de las letras
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  //si el text area llamado fraseEncriptada no esta vacio
  if (fraseEncriptada.value.trim() !== "") {
    // se hace aparecer el div  del mensaje que se le asigno la variable loader (gracias a z-index)
    loader.style.zIndex = 1;
    // se hace esconder el text area q se le asigno el nombre de la variable fraseEncriptada
    fraseEncriptada.style.zIndex = -1;
    // se esconde el button con el id "boton-copiar" (que tiene display: block)
    document.getElementById("boton-copiar").style.display = "none";
    // hace un intervalo de tres segundos gracias a la funcion tiempo()
    tiempo();
    // se muestra lo que contiene texto encriptado al text area con la variable fraseEncriptada
    fraseEncriptada.innerText = textoEncriptado;

    // si el text area esta vacio
  } else {
    // se mandara un mensaje al usuario diciendo lo siguiente.
    alert("No hay mensaje para desencriptar.");
  }
};

//funcion para limpiar los text area luego de hacer click a los botones
const limpiar = () => {
  // el text area asinado con la variable frase hace foco
  frase.focus();
  // si la cadena de texto no esta vacio
  if (frase.value.trim() !== "") {
    // se borra todo lo que hay en el textarea
    frase.value = "";
    // se deja de dar foco al text area
    frase.blur();
    // sino
  } else {
    // el text area con la varible asignada fraseEncriptada borra todo lo q esta en el text area
    fraseEncriptada.value = " ";
    // se deja de dar foco al text area
    fraseEncriptada.blur();
    // se esconde el div con un z index -1
    fraseEncriptada.style.zIndex = -1;
    // se oculta el boton-copiar
    document.getElementById("boton-copiar").style.display = "none";
    //se reinicia el programa
    location.reload();
  }
};

//funcion para copiar el texto encriptado
const copiarTexto = () => {
  // selecciona el texto del text area (let fraseEncriptada)
  fraseEncriptada.select();
  // se crea una condicion en la cual si el elemento esta copiado
  if (navigator.clipboard.writeText(fraseEncriptada.value)) {
    alert("Mensaje copiado exitosamente");
    limpiar();
  } else {
    // envia un mensaje al usuario diciendo que no se pudo copiar el texto
    alert("No se pudo copiar el texto, vuelva a intentarlo");
    // reinicia el programa
    location.reload();
  }
};

//funcion para el intervalo de tres segundos
const tiempo = () => {
  setTime = setTimeout(showPage, 2000);
};

//funcon para que se realice la accion despues de los tres segundos
function showPage() {
  // se enconde el div con id loader-encriptador a posicion -2
  document.getElementById("loader-encriptador").style.zIndex = -2;
  // aparesca el text area con la variable asignada llamada  fraseEncriptada.
  fraseEncriptada.style.zIndex = 1;
  // aparesca el boton copiar en la pantalla que esta con display "none"
  document.getElementById("boton-copiar").style.display = "block";
}

//funcion para que el usuario no escriba en mayusculas o con acentos
function validacionMayus() {
  //declaracion de la variable mayus que contiene el valor del text area llamado frase
  let mayus = frase.value;
  //declaracion de la variable contieneMayusculasOAcentos en el cual se le asigna si mayus tuvo una coincidencia de letras en mayusculas de la a a la z y si las vocales en minuscula y en mayuscula tienen acento.
  let contieneMayusculasOAcentos = mayus.match(/[A-ZÁÉÍÓÚáéíóú]/);
  //si contiene mayus o acentos se ejecuta el if
  if (contieneMayusculasOAcentos) {
    //manda un mensaje de alerta al usuario diciendole el mensaje
    alert("Solo letras minúsculas y sin acentos");
    //reinicia el programa
    location.reload();
  }
}

//funcion para validar si el usuario quiere copiar el texto encriptado
const validacion = () => {
  // Agregar un event listener a textarea frase para detectar cambios en su contenido
  frase.addEventListener("input", () => {
    // guardar el contenido de windows.confirm en una variable
    let confirmar = window.confirm("¿Desea copiar?");
    // si el usuario acepto
    if (confirmar == true) {
      // se invoca a la funcion limpiar
      limpiar();
      // se deshabilita el text area llamado frase
      frase.disabled = true;
      // sino
    } else {
      // se invoca a la funcion limpiar
      limpiar();
    }
  });
};
