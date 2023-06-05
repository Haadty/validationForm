//aqui que fica todas as ultilidades que vão ser usadas no sistema

//mudar a mensagem que o sistema vai exibir
function displayAlert(type, message) {
  document.getElementById("alert").style.display = "block";
  if (type == 1)
    document.getElementById("alert").className = "alert alert-danger";
  else if (type == 2)
    document.getElementById("alert").className = "alert alert-success";
  document.getElementById("alert").textContent = message;
}

//aqui a conta que e feita com os digitos para ver se o cpf e valido ou não
function CpfCount(s) {
  var c = s.substr(0, 9);
  var dv = s.substr(9, 2);
  var d1 = 0;
  for (var i = 0; i < 9; i++) {
    d1 += c.charAt(i) * (10 - i);
  }
  if (d1 == 0) return false;
  d1 = 11 - (d1 % 11);
  if (d1 > 9) d1 = 0;
  if (dv.charAt(0) != d1) {
    return false;
  }
  d1 *= 2;
  for (var i = 0; i < 9; i++) {
    d1 += c.charAt(i) * (11 - i);
  }
  d1 = 11 - (d1 % 11);
  if (d1 > 9) d1 = 0;
  if (dv.charAt(1) != d1) {
    return false;
  }
  return true;
}

//aqui e feita a verificação se o cpf e valido ou não
function Cpfvalidate() {
  var s = document.getElementById("cpf").value.replace(/\D/g, "");

  if (s.length == 11) {
    if (!CpfCount(s)) {
      return false;
    }
  } else return false;

  if (
    s == "11111111111" ||
    s == "22222222222" ||
    s == "33333333333" ||
    s == "44444444444" ||
    s == "55555555555" ||
    s == "66666666666" ||
    s == "77777777777" ||
    s == "88888888888" ||
    s == "99999999999"
  ) {
    return false;
  }

  return true;
}

//aqui e aplicado a mascara do telefone
const maskPhone = (valor) => {
  valor = valor.replace(/\D/g, "");
  valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
  valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
  document.getElementById("telefone").value = valor;
};

//aqui e aplicado a mascara do cpf
const maskCpf = (valor) => {
  valor = valor.replace(/\D/g, "");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
  valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  document.getElementById("cpf").value = valor;
};

//daqui pra baixo funçoes de checar inputs
//checar um input especifico do form
function checkSpecificInput(n) {
  if (n.className != "form-control") {
    if (n.checkValidity()) n.className = "form-control is-valid";
    else n.className = "form-control is-invalid";
    if (n.id == "cpf" && !Cpfvalidate())
      n.className = "form-control is-invalid";
  }
}

//checar todo os inputs do form
function CheckInputs(form) {
  Array.from(form).forEach((input) => {
    if (input.tagName.toLowerCase() === "input") {
      if (input.checkValidity()) input.className = "form-control is-valid";
      else input.className = "form-control is-invalid";
    }
  });
}
//resetar todos os inputs do form
function ResetInputs(form) {
  Array.from(form).forEach((input) => {
    if (input.tagName.toLowerCase() === "input")
      input.className = "form-control";
  });
}
