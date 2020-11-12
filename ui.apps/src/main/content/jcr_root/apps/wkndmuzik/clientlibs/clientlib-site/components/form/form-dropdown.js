var x, i, j, l, ll, selElmnt, a, b, c;
/*look for any elements with the class "options--custom-drop-down":*/
x = document.getElementsByClassName("options--custom-drop-down");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /*for each element, create a new DIV that will act as the selected item:*/
  a = document.createElement("DIV");
  a.setAttribute("class", "cmp-form-options__select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /*for each element, create a new DIV that will contain the option list:*/
  b = document.createElement("DIV");
  b.setAttribute("class", "cmp-form-options__select-items cmp-form-options__select-items-hide");
  for (j = 1; j < ll; j++) {
    
    c = document.createElement("DIV");
    c.setAttribute("class", "cmp-form-options__select-items-values");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {

        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName("cmp-form-options__select-items-selected");
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute("class");
            }
            this.setAttribute("class", "cmp-form-options__select-items-selected");
            break;
          }
        }
        h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {

      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle("cmp-form-options__select-items-hide");
      this.classList.toggle("cmp-form-options--select-arrow");
    });
}
function closeAllSelect(elmnt) {

  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("cmp-form-options__select-items");
  y = document.getElementsByClassName("cmp-form-options__select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("cmp-form-options--select-arrow");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("cmp-form-options__select-items-hide");
    }
  }
}

document.addEventListener("click", closeAllSelect);