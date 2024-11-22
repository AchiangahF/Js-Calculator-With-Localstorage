let savesBox = document.querySelector("#saves");

if(localStorage.length != 0){
    let calStorage = JSON.parse(localStorage.getItem('calStore'));

    calStorage.forEach(item => {
         // creating the sv div
         let svbox = document.createElement('div');
         svbox.className = 'sv';
 
         // creating the computed div
         let computedBox = document.createElement('div');
         computedBox.className = 'computed';
 
         // creating the options div
         let opsBox = document.createElement('div');
         opsBox.className = 'ops';
 
         // creating paragraph tag for computedBox
         let p1 = document.createElement('p');
         p1.id = 'input';
         p1.innerText = item['epx'];
 
         let p2 = document.createElement('p');
         p2.id = 'output';
         p2.innerText = item['result'];
 
         // creating paragraph tag and button for opsBox
         let p3 = document.createElement('p');
         p3.innerText = item.date;
 
         let delbtn = document.createElement('button');
         delbtn.id = calStorage.indexOf(item);
         delbtn.className = 'delbtn';
         delbtn.innerText = "DEL";
 
         // placing the paragraph tags inside the computed div
         computedBox.appendChild(p1);
         computedBox.appendChild(p2);
 
         // placing the paragraph tag and button inside ops div
         opsBox.appendChild(p3);
         opsBox.appendChild(delbtn);
 
         // placing computed and ops divs inside sv div
         svbox.appendChild(computedBox);
         svbox.appendChild(opsBox);
 
         // placing sv div inside save div in html page (history.hmtml)
         savesBox.appendChild(svbox);
    })
}

const editStorage = (param) =>{
    let oldStore = JSON.parse(localStorage.getItem('calStore'));
    oldStore.splice(param , 1);
    localStorage.removeItem('calStore');
    localStorage.setItem('calStore', JSON.stringify(oldStore));
}

let delbtns = document.querySelectorAll('.delbtn');
console.log(delbtns);

delbtns.forEach(btn =>{
    btn.addEventListener('click', (e)=>{
        editStorage(e.target.id);
        window.location.reload();
    });
});