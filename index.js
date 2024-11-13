// Getting elements from dom

const buttons = document.querySelectorAll(".btn");
const inScreen = document.querySelector("#inputvalue");
const outScreen = document.querySelector("#outputvalue");

// function to clear screens

let ClearScreen = () =>{
    inScreen.innerText = "";
    outScreen.innerText = "";
}

// evaluation and output function

let Evalaute = (str) =>{
    try{
        if(str.includes('+') || str.includes('-') || str.includes('÷') || str.includes('×')){
            let result = eval(str);
            outScreen.innerText = result;
        }
    }
    catch(e){
        console.log(`Error: ${e}`);
    }
}

buttons.forEach(button => {
    button.addEventListener("click", (e)=>{
        if(e.target.innerText == 'C'){
            // CALL THE DEL FUNCTION
            ClearScreen();
        }
        else{
            // Print To Screen
            inScreen.append(e.target.innerText);
            Evalaute(inScreen.innerText);
        }
    })
});