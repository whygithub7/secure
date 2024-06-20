let marvel="marvel";

console.log("alpha 5");


  function toggleList(listId, buttonId) {
    var list = document.getElementById(listId);
    var button = document.getElementById(buttonId);

    if (list.classList.contains('closed')) {
      list.classList.remove('closed');
      list.classList.add('open');
      button.classList.remove('arrow-right');
      button.classList.add('arrow-down');
    } else {
      list.classList.remove('open');
      list.classList.add('closed');
      button.classList.remove('arrow-down');
      button.classList.add('arrow-right');
    }
  }




    let time = 3620;
    let intr;

    function start_timer() {
      intr = setInterval(tick, 1000);
    };

    function tick() {
      time = time - 1;
      let hours = Math.floor(time / (60 * 60));
      let mins = Math.floor(time / 60 - hours * 60);
      let secs = time - hours * 60 * 60 - mins * 60;
      if (hours == 0 && mins == 0 && secs == 0) {
        clearInterval(intr);
      }
      hours = hours >= 10 ? hours : "0" + hours;
      mins = mins >= 10 ? mins : "0" + mins;
      secs = secs >= 10 ? secs : "0" + secs;
      document.getElementById("hr").innerHTML = hours;
      document.getElementById("min").innerHTML = mins;
      document.getElementById("sec").innerHTML = secs;
    }

    start_timer();
