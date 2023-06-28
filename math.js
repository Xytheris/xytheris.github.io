testobj= {
    day: 15,
    hour: 5,
    dose: 1000,
    level: 20,
    key: 1
  }

function decayedLevel(vancObj,time,k){

    currentLevel = vancObj.level;
    decayLevel = currentLevel*(Math.pow(Math.E,-k*time));
    console.log("Level changed from " + currentLevel + " to" + decayLevel);
    return Math.round(decayLevel*10)/10;
}

function dosedLevel(vancObj, Vd){
    deltaLevel = vancObj.dose/Vd;
    level =  deltaLevel;
    return deltaLevel;
}