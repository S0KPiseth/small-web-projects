document.addEventListener("DOMContentLoaded", ()=>{
    const buttonDiv = document.querySelector("#buttonDiv");

    const result = document.querySelector("#result");
    let buttonLabel = {
        row1: {
            first: "+",
            second: "7",
            third: "8",
            last: "9"
        },
        row2: {
            first: "-",
            second: "4",
            third: "5",
            last: "6"
        },
        row3: {
            first: "*",
            second: "1",
            third: "2",
            last: "3"
        },
        row4: {
            first: "/",
            second: "0",
            third: ".",
            last: "="
        },
        row5: {
            first: "C",
            second: "(",
            third: ")",
            last: "%"
        }
    };
    
    for(let i in buttonLabel){
        let htmlval = buttonDiv.innerHTML;
        if(i=="row4"){
            htmlval+=`<div id="buttonRow">
            <button class="button firstBtn">${buttonLabel[i].first}</button>
            <button class="button">${buttonLabel[i].second}</button>
            <button class="button">${buttonLabel[i].third}</button>
            <button class="button equal">${buttonLabel[i].last}</button>
            </div>`
            buttonDiv.innerHTML=htmlval;
        }
        else if(i=="row5"){
            htmlval+=`<div id="buttonRow">
            <button class="button firstBtn delete">${buttonLabel[i].first}</button>
            <button class="button">${buttonLabel[i].second}</button>
            <button class="button">${buttonLabel[i].third}</button>
            <button class="button">${buttonLabel[i].last}</button>
            </div>`
            buttonDiv.innerHTML=htmlval;
        }
        else{
            htmlval+=`<div id="buttonRow">
            <button class="button firstBtn">${buttonLabel[i].first}</button>
            <button class="button">${buttonLabel[i].second}</button>
            <button class="button">${buttonLabel[i].third}</button>
            <button class="button">${buttonLabel[i].last}</button>
            </div>`
            buttonDiv.innerHTML=htmlval;
        };

    }
    let buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener('click',buttonFunc);
      });
    const deleteBtn= document.querySelector(".delete");
    const equalBtn= document.querySelector(".equal");
    equalBtn.removeEventListener("click", buttonFunc)
    equalBtn.addEventListener('click', ()=>{
        let resultValue= result.textContent;
        result.textContent= eval(resultValue);

    })
    function buttonFunc(event){
        let resultValue = result.textContent;
        if((resultValue.length==1 && resultValue==0 )||resultValue=="Infinity" ){
            resultValue="";
        };
        resultValue+=event.target.textContent;
        result.textContent= resultValue;
    };
    deleteBtn.addEventListener("click", ()=>{
        result.textContent=0;
    })
    
})