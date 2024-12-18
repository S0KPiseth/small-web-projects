setInterval(()=>{const timeDisplay = document.querySelector('#clcokDisplay');
    let time = new Date();
    timeDisplay.textContent =
      time.getHours().toString().padStart(2, 0) +
      ':' +
      time.getMinutes().toString().padStart(2, 0) +
      ':' +
      time.getSeconds().toString().padStart(2, 0)})