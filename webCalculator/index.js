const display = document.getElementById("display");
const keys = document.getElementById("keys");

// Adiciona evento para cada botão
keys.addEventListener("click", (e) => {
  if (e.target.tagName !== "BUTTON") return;

  const value = e.target.dataset.value;

  if (value !== undefined) {
    display.value += value;
  }
});

// Botão C (limpar)
document.getElementById("clear").addEventListener("click", () => {
  display.value = "";
});

// Botão =
document.getElementById("equals").addEventListener("click", () => {
  try {
    // Usando Function ao invés de eval (mais seguro)
    display.value = new Function("return " + display.value)();
  } catch {
    display.value = "Erro";
  }
});

// Permitir digitar com teclado
document.addEventListener("keydown", (e) => {
  const validKeys = "0123456789+-*/.";
  if (validKeys.includes(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      display.value = new Function("return " + display.value)();
    } catch {
      display.value = "Erro";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === "c") {
    display.value = "";
  }
});
