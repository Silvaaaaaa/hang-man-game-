

const letters = "abcdefghijklmnopqrstuvwxyz";

let lettersArray  = Array.from(letters);  

let lettersContainer = document.querySelector(".letters");
let lettersword = document.querySelector(".category span");



lettersArray.forEach ( letter => {
    let spanarray = document.createElement("span");

    let letters = document.createTextNode(letter);

    spanarray.appendChild(letters);

    spanarray.className = "letter-box" ; 

    lettersContainer.appendChild(spanarray);
})
// Object Of Words + Categories
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
  }
let allkeys = Object.keys(words);   
console.log(allkeys[2]);
console.log(words[1]);
let randomprob = Math.floor(Math.random()* allkeys.length );// rand * lenght to number 

let randomname = allkeys[randomprob];
let randomvalue = words[randomname];
let randomvaluenum =  Math.floor(Math.random()* randomvalue.length )
let wordfromran = randomvalue[randomvaluenum]
lettersword.innerHTML = randomname ;

let lettersguess = document.querySelector(".letters-guess");

let arrayvaluename = Array.from(wordfromran); // random words it want word ; 

arrayvaluename.forEach(letter => {
    let span = document.createElement("span");
   if (letter == " "){
       span.className = "with-space"  
   }
    lettersguess.appendChild(span);
})
let quesspans = document.querySelectorAll(".letters-guess span");
 
let wronnattemp =  0 ; 

let thedraw = document.querySelector(".hangman-draw");

document.addEventListener("click", (e)=>{   
    let statuss = false ; 
    if (e.target.className == "letter-box" ){
      e.target.classList.add("clicked");    

      let theclickedletter = e.target.innerHTML.toLowerCase();

      arrayvaluename.forEach((woedletter, windex )=> {

          if(theclickedletter == woedletter){  // otherwise status = false ; 

            statuss = true ;
               quesspans.forEach((spann , sindex )=>{
                    if(windex == sindex){
                        spann.innerHTML = woedletter;
                  }
               });
          }
        })
    // out of the loop 
    if (statuss == false  ){
       wronnattemp++ ; 
       thedraw.classList.add(`wrong-${wronnattemp}`);  
       
       if (wronnattemp === 8 ){
           endGame();
            lettersContainer.classList.add("finished")  
       }
    }
    }
})
function endGame(){
    let div = document.createElement("div")
    let textspan = document.createTextNode(`gameover , the word is ${wordfromran}`);
    div.appendChild(textspan);  
    div.className = "popup"; 
    document.body.appendChild(div); 
}
