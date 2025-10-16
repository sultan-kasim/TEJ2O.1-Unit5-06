/* Copyright (c) 2025 MTHS All rights reserved
 *
 * Created by: Sultan 
 * Created on: Oct 2025
 * This program gets distance to a object and shows it using a sonar.
*/

// variables
let distanceToObject: number = 0

// setup
basic.showIcon(IconNames.Happy)

// find distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})