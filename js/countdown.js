let d = document;
export default function countdown(id,limitDate, finalMessage){
    const $countdown = d.getElementById(id),
    countDownDate = new Date(limitDate).getTime();

    let countDownTempo = setInterval(() => {
        let now = new Date().getTime(),
         limitTime =countDownDate - now,
         days = Math.floor(limitTime/(1000 * 60 * 60 * 24)),
         hours =("0"+ Math.floor((limitTime % (1000 * 60 * 60 * 24))/(1000 * 60 * 60))).slice(-2),
         minutes = ("0"+ Math.floor((limitTime % (1000 * 60 * 60))/(1000 * 60))).slice(-2),
         seconds =("0"+ Math.floor((limitTime % (1000 * 60))/(1000))).slice(-2);

         $countdown.innerHTML=`<h3>${days} days ${hours} hours ${minutes} minutes ${seconds} seconds until my birthday</h3>`
        //console.log(countDownDate,now, limitTime);

        if (limitTime < 0) {
            clearInterval(countDownTempo);
            $countdown.innerHTML=`<h3>${finalMessage}</h3>`
        }
    }, 1000);
}