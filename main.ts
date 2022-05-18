function Cross () {
    basic.pause(500)
    basic.showIcon(IconNames.Yes)
    basic.pause(500)
    basic.showIcon(IconNames.StickFigure)
    basic.pause(200)
    for (let x = 0; x <= 9; x++) {
        basic.showNumber(9 - x)
    }
    basic.clearScreen()
}
function green () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.A, function () {
    RED()
    basic.pause(1000)
    Cross()
    basic.pause(1000)
    YELLOW()
    basic.pause(1000)
    green()
    cannot_cross()
    basic.pause(1000)
})
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function cannot_cross () {
    basic.pause(100)
    basic.showIcon(IconNames.No)
}
input.onButtonPressed(Button.B, function () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
})
function YELLOW () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Angry)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(255)
