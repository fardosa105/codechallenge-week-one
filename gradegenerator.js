function gradeGenerator() {
    // Prompt the user to input student marks
    let marks = prompt("Enter student marks (0-100):");

    // Convert the input to a number
    marks = Number(marks);

    // Check if the input is a valid number between 0 and 100
    if (isNaN(marks) || marks < 0 || marks > 100) {
        console.log("Invalid input! Please enter a number between 0 and 100.");
        return;
    }

    // Determine the grade based on the marks
    let grade;
    if (marks > 79) {
        grade = 'A';
    } else if (marks >= 60) {
        grade = 'B';
    } else if (marks >= 50) {
        grade = 'C';
    } else if (marks >= 40) {
        grade = 'D';
    } else {
        grade = 'E';
    }

    // Output the corresponding grade
    console.log(`The grade is: ${grade}`);
}

// Call the function to execute it
gradeGenerator();
