import cipher from './cipher.js';
//Encode name
document.getElementById("send").addEventListener("click", function(){
  alert('cifrando nombre')
  let off=3;
  let name=document.getElementById("name").value;
  let encode=cipher.encodename(name,off);
document.getElementById('cont3').innerHTML=' YOUR LOGING NAME IS '+ encode ;
})
//Encode text
document.getElementById("cif").addEventListener("click", function(){
  alert ("cifrando texto")
  let numero= parseInt(document.getElementById("num").value);
  let txtToCode=document.getElementById("txtToCode").value;
  let encode=cipher.encode(txtToCode,numero);
document.getElementById('txtCode').value=encode;
})
//Decode partner name
document.getElementById("decode").addEventListener("click",function(){
  alert('descifrando nombre')
  let off=3;
  let partnerName=document.getElementById("logingname").value;
  let decode=cipher.decodepartnername(partnerName,off);
document.getElementById('partnername').value=decode;
})
//Decode partner text & Mensajes de despedida
document.getElementById("decode").addEventListener("click",function(){
  alert('descifrando texto')
  let partnerNmb= parseInt(document.getElementById("partnum").value);
  let partnerTxt = document.getElementById("partnerTxt").value;
  let decode=cipher.decode(partnerTxt,partnerNmb);
document.getElementById('partnerTxtDec').value=decode;
//Estos son los mensajes de despedida.
let name=document.getElementById("name").value;
document.getElementById('cont8').innerHTML='¡YAAAAY, LO HAS LOGRADO ' + name + '!'
document.getElementById('cont9').innerHTML='DISFRUTA TUS VACACIONES, NOS VEMOS EL PROXIMO AÑO CON TODO EL ÁNIMO DEL MUNDO'

})