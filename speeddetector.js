function speedDetector() {
    // Prompt the user to input the speed of the car
    let speed = prompt("Enter the speed of the car:");

    // Convert the input to a number
    speed = Number(speed);

    // Check if the input is a valid number
    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input! Please enter a valid speed.");
        return;
    }

    // Define the speed limit and the demerit point threshold
    const speedLimit = 70;
    const pointsThreshold = 12;
    const pointsPerKm = 5;

    // Check if the speed is within the limit
    if (speed <= speedLimit) {
        console.log("Ok");
    } else {
        // Calculate the number of demerit points
        let demeritPoints = Math.floor((speed - speedLimit) / pointsPerKm);

        // Print the number of demerit points
        console.log(`Points: ${demeritPoints}`);

        // Check if the driver should have their license suspended
        if (demeritPoints > pointsThreshold) {
            console.log("License suspended");
        }
    }
}

// Call the function to execute it
speedDetector();
