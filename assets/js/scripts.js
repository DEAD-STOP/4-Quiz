let time = 80;
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");

function startQuiz() {
    var startScreenEl = document.getElementById("start-screen");
    startScreenEl.setAttribute("class", "hide");
    questionsEl.removeAttribute("class");
    timerId = setInterval(clockTick, 1000);
    timerEl.textContent = time;
  
    getQuestion();
  }

  function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.title;
    choicesEl.innerHTML = "";
    currentQuestion.choices.forEach(function(choice, i) {
      var choicen = document.createElement("button");
      choicen.setAttribute("class", "choice");
      choicen.setAttribute("value", choice);
  
      choicen.textContent = i + 1 + ". " + choice;
      choicen.onclick = quesClick;
      choicesEl.appendChild(choicen);
    });
  }
  function quesClick() {
    if (this.value !== questions[currentQuestionIndex].answer) {
      time -= 15;
  
      if (time < 0) {
        time = 0;
      }
      timerEl.textContent = time;
  
      feedbackEl.textContent = "Wrong!";
    } else {
  
      feedbackEl.textContent = "Correct!";
    }
    feedbackEl.setAttribute("class", "feedback");
    setTimeout(function() {
      feedbackEl.setAttribute("class", "feedback hide");
    }, 1000);
    currentQuestionIndex++;
    if (currentQuestionIndex === questions.length) {
      quizEnd();
    } else {
      getQuestion();
    }
  }

  startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;
  startBtn.onclick = startQuiz;
