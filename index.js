const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const scored = document.getElementById("score");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
let score = 0;

let shuffleQuestions, currentQuestionIndex;

startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
function startGame() {
  startButton.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct) {
    score++;
    // const button3 = document.createElement("button");
    // button3.innerText = score;
    // console.log(score);
    scored.innerText = "Your Score " + score;
  } else {
    scored.innerText = "Your Score " + score;
  }

  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
  nextButton.classList.remove("hide");
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}
const questions = [
  {
    question: "Grand Central Terminal, Park Avenue, New York is the world's",
    answers: [
      { text: "largest railway station", correct: true },
      { text: "highest railway station", correct: false },
      { text: "longest railway station", correct: false },
      { text: "None of the above", correct: false },
    ],
  },

  {
    question:
      "Which player scored the fastest hat-trick in the Premier League?",
    answers: [
      { text: "Robbie Fowler", correct: false },
      { text: "Alan Shearer", correct: false },
      { text: "Sadio Mane", correct: true },
      { text: "Frank Lampard", correct: false },
    ],
  },

  {
    question: "'.MOV' extension refers usually to what kind of file?",
    answers: [
      { text: "Image file", correct: false },
      { text: "Animation/movie file", correct: true },
      { text: "Audio file", correct: false },
      { text: "MS Office document", correct: false },
    ],
  },
  {
    question: "Frederick Sanger is a twice recipient of the Nobel Prize for",
    answers: [
      { text: "Chemistry in 1958 and 1980", correct: true },
      { text: "Physics in 1956 and 1972", correct: false },
      { text: "	Chemistry in 1954 and Peace in 1962", correct: false },
      { text: "Physics in 1903 and Chemistry in 1911", correct: false },
    ],
  },
  {
    question:
      "Escape velocity of a rocket fired from the earth towards the moon is a velocity to get rid of the",
    answers: [
      { text: "Moon's gravitational pull", correct: false },
      { text: "	Centripetal force due to the earth's rotation", correct: false },
      { text: "Pressure of the atmosphere", correct: false },
      { text: "Earth's gravitational pull", correct: true },
    ],
  },
];
