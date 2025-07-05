const quizData = [
  {
    question: "What is the capital of India?",
    options: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    correct: "Delhi"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correct: "Mars"
  },
  {
    question: "Which language runs in the browser?",
    options: ["Python", "C++", "Java", "JavaScript"],
    correct: "JavaScript"
  }
];

let currentQuestion = 0;
let score = 0;  

const questionE1 = document.getElementById("question"); 
const optionButtons = document.querySelectorAll(".option");
const startBtn = document.getElementById("start");
const nextBtn = document.getElementById("next");
const restart =document.getElementById("restart");
const scorebox = document.getElementById("scorebox"); 

function loadQuestion(){
      const q = quizData[currentQuestion];
      questionE1.innerText = q.question; 

      optionButtons.forEach((btn , index) =>{
        btn.innerText = q.options[index];
        btn.disabled = false;
        btn.classList.remove ("correct","incorrect");
      });
}

startBtn.addEventListener("click", () => {
    loadQuestion(); 
});

optionButtons.forEach(button => {
  button.addEventListener("click", () =>{
    const selected = button.innerText;
    const correct = quizData[currentQuestion].correct;


    if(selected === correct){
      button.classList.add("correct");
      score++;
    }else{
      button.classList.add("incorrect");
    }

    optionButtons.forEach(btn => {
      if (btn.innerText === correct){
         btn.classList.add("correct");
      }
    });
  });
});

  nextBtn.addEventListener("click" , () =>{
    currentQuestion++;

    if(currentQuestion < quizData.length){
      loadQuestion();
    }else{
      questionE1.innerText = `quiz is completed Your Score: ${score}/${quizData.length}`
    }
  });

  restart.addEventListener("click", () => {
     currentQuestion = 0;
     score = 0;
     loadQuestion();
  });





