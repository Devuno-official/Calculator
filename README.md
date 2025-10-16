# Calculator App

A beautiful, responsive calculator built with React that looks and feels like the iOS Calculator on mobile devices.

## What It Does

This calculator lets you perform basic math operations like addition, subtraction, multiplication, and division. It also supports parentheses for complex calculations and has a clear button to reset everything.

## Features

### Basic Operations

- **Numbers**: 0-9 for inputting numbers
- **Operators**: + (addition), - (subtraction), \* (multiplication), / (division)
- **Equals**: = to calculate the result
- **Clear**: C to clear everything and start over
- **Backspace**: < to delete the last character
- **Parentheses**: ( and ) for grouping calculations
- **Decimal**: . for decimal numbers

### Smart Design

- **Mobile-First**: Designed to look exactly like the iOS Calculator on phones
- **Responsive**: Automatically adapts to different screen sizes
- **Touch-Friendly**: Large buttons that are easy to tap on mobile
- **Full Screen**: Takes up the entire mobile screen for a native app feel

## How It Works

### The Interface

- **Display**: Shows your input and results in large, easy-to-read text
- **Button Grid**: 4 columns of buttons arranged like a traditional calculator
- **Color Coding**:
  - Gray buttons for numbers and clear
  - Orange buttons for operators and equals
  - Different shades for better visual organization

### The Logic

1. **Input Handling**: When you tap a button, it adds that character to the display
2. **Calculation**: When you press "=", it uses JavaScript's `eval()` function to calculate the result
3. **Clear Function**: The "C" button resets everything to start fresh
4. **Backspace**: The "<" button removes the last character you typed
5. **Real-time Display**: Everything you type appears immediately on screen

### Mobile Experience

- **Full Screen**: On mobile devices, the calculator covers the entire screen
- **No Gaps**: Buttons are connected with no spaces between them (like iOS)
- **Large Touch Areas**: Each button is big enough to tap easily with your finger
- **Instant Feedback**: Buttons change color when you tap them

### Desktop Experience

- **Rounded Design**: On larger screens, it has rounded corners and spacing
- **Centered Layout**: The calculator sits nicely in the center of the screen
- **Hover Effects**: Buttons change color when you hover over them with a mouse

## Technical Details

### Built With

- **React**: For the user interface and state management
- **Tailwind CSS**: For styling and responsive design
- **Vite**: For fast development and building

### File Structure

- `App.jsx`: Main calculator component with all the logic
- `Container.jsx`: Wrapper component that handles the layout
- `Button.jsx`: Reusable button component for all calculator buttons

### Key Features

- **State Management**: Uses React's `useState` to track the current input
- **Event Handling**: Responds to button clicks and updates the display
- **Responsive Design**: Uses Tailwind's responsive classes for different screen sizes
- **Touch Optimization**: Includes `touch-manipulation` for better mobile performance

## How to Use

1. **Start Calculating**: Tap any number to begin
2. **Add Operations**: Use +, -, \*, or / to add mathematical operations
3. **Use Parentheses**: Add ( and ) to group calculations
4. **Get Results**: Press = to see your answer
5. **Clear**: Press C to start over
6. **Fix Mistakes**: Use < to delete the last character

## Mobile vs Desktop

### On Mobile Phones:

- Full black screen with no borders
- Square buttons with subtle borders
- Large, easy-to-read text
- Feels like a native iOS app

### On Desktop/Tablet:

- Rounded calculator with shadow
- Rounded buttons with hover effects
- Centered on the page
- More spacious and elegant design

This calculator gives you the best of both worlds - a native mobile app experience on phones and a polished desktop interface on larger screens!
