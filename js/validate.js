//aqui e onde tudo e validado

//começar usando um repetidor pra verificar e pegar todos os inputs na cena
Array.from(document.querySelectorAll(".needs-validation")).forEach((form) => {
  //aplicar um submit e cancelar seu efeito de resetar a pagina, pra fazer a verificação de inputs
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    //classe do bootstrap pra validar
    form.classList.add("needs-validation");

    //primeira checagem geral pra validar
    if (!form.checkValidity()) {
      event.stopPropagation();
      CheckInputs(form);
      displayAlert(1, "Prencha todos os campos corretamente");

      //se algum deu invalido ele ainda vai verificar se o cpf que foi inserido pelo menos e valido
      if (document.getElementById("cpf").value.length == 14 && !Cpfvalidate()) {
        displayAlert(
          1,
          "O CPF informado e invalido e os campos não estão prenchindo corretamente!"
        );
        document.getElementById("invalid-cpf").textContent = "CPF invalido!";
        document.getElementById("cpf").className = "form-control is-invalid";
      }
    } else {
      //aqui pra baixo e verificação se o cpf e valido
      if (!Cpfvalidate()) {
        event.stopPropagation();
        CheckInputs(form);
        displayAlert(1, "CPF invalido");
        document.getElementById("invalid-cpf").textContent = "CPF invalido!";
        document.getElementById("cpf").className = "form-control is-invalid";
      } else {
        //caso tudo certo daqui pra baixo e so reset de form
        ResetInputs(form);
        displayAlert(2, "login com sucesso");
        form.reset();
        document.getElementById("invalid-cpf").textContent =
          "Prencha esse campo corretamente!";
        form.classList.remove("needs-validation");
      }
    }
  });
});
