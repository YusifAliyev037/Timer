//DOM
const Timer = document.querySelector("#Timer");
const Start = document.querySelector("#Start");
const Stop = document.querySelector("#Stop");
const Reset= document.querySelector("#Reset");
const Lap = document.querySelector("#Lap");
const laps = document.querySelector("#laps")


let arr = [];
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let lapEnabled;
let intervalIndex


function timer(){
    milliseconds++;
    if(milliseconds == 100){
        seconds++;
        milliseconds = 0;
        if(seconds == 60){
            minutes++;
            seconds = 0;
            if(minutes == 60){
                hours++
                minutes = 0;
            }
        }
    }
    Timer.innerHTML = show()
};

function show(){
    return `${hours<10? "0"+hours:hours}:${minutes<10?"0"+minutes:minutes}:${seconds<10?"0"+seconds:seconds}:${milliseconds<10?"0"+milliseconds:milliseconds}`
}


Start.addEventListener("click",()=>{
    lapEnabled = true;
    clearInterval(intervalIndex);
    intervalIndex = setInterval(timer,10) 

});
Stop.addEventListener("click", ()=>{
    lapEnabled = false;
    clearInterval(intervalIndex)
});
Reset.addEventListener("click", ()=>{
    lapEnabled = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    Timer.innerHTML = show()
});
Lap.addEventListener("click", ()=>{
    if(lapEnabled){
        arr.push(show())
        let data = arr.map(item =>{
           return `<li style="list-style-type: none;">${item}</li>`
        })
        console.log(data);
        laps.innerHTML = data.join("")
    }
})
// console.log(timer());




