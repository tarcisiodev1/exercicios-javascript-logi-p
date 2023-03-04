document.getElementById("button").addEventListener("click", function () {
  const inputPeso = document.getElementById("peso");
  const inputAltura = document.getElementById("altura");

  localStorage.setItem("text", input.value);
  input.value = "";
});
