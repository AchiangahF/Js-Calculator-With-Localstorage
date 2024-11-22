

// Getting elements from dom

const buttons = document.querySelectorAll(".btn");
const inScreen = document.querySelector("#inputvalue");
const outScreen = document.querySelector("#outputvalue");

// function to clear screens

let ClearScreen = () =>{
    inScreen.innerText = "";
    outScreen.innerText = "";
}

// function to delete element

let delElement = () =>{
    if(inScreen.innerText != ''){
        let expression = inScreen.textContent;
        inScreen.innerText = expression.slice(0, expression.length-1);
    }
}

// evaluation and output function

let Evalaute = (str) =>{
    try{
        if(str.includes('+') || str.includes('-') || str.includes('÷') || str.includes('×')){

            let SW_div = str.replaceAll('÷', '/');
            let SW_mult = SW_div.replaceAll('×', '*');
            let result = eval(SW_mult);
            outScreen.innerText = result;

        }
    }
    catch(e){
        console.log(`Error: ${e}`);
        outScreen.innerText = "";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", (e)=>{
        if(e.target.innerText == 'D'){
            // CALL THE DEL FUNCTION
            delElement();
            Evalaute(inScreen.innerText);
        }
        else{
            // Print To Screen
            inScreen.append(e.target.innerText);
            Evalaute(inScreen.innerText);
        }
    })
});


//----------------------------------------------------------------------------------------------------------
// ---------------------------------- LOCAL STORAGE CONTROL MECHANISM --------------------------------------
//----------------------------------------------------------------------------------------------------------

let calculatorStorage = [];             // This array initailizes the storage process

const saveData = () =>{
    
    let dt = new Date();

    // initializing the data

    let data = {
        date:`${dt.getDate()}-${dt.getMonth()}-${dt.getFullYear()}`,
        epx: inScreen.innerText,
        result:outScreen.innerText,
    };

    // save for and empty history
    if(localStorage.length == 0){
        calculatorStorage.push(data);
        localStorage.setItem(`calStore`, JSON.stringify(calculatorStorage));
    }
    // save for history that is not empty
    else{
        let oldStorage = JSON.parse(localStorage.getItem('calStore'));
        let newStorage = [data, ...oldStorage];
        localStorage.removeItem('calStore');
        localStorage.setItem('calStore', JSON.stringify(newStorage));
    }
}

// Getting the storage control buttons from dom
// and passing the saveData() as callback if save-button is click. 

const controlBtns = document.querySelectorAll(".controlBtn");
controlBtns.forEach(controlBtn => {
    controlBtn.addEventListener("click", (e)=>{
        if(e.target.alt == 'save' && outScreen.innerText != ""){
            console.log('true');
            saveData();                 // Saving is taking place
            console.log(JSON.parse(localStorage.getItem('calStore')));
        }
        else if(e.target.alt == 'reset'){
            // clears the screen

            ClearScreen();
        }
    });
});