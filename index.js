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


    //newTable.appendChild(document.createElement("tr"));
    //newTable.innerHTML += "<thead>"
    //const newHead = document.createElement("td");

    for (var i = 0; i<24; i++){
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
          newTable.appendChild(tdDay);
          break;
        case 'hour':
          const tdHour = document.createElement("td");
          tdHour.textContent = vanc[counter].hour;
          newTable.appendChild(tdHour);
          break;
        case 'dose':
          const tdDose = document.createElement("td");
          tdDose.textContent = vanc[counter].dose;
          newTable.appendChild(tdDose);
          break;
        case 'level':
          const tdLevel = document.createElement("td");
          tdLevel.textContent = vanc[counter].level;
          newTable.appendChild(tdLevel);
          break;
      }
  
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
  