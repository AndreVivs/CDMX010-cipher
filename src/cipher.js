const cipher = {
  
  //Encode Text
  encode: function (txtToCode,numero){
    alert ("encode text")

    let newString="";
  for (let c=0; c < txtToCode.length; c++){
    let asciiTxt = txtToCode.charCodeAt(c);
  if (asciiTxt >= 65 && asciiTxt <= 90){
    let newAsciiTxt = (asciiTxt - 65 + numero)% 26 + 65;
    newString += String.fromCharCode(newAsciiTxt);
  } 
  }
  return newString;

},

//Decode partner text & Mensajes de despedida
decode : function (partnerTxt,partnerNmb){
  let newString="";
for (let c=0; c < partnerTxt.length; c++){
  let asciiPtxt = partnerTxt.charCodeAt(c);
if (asciiPtxt >= 65 && asciiPtxt <= 90){
  let newAsciiPtxt = (asciiPtxt - 65 - partnerNmb)% 26 + 65;
newString += String.fromCharCode(newAsciiPtxt);
} 
}
return newString
},
  //Encode Name
  encodename : function (name, off) {

    alert("encode name");

      let newString = "";
    for (let i = 0; i < name.length; i++) {
      let asciiName = name.charCodeAt(i);
      let newAsciiName = (asciiName - 65 + off) % 26 + 65;
      newString += String.fromCharCode(newAsciiName);
    }
    return newString;
  },
  
  //Decode partner name
  decodepartnername : function (partnerName,off){
      let newStringp="";
    for (let c=0; c < partnerName.length; c++){
      let asciiPname = partnerName.charCodeAt(c);
      let newAsciiPname = (asciiPname - 65 - off)% 26 + 65;
      newStringp += String.fromCharCode(newAsciiPname);
    }
    return newStringp
  }
}
export default cipher;