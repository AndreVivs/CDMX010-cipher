//import cipher from './cipher.js';

//console.log(cipher);
function encodeName (){
    let off=3;
    let name=document.getElementById("txt").value;
    console.log(name);
    document.getElementById('cont1').innerHTML='¡Apartir de ahora dejas de ser '+ name +' para se conocido como...!';
  
    alert ("hola")
  let newString="";
  for (let c=0; c < name.length; c++){
    let asciiName = name.charCodeAt(c);
  console.log(asciiName);
  let newAsciiName = (asciiName-65+off)% 26 + 65;
  console.log(newAsciiName);
  newString += String.fromCharCode(newAsciiName);
  console.log(newString);
  document.getElementById('cont2').innerHTML=newString;
  document.getElementById('cont3').innerHTML='BIENVENIDO '+ newString + ' VAMOS A CIFRAR ESE MENSAJE';
  }
  return newString;
  }
  
  function encodeTxt(){
    let numero= parseInt(document.getElementById("num").value);
    console.log(numero);
    let txtToCode=document.getElementById("txtCode").value;
    console.log(txtToCode);
  
  alert ("holis")
  
  let newString="";
  for (let c=0; c < txtToCode.length; c++){
    let asciiTxt = txtToCode.charCodeAt(c);
  console.log(asciiTxt);
  let newAsciiTxt = (asciiTxt-65+numero)% 26 + 65;
  console.log(newAsciiTxt);
  newString += String.fromCharCode(newAsciiTxt);
  console.log(newString);
  document.getElementById('cont4').innerHTML=newString;
  }
  return newString;
  }
  
  function decode (){
    let name=document.getElementById("txt").value;
    console.log(name);
  document.getElementById('cont5').innerHTML='¡Perfecto! ' + name + ' parece que todo esta regresando a la normalidad.';
  
   let partnerNmb= parseInt(document.getElementById("partnum").value);
    console.log(partnum);
    let partnerTxt = document.getElementById("text").value;
    console.log(partnerTxt);
  
    alert ("hola")
  
  let newString="";
  for (let c=0; c < partnerTxt.length; c++){
    let asciiPtxt = partnerTxt.charCodeAt(c);
  console.log(asciiPtxt);
  let newAsciiPtxt = (asciiPtxt-65-partnerNmb)% 26 + 65;
  console.log(newAsciiPtxt);
  newString += String.fromCharCode(newAsciiPtxt);
  console.log(newString);
  document.getElementById('cont6').innerHTML=newString;
  }
  
    let off=3;
    let partnerName=document.getElementById("partner").value;
    console.log(partnerName);
  
    alert ("hola")
  
  let newStringp="";
  for (let c=0; c < partnerName.length; c++){
    let asciiPname = partnerName.charCodeAt(c);
  console.log(asciiPname);
  let newAsciiPname = (asciiPname-65-off)% 26 + 65;
  console.log(newAsciiPname);
  newStringp += String.fromCharCode(newAsciiPname);
  console.log(newStringp);
  document.getElementById('cont7').innerHTML=newStringp;
  }
  document.getElementById('cont8').innerHTML='¡YAAAAY! LO HAS LOGRADO. DISFRUTA TUS VACACIONES, NOS VEMOS EL PROXIMO AÑO CON TODO EL ÁNIMO DEL MUNDO'
  }