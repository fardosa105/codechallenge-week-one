

1. gradeGenerator()
Description:
This function prompts the user to input student marks and determines the corresponding grade based on the provided criteria.

Usage:

The user is prompted to input a number between 0 and 100.
The function checks if the input is valid.
Based on the input, the function assigns a grade and prints it to the console.
Grades Criteria:

A: Marks > 79
B: 60 <= Marks <= 79
C: 50 <= Marks <= 59
D: 40 <= Marks <= 49
E: Marks < 40

2. speedDetector()
Description:
This function takes the speed of a car as input and prints a message based on whether the speed is within the limit or over it. It also calculates demerit points for speeds over the limit and indicates if the license should be suspended.

Usage:

The user is prompted to input the car's speed.
The function checks if the input is valid.
If the speed is within the limit (<= 70), it prints "Ok".
For every 5 km/s above the speed limit, the function calculates and prints demerit points.
If the demerit points exceed 12, it prints "License suspended".
3. calculateNetSalary(basicSalary, benefits)
Description:
This function calculates an individual’s Net Salary by getting the inputs of basic salary and benefits. It calculates the PAYE (Tax), NHIF deductions, NSSF deductions, gross salary, and net salary.

Usage:

Input the basic salary and benefits.
The function calculates the gross salary.
Based on the gross salary, it calculates PAYE, NHIF, and NSSF deductions.
Finally, it calculates and returns the net salary.
