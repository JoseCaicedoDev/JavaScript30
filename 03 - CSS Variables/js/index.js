//querySelectorAll(".controls input") devuelve todos los elementos INPUT presente dentro de una clase CONTROLS
const inputs = document.querySelectorAll(".controls input");

const handleUpdate = function () {
  // suffix se guarda el valor del data-sizing en este caso es 'px'
  const suffix = this.dataset.sizing || "";
  //style.setProperty(propertyName, value, priority);
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + suffix
  );
};

inputs.forEach((input) => input.addEventListener("change", handleUpdate));
