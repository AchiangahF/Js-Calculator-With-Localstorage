

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


//----------------------------------------------------------------------------------------------------------
// ---------------------------------- LOCAL STORAGE CONTROL MECHANISM --------------------------------------
//----------------------------------------------------------------------------------------------------------

const saveData = () =>{
    let count = localStorage.length;
    let dt = new Date();

    let data = {
        date:`${dt.getDate()}-${dt.getMonth()}-${dt.getFullYear()}`,
        epx: inScreen.innerText,
        result:outScreen.innerText,
    };

    localStorage.setItem(`${count}`, JSON.stringify(data));
}

// Getting the storage control buttons from dom

const controlBtns = document.querySelectorAll(".controlBtn");
controlBtns.forEach(controlBtn => {
    controlBtn.addEventListener("click", (e)=>{
        if(e.target.alt == 'save' && inScreen.innerText != ""){
            console.log('true');
            saveData();                 // Saving is taking place
            console.log(JSON.parse(localStorage.getItem(0)));
        }
    });
});

