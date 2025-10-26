/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Tiago
 * Created on: oct 2025
 * This program plays cookie clicker.
*/

//setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// variables
let currentNumber : number = 0

// add 1 to currentNumber
input.onButtonPressed(Button.A, function() {
    // add 1
    basic.clearScreen()
    currentNumber = currentNumber + 1
    basic.showNumber(currentNumber)
})

// reset currentNumber
input.onButtonPressed(Button.B, function() {
    // reset to 0
    currentNumber = currentNumber - currentNumber
    basic.showNumber(currentNumber)
})
