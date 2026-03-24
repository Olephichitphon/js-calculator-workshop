🧮 Simple JavaScript Calculator Workshop
A functional calculator built with Vanilla JavaScript, featuring a clean CSS Grid layout and interactive UI effects.

🇺🇸 JavaScript Logic: Technical Breakdown
The core of this application is built on State Management and DOM Manipulation:

State Control: Uses previousInput, currentInput, and operator to track the calculation flow.

Input Handling (setCurrentInput): Captures numerical data. It smartly detects if an operator is active using .includes() to decide whether to append numbers or start a new operand.

Operation Processing (setOperator): Transitions the application from the first number to the second by storing the current value and the selected mathematical symbol.

Math Engine (Calculate & Calculator): Uses a switch statement for clean arithmetic logic and handles data type conversion (Number) to ensure precision.

Reset Logic (clearDisplay): Completely flushes the global state and UI for a fresh start.
