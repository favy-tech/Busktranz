





let increaseOne = document.querySelector(".increase1");
let increaseTwo = document.querySelector(".increase2");

let count1 = 0;


let increaseOneInterval = setInterval(() => {
    if (count1 < 25) {
        count1 +=1;
        increaseOne.innerHTML = count1
    }else{
       clearInterval(increaseOneInterval)
    }
    
}, 100);

let count2 = 0;


let increaseTwoInterval = setInterval(() => {
    if (count2 < 95) {
        count2 +=1;
        increaseTwo.innerHTML = count2
    }else{
       clearInterval(increaseTwoInterval)
    }
    
}, 28);