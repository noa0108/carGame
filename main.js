// VARIABLES
const car = {
    make: 'Tesla',
    model: 'Roadster',
    color: 'red',
    mileage: 0,
    isWorking: true,

    driveToWork(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 10;
        alert(`New Mileage: ${this.mileage}`);
    },

    driveAroundUSA(){
        alert(`Old Mileage: ${this.mileage}`);
        this.mileage += 7000;
        alert(`New Mileage: ${this.mileage}`); 
        alert('Car needs a tuneup!');
        this.isWorking = false;
    },
    getTuneUp(){
        alert('Car is fixed and ready to go!');
        this.isWorking = true;
    },

    honk(){
        alert("Honk! Honk!");
    }
};

// FUNCTIONS
// Logs all of our car's current stats to the console
reWriteStats=()=>{
    console.log(`Make: ${car.make}`);
    console.log(`Model: ${car.model}`);
    console.log(`Color: ${car.color}`);
    console.log(`Mileage: ${car.mileage}`);
    console.log(`isWorking: ${car.isWorking}`);
    console.log('----------------------------');
}


// MAIN PROCESS
// Captures keyboard input. Depending on the letter pressed it will "call" (execute) different functions.
document.onkeyup = (event) => {
    // Captures the key press, converts it to lowercase, and saves it to a variable
    let letter = String.fromCharCode(event.keyCode).toLowerCase();

    if (letter === "d") {
        car.driveToWork();
        reWriteStats();
    }
    
    if (letter === "r") {
        car.driveAroundUSA();
        reWriteStats(); 
    }
    if (letter === "t") {
        car.getTuneUp();
        reWriteStats(); 
    }

    if (letter === "h") {
        car.honk();
        reWriteStats(); 
    }



}