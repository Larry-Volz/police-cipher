let txt="";
    let currLetter='';
    let cipher = ['A','B','N','D','I','P','G','H','V','J','U','L','M','E','T','F','Q','R','S','O','K','V','W','X','Y','Z'];
    let idx = 0;
    let trimmedTxt=""
    let breakInto4s=0
    let keyPressCounter=0;

    let countTimeSinceInput = setInterval(function(){
        +keyPressCounter ++;
        // console.log(`keyPressCounter: ${keyPressCounter}`)
        //if no input for 3 minutes clear hte screen so next players don't see the code
        if (keyPressCounter > 3*60) {
            txt = "";
            $("#cipher-output").text("NOTES:")
            keyPressCounter = 0;
        }
    }, 1000);

    $("body").on("keypress", function(evt) {

        keyPressCounter = 0;

        if (txt.length > 32) {
            txt = txt.slice(1)
        } 

        if (breakInto4s == 4){
            breakInto4s = 0;
            txt += " ";
        }

        breakInto4s ++;
        
        currLetter = evt.key.toUpperCase();
        idx = currLetter.charCodeAt()-65;
        if (idx >= 0 && idx < 26) {
            txt += cipher[idx];
        } else {
            txt += currLetter;
        }

        // trimmedTxt= txt.split(" ").join("")
        // console.log(`trimmedText is ${trimmedTxt.length}`)
        // if (trimmedTxt.length%4==0){txt+=" "}

        $("#cipher-output").text(txt)
    });

    