
  //Copy output...........
  function copyClipboard() {
  var inputField = document.getElementById("result");
  var textToCopy = inputField.value;
  
  var tempTextArea = document.createElement("textarea");
  tempTextArea.value = textToCopy;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand("copy");
  document.body.removeChild(tempTextArea);
  alert("Text copied! : " + textToCopy);
}
   