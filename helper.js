function somethingChanged(vancObj){
    for(counter in vancObj){
    newChange = document.getElementbyId(dose+"index"+counter).value;
    vancObj[counter].dose = newChange;
    }

    console.log("input event fired");
}