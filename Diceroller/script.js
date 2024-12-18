document.addEventListener("DOMContentLoaded", ()=>{
    let date = new Date();
    console.log(date);
    const rollbtn = document.querySelector("#roll");
    const resultDisplay = document.querySelector("#result");
    let imageDisplay = document.querySelector("#imageDisplay");
    
    rollbtn.addEventListener("click", ()=>{
        let timesofRoll = Number(resultDisplay.value);
        for(let i = 0; i<timesofRoll; i++){
            let x= Math.floor(Math.random()*6)+1;
            x=convertNumtoString(x);
            let htmlValue = imageDisplay.innerHTML;
            htmlValue += `<img class = "dicImg" width = 50px src="https://game-icons.net/icons/ffffff/000000/1x1/delapouite/dice-six-faces-${x}.svg">`;
            imageDisplay.innerHTML=htmlValue;

        };

        
    });

})
function convertNumtoString(value){
    switch(value) {
        case 1: 
            return "one";
        case 2: 
            return "two";
        case 3: 
            return "three";
        case 4: 
            return "four";
        case 5: 
            return "five";
        case 6: 
            return "six";
    }
    
}