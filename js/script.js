(()=>{
  const setDate = () => {
      let now = new Date().toLocaleString();
      let sec = document.getElementById('second'),
          mins = document.getElementById("minute"),
          hrs = document.getElementById("hour");


      now = new Date(now);
      const seconds = now.getSeconds();
      const minutes = now.getMinutes();
      const hours = now.getHours();
      const secondsDegrees = (seconds / 60) * 360;
      const minutesDegrees = (minutes / 60) * 360;
      const hoursDegrees = (hours / 12 ) * 360;
      sec.style.transform = `rotate(${secondsDegrees}deg)`;
      mins.style.transform = `rotate(${minutesDegrees}deg)`;
      hrs.style.transform = `rotate(${hoursDegrees}deg)`;
    };
setInterval(setDate, 1000);
})();