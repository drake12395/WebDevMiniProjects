const quizData = [
  {
    question: 'Which of the following is false about arrays on Java',
    a: 'A java array is always an object',
    b: 'Length of array can be changed after creation of array',
    c: 'Arrays in Java are always allocated on heap',
    correct: 'b',
  },
  {
    question:
      'Which of the following statements is/are TRUE regarding JAVA ? (a) Constants that cannot be changed are declared using the ‘static’ keyword. (b) A class can only inherit one class but can implement multiple interfaces.',
    a: 'Only (a) is TRUE.',
    b: 'Only (b) is TRUE.',
    c: 'Both (a) and (b) are TRUE.',
    d: 'Neither (a) nor (b) are TRUE.',
    correct: 'b',
  },
  {
    question: 'Which of the following is not an operator in Java?',
    a: 'instanceof',
    b: 'new',
    c: 'sizeof',
    d: '>>>=',
    correct: 'c',
  },
  {
    question:
      'In Java, when we implement an interface method, it must be declared as:',
    a: 'private',
    b: 'protected',
    c: 'public',
    d: 'friend',
    correct: 'c',
  },
  {
    question:
      'Java uses threads to enable the entire environment to be ______.',
    a: 'symmetric',
    b: 'asymmetric',
    c: 'synchronous',
    d: 'asynchronous',
    correct: 'd',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}

function getSelected() {
  let answer;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
      <button onClick="location.reload()">Restart</button>`;
    }
  }
});
