function green () {
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
input.onButtonPressed(Button.A, function () {
    RED()
    basic.pause(1000)
    green()
    basic.pause(1000)
    YELLOW()
    basic.pause(1000)
})
function RED () {
    index = 20
    basic.showIcon(IconNames.Yes)
    for (let index = 0; index <= 4; index++) {
        index = index - 1
    }
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(5000)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function YELLOW () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let index = 0
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Angry)
strip = neopixel.create(DigitalPin.P16, 3, NeoPixelMode.RGB)
strip.setBrightness(255)
