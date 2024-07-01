const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
//declaring the variable as an empty string
let candidateName = "";


// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let questions = [
  "Who was the first American woman in space? ", 
  "True or false: 5 kilometer == 5000 meters? ", 
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ", 
  "What is the minimum crew size for the ISS? " 
]; 

let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3"
];

let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("What is your name? ");
  return candidateName;
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
//candidateAnswer = input.question(question);
//return candidateAnswer;
    for (let i = 0; i < questions.length; i++) {
      candidateAnswers[i] = input.question(questions[i]);
    }
  }
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
//if (candidateAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
//  console.log("Correct!");
//} else {
//  console.log("Sorry, you answered that question incorrectly. The correct answer is: " + correctAnswer);
//}
//accumulator 
  let correctCount = 0;
  let output = "";

  for (let i = 0; i < questions.length; i++) { 
    let isCorrect = candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase();
    correctCount += isCorrect ? 1 : 0;

    output += `
Question ${i + 1}: ${questions[i]}
Your Answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}
${isCorrect ? "Correct" : "Incorrect"}

`;
  }
  
  //TODO 3.2 use this variable to calculate the candidates score.

  let grade = (correctCount / questions.length) * 100;

  console.log(output);
  console.log(`Overall Grade: ${grade}% (${correctCount} of ${questions.length}) responses correct)`);
  console.log(grade >= 80 ? "Status: Passed" : "Status: Failed"); 

  return grade;
  }

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Candidate Name: " + candidateName);
  askQuestion();
  gradeQuiz(candidateAnswers);
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}; 