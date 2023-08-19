var allBtns = document.querySelectorAll("#btn");

allBtns.forEach(function (btn) {
  btn.onclick = function () {
    alert("Text has been copied");
  };
});