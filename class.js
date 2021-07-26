class Mission {
    //states  first
    constructor(
        fuelLevel,
        oxygenLevel,
        foodLevel,
        spaceCraft,
        luanchDateDay,
        luanchDateMonth,
        luancDateYear,
        numOfAstronuants,
    ){ //sustinate state
        this.fuelLevel = fuelLevel;
        this.oxygenLevel = oxygenLevel;
        this.foodLevel = foodLevel;
        this.spaceCraft = spaceCraft;
        this.luanchDateDay = luanchDateDay;
        this.luanchDateMonth =luanchDateMonth;
        this.luancDateYear = luancDateYear;
        this.numOfAstronuants = numOfAstronuants;
    }
    //list methods
    luanch(){
        //code for luanch goes here
        alert("we are taking off");
    }

    disMissionLuanchDate(){
        alert("this mission luanches on"+ this.luanchDateMonth + " " + this.luanchDateDay + ", " + this.luancDateYear);
    }
}

function luanchFall() {
   console.log("luanchFall() running")
   fallLuanch.luanch();
}

function DisplayFall() {
    console.log("DisplayFall() running");
    fallLuanch.disMissionLuanchDate();
}
