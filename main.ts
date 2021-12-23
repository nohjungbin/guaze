input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onGesture(Gesture.SixG, function () {
	
})
input.onButtonPressed(Button.B, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    music.setBuiltInSpeakerEnabled(true)
})
