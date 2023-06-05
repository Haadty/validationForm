//aqui adiciona todo os events que vão ser executaods nos inputs, ou seja quando um input tem uma modificação isso aqui que atualiza

//aqui apenas fazer o alerta começar escondido
document.getElementById("alert").style.display = "none";

//daqui pra baixo so adição de eventos em inputs
document.getElementById("telefone").addEventListener("input", (e) =>  checkSpecificInput("telefone"));
document.getElementById("telefone").addEventListener("paste", (e) =>  checkSpecificInput("telefone"));
document.getElementById("telefone").addEventListener("blur", (e) => checkSpecificInput("telefone"));
document.getElementById("telefone").addEventListener("keypress", (e) => checkSpecificInput("telefone"));
document.getElementById("telefone").addEventListener("change",  (e) => checkSpecificInput("telefone"));

document.getElementById("cpf").addEventListener("input", (e) =>  checkSpecificInput("cpf"));
document.getElementById("cpf").addEventListener("paste", (e) =>  checkSpecificInput("cpf"));
document.getElementById("cpf").addEventListener("blur", (e) => checkSpecificInput("cpf"));
document.getElementById("cpf").addEventListener("keypress", (e) => checkSpecificInput("cpf"));
document.getElementById("cpf").addEventListener("change",  (e) => checkSpecificInput("cpf"));

document.getElementById("gmail").addEventListener("input", (e) =>  checkSpecificInput("gmail"));
document.getElementById("gmail").addEventListener("paste", (e) =>  checkSpecificInput("gmail"));
document.getElementById("gmail").addEventListener("blur", (e) => checkSpecificInput("gmail"));
document.getElementById("gmail").addEventListener("keypress", (e) => checkSpecificInput("gmail"));
document.getElementById("gmail").addEventListener("change",  (e) => checkSpecificInput("gmail"));

document.getElementById("nome").addEventListener("input", (e) =>  checkSpecificInput("nome"));
document.getElementById("nome").addEventListener("paste", (e) =>  checkSpecificInput("nome"));
document.getElementById("nome").addEventListener("blur", (e) => checkSpecificInput("nome"));
document.getElementById("nome").addEventListener("keypress", (e) => checkSpecificInput("nome"));
document.getElementById("nome").addEventListener("change",  (e) => checkSpecificInput("nome"));

document.getElementById("telefone").addEventListener("keypress", (e) => maskPhone(e.target.value));
document.getElementById("telefone").addEventListener("change", (e) => maskPhone(e.target.value));
document.getElementById("telefone").addEventListener("blur", (e) => maskPhone(e.target.value));
document.getElementById("telefone").addEventListener("paste", (e) => maskPhone(e.target.value));
document.getElementById("telefone").addEventListener("input", (e) => maskPhone(e.target.value));

document.getElementById("cpf").addEventListener("input", (e) => maskCpf(e.target.value));
document.getElementById("cpf").addEventListener("paste", (e) => maskCpf(e.target.value));
document.getElementById("cpf").addEventListener("blur", (e) => maskCpf(e.target.value));
document.getElementById("cpf").addEventListener("keypress", (e) => maskCpf(e.target.value));
document.getElementById("cpf").addEventListener("change", (e) => maskCpf(e.target.value));

document.getElementById("telefone").addEventListener("keypress", maskPhone(e.target.value));
document.getElementById("telefone").addEventListener("change",  maskPhone(e.target.value));
document.getElementById("telefone").addEventListener("blur", maskPhone(e.target.value));
document.getElementById("telefone").addEventListener("paste", maskPhone(e.target.value));
document.getElementById("telefone").addEventListener("input", maskPhone(e.target.value));






