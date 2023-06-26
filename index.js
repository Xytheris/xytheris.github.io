function makeArray(days, K) {
  var vanc = [];
  //var days = 5;
  var index = 0;
  var dayconstructor = 1;

  //loop to create array of days and hours
  for (var h = 0; h < days; h++) {
    for (var i = 0; i < 24; i++) {
      vanc[index] = {
        day: dayconstructor,
        hour: i,
        dose: 0,
        level: 0,
        changedLevel: 0,
        K: K,
        key: index
      }
      //console.log(vanc[index]);
      //        console.log("index is " + index);
      index++;
    }
    dayconstructor++;
  }
  return vanc;
}

function makeTable(vanc, choice) {

  //console.log(choice);

  const newTable = document.createElement("table");
  newTable.innerHTML = "<caption>" + choice + "</caption>";


  //newTable.appendChild(document.createElement("tr"));
  //newTable.innerHTML += "<thead>"
  //const newHead = document.createElement("td");

  for (var i = 0; i < 24; i++) {
    const newColm = document.createElement("th");
    const thHead = document.createElement("td");
    thHead.textContent = i;
    //console.log(String(i));
    newColm.appendChild(thHead);
    //console.log(thHead.textContext);
    newTable.appendChild(newColm);
  }

  //newTable.innerHTML += "</thead>"
  newTable.appendChild(document.createElement("tr"));

  //"<thead><th>Hour</th><th>Day</th></thead>";
  for (var counter in vanc) {




    switch (choice) {
      case 'day':
        const tdDay = document.createElement("td");
        tdDay.textContent = vanc[counter].day;
        tdHold = tdDay;

        break;
      case 'hour':
        const tdHour = document.createElement("td");
        tdHour.textContent = vanc[counter].hour;
        tdHold = tdHour;


        break;
      case 'dose':
        const tdDose = document.createElement("td");
        if (vanc[counter].dose == 0) {
          tdDose.textContent = null;
          tdHold = tdDose;
        } else {
          tdDose.textContent = vanc[counter].dose;
          tdHold = tdDose;
        }
        break;

      case 'level':
        const tdLevel = document.createElement("td");
        if (vanc[counter].level == 0) {
          tdLevel.textContent = null;
          tdHold = tdLevel;

        } else {
          tdLevel.textContent = vanc[counter].level;
          tdHold = tdLevel;
        }
        break;

      case 'changedLevel':
        const tdchangedLevel = document.createElement("td");
        if (vanc[counter].changedLevel == 0) {
          tdchangedLevel.textContent = null;
          tdHold = tdchangedLevel;

        } else {
          tdchangedLevel.textContent = vanc[counter].changedLevel;
          tdHold = tdchangedLevel;
        }
        break;

      case 'K':
        const tdK = document.createElement("td");
        if (vanc[counter].K == 0) {
          tdK.textContent = null;
          tdHold = tdK;

        } else {
          tdK.textContent = vanc[counter].K;
          tdHold = tdK;
        }

        break;
    }
    tdHold.id = choice + "index" + counter;
    newTable.appendChild(tdHold);


    //check next day is within array parameters
    var nextDay = 0;
    if (Number(counter) + 1 < vanc.length) {
      nextDay = vanc[Number(counter) + 1].day;
    }

    //make new row if next day is different than current day
    if (vanc[Number(counter)].day < nextDay) {
      console.log("new row created");
      newTable.appendChild(document.createElement("tr"));
      /*
      const dayHeader = document.createElement("th");
      dayHeader.textContent = vanc[Number(counter)].day;
      newTable.appendChild(dayHeader);
      for column header but work on it later
      */
    }
  }

  const target = document.getElementById('target');
  target.appendChild(newTable);
  newTable.setAttribute('contenteditable', true);


  //notes https://stackoverflow.com/questions/50876234/save-changes-made-by-content-editable-on-any-website 
  //localstorage or database

}



function findIndex(vanc, day, hour) {
  for (let i = 0; i < vanc.length; i++) {
    if (vanc[i].day == day && vanc[i].hour == hour) {
      return vanc[i].key;
    }
  }
}



function makeDose(vanc, dosageGiven, day, hour) {

  i = findIndex(vanc, day, hour);
  vanc[i].dose = dosageGiven;
  //console.log(vanc[i].dose);

}

function makeLevel(vanc, levelGiven, day, hour) {

  i = findIndex(vanc, day, hour);
  vanc[i].level = levelGiven;
  //console.log(vanc[i].dose);

}

function makeTableDosedLevels(vancObjArray) {

  for (var counter in vancObjArray) {

    //console.log (vancObjArray[Number(counter) - 1]);

    if (vancObjArray[Number(counter) - 1] == undefined) {
      //prevVanc = vancObjArray[Number(counter) - 1];
      prevVanc = {
        day: 0,
        hour: 0,
        dose: 0,
        level: 0,
        changedLevel: 0,
        K: vancObjArray[counter].K,
        key: 0
      }
      console.log("Previous day was undefined")
    } else {
      prevVanc = vancObjArray[Number(counter) - 1];
    }

    //console.log(prevVanc);
    currentLevel = vancObjArray[counter].level;
    newDosedLevel = dosedLevel(vancObjArray[counter], 42);
    console.log("current level is " +currentLevel + "new DosedLevel is "+ newDosedLevel);

    newLevel = currentLevel + newDosedLevel;

    //console.log(prevVanc.level);
    /*
    if(prevVanc.level > currentLevel){
      newLevel = decayedLevel(prevVanc,1,prevVanc.K);
    }else{
      newLevel = currentLevel;
    }*/

    vancObjArray[counter].level = Math.round(newLevel*10)/10;

  }

}

function makeTableLevels(vancObjArray) {

  for (var counter in vancObjArray) {

    //console.log (vancObjArray[Number(counter) - 1]);

    if (vancObjArray[Number(counter) - 1] == undefined) {
      //prevVanc = vancObjArray[Number(counter) - 1];
      prevVanc = {
        day: 0,
        hour: 0,
        dose: 0,
        level: 0,
        changedLevel: 0,
        K: vancObjArray[counter].K,
        key: 0
      }
      //console.log("Previous day was undefined levels")
    } else {
      prevVanc = vancObjArray[Number(counter) - 1];
    }

    console.log(prevVanc);
    currentLevel = vancObjArray[counter].level;

    if (prevVanc.level > currentLevel) {
      newLevel = decayedLevel(prevVanc, 1, prevVanc.K);
    } else {
      newLevel = currentLevel;
    }

    vancObjArray[counter].level = Math.round(newLevel*10)/10;

  }

}

function buildEverything() {
  //days = 3;

  var days = document.getElementById("DaysToRender").value;
  var K = document.getElementById("inputK").value;


  document.getElementById("target").innerHTML = "";

  array = makeArray(days, K);
  makeLevel(array, 20, 1, 21);
  makeDose(array, 1500, 1, 22);

  //makeLevel(array,30,2,1);
  makeTableLevels(array);
  makeTableDosedLevels(array);




  //console.log("finished");



  makeTable(array, 'dose');
  makeTable(array, 'level');
  makeTable(array, 'changedLevel');
  /*
      document.getElementById("target").addEventListener("input",  function(){ //make this on button refresh
        somethingChanged();
        remakeTables();
      }, false);*/

  //makeTable(array,'hour');
  //makeTable(array,'day');
}

function remakeTables() {
  document.getElementById("target").innerHTML = "";
  makeTableLevels(array);
  makeTableDosedLevels(array);



  makeTable(array, 'dose');
  makeTable(array, 'level');

}
  //buildEverything();
