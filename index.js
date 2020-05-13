const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const scored = document.getElementById("score");

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const jag = document.getElementById("top");
var j = 0;
var i = 0;
let score = 0;

let shuffleQuestions, currentQuestionIndex;
jag.classList.remove("hide");

startButton.addEventListener("click", startGame);
// i++;
// console.log(i);

nextButton.addEventListener("click", () => {
  // i++;
  // console.log(i);
  currentQuestionIndex++;
  setNextQuestion();
  // i++;
  // console.log(i);
  // if (i == 5) mode();
});
function startGame() {
  jag.classList.add("hide");
  // i++;
  // console.log(i);
  startButton.classList.add("hide");
  shuffleQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  setNextQuestion();
}

function setNextQuestion() {
  resetState();
  // i++;
  // console.log(i);
  // if (i == 10) {
  //   mode();
  // }
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
    answerButtonsElement.classList.remove("hide");

    // if (i == 5) {
    //   mode();
    // }
    // scored.innerText = "";

    answerButtonsElement.appendChild(button);
  });
  // startButton.classList.remove("hide");
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
  console.log(correct);
  // i++;
  // console.log(i);

  // console.log(i);

  if (correct) {
    score++;
  }

  Array.from(answerButtonsElement.children).forEach((button) => {
    if (correct) {
      setStatusClass(selectedButton, correct);
      button.disabled = true;

      scored.innerText = "Score " + score;
    } else {
      setStatusClass(selectedButton, correct);
      scored.innerText = " Score " + score;
      if (button.dataset.correct) {
        setStatusClass(button, button.dataset.correct);
        // setStatusClass(button, button.dataset.correct)
      } else {
        button.disabled = true;
      }
    }
  });
  // i += 2;
  // console.log(i);
  // if (i == 16) {
  //   mode();
  // }

  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
    // i++;
    // console.log(i);
    // console.log(shuffleQuestions.length);
    // console.log(currentQuestionIndex + 1);
    // console.log(currentQuestionIndex + 2);
    // if (currentQuestionIndex + 1 == 5) {
    //   // document.getElementById("myModal").classList.remove("hide");

    // }
    // console.log(i);

    // if (i == 9) {
    //   mode();
    // }
  } else {
    // resetState();

    // questionContainerElement.classList.add("hide");
    answerButtonsElement.classList.add("hide");
    questionElement.innerHTML =
      " Congratulations &#128079; you scored " + score + "/5";

    // "Congratulations!! you scored" + score + "/5";

    scored.classList.add("hide");
    // i++;
    console.log();
    startButton.innerText = "Restart";
    // mode(startButton);
    // if (i == 9) {
    //   mode();
    // }

    startButton.classList.remove("hide");

    score = 0;
    scored.innerText = "";
  }
  // answerButtonsElement.classList.remove("hide");
  scored.classList.remove("hide");
  // startButton.addEventListener("click", startGame);
  // startButton.classList.add("hide");
  // nextButton.classList.remove("hide");
}

// startButton.classList.remove("hide");

function setStatusClass(element, correct) {
  clearStatusClass(element);

  if (correct) {
    // element.classList.contains("true").className = "correct";
    // element.addEventListener("click", (event) => {
    //   // if the clicked element has a class named check
    //   if (event.target.classList.contains("true")) {
    //     // remove or add the class checked only from this element
    element.classList.add("correct");
    // console.log(element.classList)
  }
  // });
  // }
  else {
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

function mode(ja) {
  // Get the modal
  var modal = document.getElementById("myModal");
  // modal.classList.remove("hide");

  // Get the button that opens the modal
  // var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on the button, open the modal
  ja.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
