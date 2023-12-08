const questions = document.getElementsByClassName("question");
const answers = document.getElementsByClassName("answer");
const arrow = document.getElementsByClassName("arrow-down");
/* დაბლითა ორი ბექ ქოლორისაა :)*/
const mode = document.getElementById("faq");
const background = document.getElementById("back");

let rotatedeg = 0;
let before;

for (let i = 0; i < questions.length; i++){
    questions[i].addEventListener("click", (e) => {
        if (parseInt(answers[i].style.height)
        != answers[i].scrollHeight){
        answers[i].style.height = answers[i].scrollHeight + "px";
    } else {
            answers[i].style.height = "0px";
    }
    for (let j = 0; j < answers.length; j++){
        if (j != i){
            answers[j].style.height = "0px";
            }
        }
        before = e.target.nextElementSibling;

        if (arrow[i].classList != ("arrow-down arrowrotate")){
            document.querySelector(".arrowrotate")?.classList.remove("arrowrotate")
            arrow[i].classList.add("arrowrotate")
        } else {
            arrow[i].classList.remove("arrowrotate")
        }
    });
}

/*ბექ ქოლორი*/
let color1 = "linear-gradient(180deg, #B068E9 0%, #6463E7 100%)";
let color2 = "linear-gradient(181deg, purple 10%, black)";
mode.addEventListener("click", (e) => {
   if (background.style.background != color2){
    background.style.background = color2;
   } else {
    background.style.background = color1;
   }
});
