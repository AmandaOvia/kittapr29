function green () {
    range = strip.range(2, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function RED () {
    range = strip.range(0, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
function YELLOW () {
    range = strip.range(1, 1)
    range.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    range.showColor(neopixel.colors(NeoPixelColors.Black))
}
let range: neopixel.Strip = null
let strip: neopixel.Strip = null
basic.showIcon(IconNames.Angry)
strip = neopixel.create(DigitalPin.P0, 3, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.forever(function () {
    RED()
    basic.pause(1000)
    green()
    basic.pause(1000)
    YELLOW()
    basic.pause(1000)
})
