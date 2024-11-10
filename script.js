/* Step 1 : Define Quiz data */
const quizData = [
    // create 2d array
    {
    question : "what does HTML stand for?",
    options:[
        "Hypertext Markup Language",
        "Hyper Transfer Markup Language",
        "Hypertext Machine Language",
        "Hyperlink and Text markup Language",
      ],
      correct : 0,
    },

    {
        question : "Which CSS property is used to control the spacing between elements?",

        options:[
           "margin" , "padding" , "spacing" , "border-spacing"
          ],
          correct : 1,
        },

        {
            question : "What is the Javascript function used to select an HTML element by it's id?",
    
            options:[
                "document.query",
                 "getElementById",
                 "selectElement",
                 "findElementById",
              ],
              correct : 1,
            },

{
question : "In React.js, which hook is used to perform side effects in a function components?",
options:[
 "useEffect" , "useState" , "useContext" , "useReducer",
 ],
correct : 0,
 },

 {
    question : "In javascript which one is block scope datatype?",
    options:[
     "let" , "const" , "var" , "none of the above",
     ],
    correct : 0,
     },

     {
        question : "What  will be the output? function sayHi(){console.log(name);console.log(age);var name = 'Lydia'; let age = 21;}",

        options:[
         "Lydia and undefined" , "Lydia and ReferenceError" , "ReferrenceError and 21" , "undefined and ReferenceError",
         ],
        correct : 3,
         },

];
// step 2 : javascript initialiazation
const quiz = document.querySelector(".quiz");
const scores = document.querySelector(".score");
const answerElm = document.querySelectorAll('.answer');
const [questionElm, option_1 , option_2,option_3, option_4] = 
document.querySelectorAll( 
    "#question ,.option_1 , .option_2 , .option_3 , .option_4"
);
const submitBtn = document.querySelector("#submit");


let currentQuiz = 0;
let score = 0;

// Step 3 : load quiz function--->
const loadQuiz = ()=>{
    const { question , options} = quizData[currentQuiz];
    console.log(options);

    questionElm.innerHTML = `${currentQuiz + 1} : ${question}`; // add the  question part
    scores.innerHTML = `Score : ${score}/${quizData.length}`;
    options.forEach(
        (curOption , index) => (window[`option_${index + 1}`].innerHTML = curOption)
    );
};

loadQuiz();

// step 4 : get selected answer function on button click

const getSelectedOption = ()=>{
    // let ans_index;
    // answerElm.forEach((curOption , index)=>{
    //     if(curOption.checked){
    //         ans_index = index;
    //     }
    // });
    // return ans_index;
    let answerElement = Array.from(answerElm);
    return answerElement.findIndex((curElem) =>curElem.checked);
};

// Deselected function
const deselectedAnswers = () =>{
    return answerElm.forEach((curElem) => (curElem.checked = false));
};

submitBtn.addEventListener('click' , ()=>{
    const selectedOptionIndex = getSelectedOption();
    console.log(selectedOptionIndex);
    // quizdata is equal to the user index id both same then score update
    if(selectedOptionIndex===quizData[currentQuiz].correct){
        score = score+1;
    }

    currentQuiz++; // upgrade the currentQuiz and show the next question
    if(currentQuiz < quizData.length){ // show next question
        deselectedAnswers(); // previous pick option deselect
        loadQuiz();
    } 
    else{
        quiz.innerHTML = `
        <div  class = "result">
        <h2> Your Score : ${score}/${quizData.length} Correct Answers </h2>
        <p> Congratulations on completing the quiz! </p>
        <button class = "reload-button" onclick="location.reload()">Play Again</button>
        </div>
        `;
    }
});