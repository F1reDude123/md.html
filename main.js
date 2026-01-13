class MDReader {
  readAsHTML(text) {
    var activeB=false;
    var activeI=false;
    
    var strArr = [];
    var newStr = [];
    
    text.split("").forEach(e => {
      strArr.push(e);
    });
    
    strArr.forEach(e => {
      if (e != "[b]" && e != "[i]") {
        newStr.push(e);
      }
      else {
        if (e == "[b]") {
          if (activeB) {
            newStr.push("</b>");
            activeB = false;
          }
          else {
            newStr.push("<b>");
            activeB = true;
          }
        }
        else if (e == "[i]") {
          if (activeI) {
            newStr.push("</i>");
            activeI = false;
          }
          else {
            newStr.push("<i>");
            activeI = true;
          }
        }
      }
    });

    return newStr.join("");
  }
}
