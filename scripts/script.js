// Selecionando os botões de "anterior" e "próximo", a barra de progresso e os passos do formulário
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const progress = document.getElementById("progress");
const formSteps = document.querySelectorAll(".form-step");
const progressSteps = document.querySelectorAll(".progress-step");

// Inicialização da variável para controlar o número de passos do formulário
let formStepsNum = 0;

// Adicionando listeners de clique para os botões "próximo"
nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();      // Atualiza a exibição dos passos do formulário
    updateProgressbar();    // Atualiza a barra de progresso
  });
});

// Adicionando listeners de clique para os botões "anterior"
prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();      // Atualiza a exibição dos passos do formulário
    updateProgressbar();    // Atualiza a barra de progresso
  });
});

// Função para atualizar a exibição dos passos do formulário
function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("form-step-active") &&
      formStep.classList.remove("form-step-active");
  });

  formSteps[formStepsNum].classList.add("form-step-active");
}

// Função para atualizar a barra de progresso
function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  });

  const progressActive = document.querySelectorAll(".progress-step-active");

  // Atualiza a largura da barra de progresso com base nos passos concluídos
  progress.style.width =
    ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}
