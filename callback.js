function showForm() {
  var form = document.getElementById("contact-form");
  var button = document.getElementsByTagName("button")[0];
  if (form.style.display === "none") {
    form.style.display = "block";
    button.textContent = "Ακύρωση";
  } else {
    form.style.display = "none";
    button.textContent = "Στείλτε μας το τηλέφωνο σας και θα σας καλέσουμε εμείς!";
  }
}
