// created a button that toggles dark mode on and off
$("#darkMode").click(function () {
  var element = document.body;
  element.classList.toggle("dark-mode");
  if(element.classList.length!=0){
    console.log("darkmode on");
    localStorage.setItem("darkmode","true")
  } else{
    console.log("darkmode off");
    localStorage.setItem("darkmode", "false")
  }
});

