incbtn = document.querySelector("#incbtn")
decbtn = document.querySelector("#decbtn")
resetbtn = document.querySelector("#resetbtn")
counter = document.querySelector("#counter")

let count=0
function increaseCount(){
    count++
}

function decreaseCount()
{
    if(count>0){
        count--;
    }
}


incbtn.addEventListener("click",()=>{
    increaseCount()
    counter.innerHTML=count
    console.log("incbtn");
})

decbtn.addEventListener("click",()=>{
    decreaseCount()
    counter.innerHTML=count
    console.log("decbtn");
})

resetbtn.addEventListener("click",()=>{
    count=0
    counter.innerHTML=count
})