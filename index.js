function makeArray(days) {
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
          key: index
        }
        //console.log(vanc[index]);
        //console.log("index is " + index);
        index++;
      }
      dayconstructor++;
    }
    return vanc;
  }
  
  function makeTable(vanc, choice) {
  
    //console.log(choice);
  
    const newTable = document.createElement("table");
    newTable.innerHTML = "<caption>" +choice+ "</caption>"; 
   // newTable.appendChild(document.createElement("tr"));
    //newTable.innerHTML += "<thead>"

    //"<thead><th>Hour</th><th>Day</th></thead>";
    for (var counter in vanc) {
  
      const newCol = document.createElement("td");
  
      const tdDay = document.createElement("tr");
      const tdHour = document.createElement("tr");
      const tdDose = document.createElement("tr");
      const tdLevel = document.createElement("tr");
      tdDay.textContent = vanc[counter].day;
      tdHour.textContent = vanc[counter].hour;
      tdDose.textContent = vanc[counter].dose;
      tdLevel.textContent = vanc[counter].level;
  
  
      switch (choice) {
        case 'day':
          newCol.appendChild(tdDay);
          break;
        case 'hour':
          newCol.appendChild(tdHour);
          break;
        case 'dose':
          newCol.appendChild(tdDose);
          break;
        case 'level':
          newCol.appendChild(tdLevel);
          break;
      }
  
      newTable.appendChild(newCol);
  
  
      //check next day is within array parameters
      var nextDay = 0;
      if (Number(counter) + 1 < vanc.length) {
        nextDay = vanc[Number(counter) + 1].day;
      }
  
      //make new row if next day is different than current day
      if (vanc[Number(counter)].day < nextDay) {
        console.log("new row created");
        newTable.appendChild(document.createElement("tr"));
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
    console.log(vanc[i].dose);
  
  }
  
  function buildEverything() {
    //days = 3;
  
    var days = document.getElementById("DaysToRender").value;

    document.getElementById("target").innerHTML = "";
      
    array = makeArray(days);
    makeDose(array, 1000, 1, 22);
    makeTable(array,'dose');
    makeTable(array,'hour');
    makeTable(array,'day');
    makeTable(array,'level');
  }
  
  //buildEverything();
  