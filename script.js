function noScroll() { 
  let toggleButton = document.getElementById("toggler");
  if (toggleButton.checked) {
    toggleButton.checked = true; document.body.classList.add('no-scroll')
  } else {
    toggleButton.checked = false; document.body.classList.remove('no-scroll')
  }
} 

function uncheck() {
  let toggleButton = document.getElementById("toggler");
  if (toggleButton.checked) {
    toggleButton.checked = false; document.body.classList.remove('no-scroll')
  } else {
    toggleButton.checked = true;
  }
}

function showDiv() {
  var htmlShow = document.getElementById("index-logo");
  if (htmlShow.style.display === "none") {
    htmlShow.style.display = "visible";
  } else {
    htmlShow.style.display = "none";
  }
}

