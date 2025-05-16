function includeHTML() {
  var z, i, elmnt, attrs, file, xhttp;
  /* Loop through a collection of all HTML elements: */
//   z = document.getElementsByTagName("*");
  z = document.getElementsByTagName("include");

  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/

    attrs = getAllAtributesValues(elmnt)
    file = elmnt.getAttribute("file");

    // console.log(attrs)

    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          includeHTML();
        }
      };
      xhttp.open("GET", "./resources/views/sections/" + file + ".html", true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

function getAllAtributesValues(attrs = []) {
    if(attrs.length == 0) { return false }

    return attrs.getAttributeNames().map((attr) => { return attr })
}
