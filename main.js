var title = document.createElement('h1');
title.textContent= "Sign Up For My Web App";
var formElement = document.querySelector('#form');
console.log(document);
console.log([formElement]);
for (var i = 0; i < formData.length; i++) {
  var currentObject =formData[i];
  if(currentObject.type === "textarea"){
    var inputElement = document.createElement('textarea');

  }else if(currentObject.type === 'select'){
    var inputElement = document.createElement('select');
  }

  else{
  var inputElement = document.createElement('input');
  }
  inputElement.id = currentObject.id;
  inputElement.type = currentObject.type;
  inputElement.placeholder = currentObject.label;
  formElement.appendChild(inputElement)
}
