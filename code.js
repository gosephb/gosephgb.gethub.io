function Start(){
   console.log("Star() function started");
   document.getElementById("data").rows["seconds"].innerHTML = "Reading data";
   index = 0;
   timer = setInterval(updateDisplay, time_interval);
   document.getElementById("Startbutton").disabled = true;
   document.getElementById("Startbutton").disabled = false;
}

function Stop(){
   console.log("Stop function started");
   clearInterval(timer);
   document.getElementById("Stopbutton").disabled = true;
   document.getElementById("Stopbutton").disabled = false;
}

function getData(){
   var loadedData = loadData();
   return loadedData;
}

function dataRow(legend, value, units){
   msg = "<td>";
   msg += legend;
   msg +=": </td><td>";
   msg += value;
   msg += " " + units;
   msg += "</td>";
   return msg;
}

function playStation(){
   console.log("play space station sounds");
   mySound = new sound("spaceSound.mp3");
   mySound.play();
}

function playBowie(){
   mysound = new sound()
}
function sound(src) {
   this.sound = document.createElement("audio");
   this.sound.src = src;
   this.sound.setAttribute("preload","audio");
   this.sound.setAttribute("contols","none");
   this.sound.style.display = "none";
   document.body.appendChild(this.sound);
   this.play = function(){
      this.sound.play();
   }
   this.stop = function(){
      this.sound.pause();
   }
}

function countdownTimer() {
    console.log("countdownTimer working");
    var currTime = 50;
    document.getElementById("countdownStatus").innerHTML = currTime;
    currTime = currTime -5;

    //time for 45
    setTimeout(function(){
       //stuff in here happens after time out
       document.getElementById("countdownStatus").innerHTML = currTime;
       currTime = currTime -5;
    }, 5000);

    //timer for 40
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 10000);
    
     //timer for 35
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 15000);

     //timer for 30
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 20000);

     //timer for 25
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 25000);

     //timer for 20
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 30000);

     //timer for 15
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 35000);

     //timer for 10
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 40000);

     //timer for 5
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = currTime;
        currTime = currTime -5;
     }, 45000);

     //timer for 0
    setTimeout(function(){
        //stuff in here happens after time out
        document.getElementById("countdownStatus").innerHTML = "Blastoff!";
        currTime = currTime -5;
     }, 50000);

}


//crap game function works in this function.
function playCraps(){
   //game started
   console.log("Craps game initated");
   // dice rolling function giving you six sides of adice or numbers 1-6 on die1
   var die1 = Math.ceil(Math.random()*6);
      // dice rolling function giving you six sides of adice or numbers 1-6 on die2
   var die2 = Math.ceil(Math.random()*6);
   //gets the value of die1
   document.getElementById("die1Res").innerHTML = die1;
   //gets the value of die2
   document.getElementById("die2Res").innerHTML = die2;
   //gets the value of both dice
   var dieSum = die1 + die2;
   document.getElementById("dieSum").innerHTML = dieSum;
   //if you get a 7 or 11 you lose
   if(dieSum == 7 || dieSum == 11){
      document.getElementById("crapStatus").innerHTML = "Craps! you lose!!";
      //if two numbers of die are the same you win
   }else if(die1 == die2 && die1 % 2 == 0){ 
      document.getElementById("crapStatus").innerHTML = "Doubles you win";
      //if numbers are not doubles or sum = 11 or 7 roll agian you dont win or lose
   }else{
      document.getElementById("crapStatus").innerHTML = "You did not lose and you did not win. Please try again.";
   }
}



function btrCountdownTimer(){
    console.log("btrCountdownTimer() started");
    var currTime = 50
    for(var i = 0; i < 11; i ++){
       if(i == 10){
         setTimeout(function(){
             document.getElementById("countdownStatus").innerHTML = "Blastoff";
             currTime = currTime - 5
          },5000 * i)
       }else if (i > 4){
         setTimeout(function(){
            console.log(i);
            document.getElementById("countdownStatus").innerHTML = "WARNING Less then halfway to luanch, Time left =" + currTime;
            currTime = currTime - 5;
          },5000 * i)
       }else{
       setTimeout(function(){
         console.log(i);
         document.getElementById("countdownStatus").innerHTML = currTime;
         currTime = currTime - 5;
      },5000 * i)
   }
} 
    
   }
   class InputData {
      constructor(
         time_seconds,
         latitude,
         longitude,
         gps_altitude,
         bmpSensor_altitude,
         bmpSensor_pressure,
         bmpSensor_temp,
         digSensor_temp,
         cssSensor_temp,
         cssSensor_eC02,
         cssSensor_TVOC,
         UV,
         accelX,
         accelY,
         accelZ,
         magnetX,
         magnetY,
         magnetZ,
         gyroX,
         gyroY,
         gyroZ,
      ){
         this.time_seconds = time_seconds;
         this.latitude = latitude;
         this.longitude = longitude;
         this.gps_altitude = gps_altitude;
         this.bmpSensor_altitude = bmpSensor_altitude;
         this.bmpSensor_pressure = bmpSensor_pressure;
         this.bmpSensor_temp = bmpSensor_temp;
         this.digSensor_temp = digSensor_temp;
         this.cssSensor_temp = cssSensor_temp;
         this.cssSensor_eC02 = cssSensor_eC02;
         this.cssSensor_TVOC = cssSensor_TVOC;
         this.UV = UV;
         this.accelX = accelX;
         this.accelY = accelY;
         this.accelZ = accelZ;
         this.magnetX = magnetX;
         this.magnetY = magnetY;
         this.magnetZ = magnetZ;
         this.gyroX = gyroX;
         this.gyroY = gyroY;
         this.gyroZ = gyroZ;
      }
    
    
    }

    function goUATSpace(){
       console.log("goUATSpace() started");
       location.replace("UATSpacePage.html");
    }
    function goLandingPage(){
       console.log("goLandingPage() started");
       location.replace("index.html");
    }
    function goBoards(){
       console.log("goBoards() started");
       location.replace("boards.html");
    }