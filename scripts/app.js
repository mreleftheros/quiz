const quizForm = document.getElementById("quizForm");
const startBtn = document.getElementById("startBtn");
const quiz = {
  q1: "c",
  q2: "d",
  q3: "c",
  q4: "a",
  q5: "d"
};

const init = () => {
  const welcomeScreen = document.querySelector(".main__welcome");

  welcomeScreen.style.display = "none";

  quizForm.classList.add("normal");
};

const showScore = score => {
  let counter = 0;
  const result = document.getElementById("quizResult");

  let timer = setInterval(() => {
    if(counter <= score) {
      result.textContent = `Συγχαρητήρια! Είσαι ${counter}% σωστός!`;
      counter++;
    } else clearInterval(timer)
  }, 100);
}

const submitForm = e => {
  e.preventDefault();
  let score = 0;  

  for (let key in quiz) {

    // if(quizForm[key].value === "") return;

    if (quizForm[key].value === quiz[key]) {
      score += 20;
    } else {
      let str = key[1] - 1;
      quizForm.children[str].style.border = "solid red";
    }
  }
  
  scrollTo(0, 0);

  setTimeout(() => {
    showScore(score);
  }, 1000);

  quizForm.reset();
}

startBtn.addEventListener("click", init);
quizForm.addEventListener("submit", submitForm);