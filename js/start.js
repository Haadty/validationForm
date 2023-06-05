//aqui adiciona todo os events que vão ser executaods nos inputs, ou seja quando um input tem uma modificação isso aqui que atualiza

const inputs = document.querySelectorAll("[data-getInput]");

//aqui apenas fazer o alerta começar escondido
document.getElementById("alert").style.display = "none";

//daqui pra baixo so adição de eventos em inputs
for (let i = 0; i < inputs.length; i++) {
  inputs[i].addEventListener("input", (e) => checkSpecificInput(inputs[i]));
  inputs[i].addEventListener("paste", (e) => checkSpecificInput(inputs[i]));
  inputs[i].addEventListener("blur", (e) => checkSpecificInput(inputs[i]));
  inputs[i].addEventListener("keypress", (e) => checkSpecificInput(inputs[i]));
  inputs[i].addEventListener("change", (e) => checkSpecificInput(inputs[i]));

  if (inputs[i].id == "cpf") {
    inputs[i].addEventListener("input", (e) => maskCpf(e.target.value));
    inputs[i].addEventListener("paste", (e) => maskCpf(e.target.value));
    inputs[i].addEventListener("blur", (e) => maskCpf(e.target.value));
    inputs[i].addEventListener("keypress", (e) => maskCpf(e.target.value));
    inputs[i].addEventListener("change", (e) => maskCpf(e.target.value));
  }

  if (inputs[i].id == "telefone") {
    inputs[i].addEventListener("input", (e) => maskPhone(e.target.value));
    inputs[i].addEventListener("paste", (e) => maskPhone(e.target.value));
    inputs[i].addEventListener("blur", (e) => maskPhone(e.target.value));
    inputs[i].addEventListener("keypress", (e) => maskPhone(e.target.value));
    inputs[i].addEventListener("change", (e) => maskPhone(e.target.value));
  }
}
