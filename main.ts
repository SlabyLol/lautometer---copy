enum RadioMessage {
    message1 = 49434
}
let readrut = 0
let readLoud = 0
let readShut = false
let readcel = 0
basic.showLeds(`
    . . . # .
    . # . . .
    . . . . .
    . # . # .
    . . # . .
    `)
basic.pause(500)
basic.forever(function () {
    readcel = input.temperature()
    readShut = input.isGesture(Gesture.LogoDown)
    readLoud = input.soundLevel()
    readrut = input.lightLevel()
    led.plotBarGraph(
    readLoud,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(readLoud)
    }
    if (readLoud == 255) {
        music.play(music.builtinPlayableSoundEffect(soundExpression.sad), music.PlaybackMode.UntilDone)
        basic.showIcon(IconNames.Sad)
    }
    if (readShut) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . . . . .
            . # # # .
            `)
        music.play(music.tonePlayable(587, music.beat(BeatFraction.Sixteenth)), music.PlaybackMode.UntilDone)
    }
    if (readcel > 33) {
        basic.showLeds(`
            . # . # .
            # . . . #
            . # # # .
            . # . # .
            . . . . .
            `)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showString("" + (readcel))
    }
    if (input.isGesture(Gesture.Shake)) {
        basic.showString("" + (readrut))
    }
})
