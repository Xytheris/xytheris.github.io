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