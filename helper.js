function somethingChanged(vancObj){
    for(i = 0; i<vancObj.length; i++){
        indexId = String("doseindex"+i);
    console.log(indexId);
    newChange = document.getElementById(indexId).textContent;
    console.log(newChange);
    vancObj[i].dose = newChange;
    }

    console.log("input event fired");
}

function makeDose(vanc, dosageGiven, day, hour) {

    i = findIndex(vanc, day, hour);
    vanc[i].dose = dosageGiven;
    //console.log(vanc[i].dose);
  
  }
  
  function makeLevel(vanc, levelGiven, day, hour) {
  
    i = findIndex(vanc, day, hour);
    vanc[i].level = levelGiven;
    vanc[i].changedLevel = 1;
    //console.log(vanc[i].dose);
  
  }

  function findIndex(vanc, day, hour) {
    for (let i = 0; i < vanc.length; i++) {
      if (vanc[i].day == day && vanc[i].hour == hour) {
        return vanc[i].key;
      }
    }
  }
  