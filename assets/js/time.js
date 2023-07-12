let mmr = document.getElementById("mmrTime")

setInterval(() => {
    let d = new Date();
    mmr.innerHTML = d.toLocaleTimeString("en-US",{timeZone:'Asia/Yangon',timeStyle:'medium'});
},1000)


