const main = document.querySelector("main");
const counter = document.createElement("p");
counter.setAttribute("id", "counter")
main.append(counter);

function updateCounter(){


    const now = new Date();
    const departure= new Date(2023, 8, 11, 15, 1, 0); // (year, month-1, day, hour, minute, second)
    // console.log(now);
    // console.log(now.toDateString());
    // console.log(departure.toDateString());
    
    const distance = now - departure;
    if (distance > 0) {

        const year = Math.floor(distance / (1000*60*60*24*365));
        const days = Math.floor(distance % (1000*60*60*24*365)/(1000*60*60*24));
        const hours = Math.floor(distance % (1000 *60*60*24)/(1000*60*60))
        const minutes = Math.floor(distance % (1000 *60*60)/(1000*60))
        const seconds = Math.floor(distance % (1000*60)/1000);
        // const milisec = Math.floor(distance % 1000)
        counter.innerText=`I have been gone for ${year} years, ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds`;
    } else{
        counter.innerText=`I haven't left yet!!`

    }
   
};

setInterval(updateCounter, 1000);