let A_count = 0
let B_count = 0
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.A, function () {
    A_count += 1
})
input.onGesture(Gesture.SixG, function () {
	
})
input.onButtonPressed(Button.B, function () {
    B_count += 1
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (A_count == 1 && B_count == 1) {
            music.setTempo(145)
            music.playTone(740, music.beat(BeatFraction.Half))
            music.playTone(831, music.beat(BeatFraction.Half))
            music.playTone(587, music.beat(BeatFraction.Quarter))
            music.playTone(622, music.beat(BeatFraction.Half))
            music.playTone(494, music.beat(BeatFraction.Quarter))
            music.playTone(587, music.beat(BeatFraction.Quarter))
            music.playTone(554, music.beat(BeatFraction.Quarter))
            music.playTone(494, music.beat(BeatFraction.Half))
            music.playTone(494, music.beat(BeatFraction.Half))
            control.waitMicros(500)
            music.playTone(494, music.beat(BeatFraction.Quarter))
            music.playTone(554, music.beat(BeatFraction.Quarter))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(587, music.beat(BeatFraction.Quarter))
            music.playTone(554, music.beat(BeatFraction.Quarter))
            music.playTone(494, music.beat(BeatFraction.Quarter))
            music.playTone(554, music.beat(BeatFraction.Quarter))
            music.playTone(587, music.beat(BeatFraction.Quarter))
            music.playTone(740, music.beat(BeatFraction.Quarter))
            music.playTone(831, music.beat(BeatFraction.Quarter))
            music.playTone(587, music.beat(BeatFraction.Quarter))
            music.playTone(740, music.beat(BeatFraction.Quarter))
            music.playTone(554, music.beat(BeatFraction.Quarter))
            music.playTone(587, music.beat(BeatFraction.Quarter))
            music.playTone(494, music.beat(BeatFraction.Quarter))
            music.playTone(554, music.beat(BeatFraction.Quarter))
            music.playTone(494, music.beat(BeatFraction.Quarter))
        } else {
            if (A_count == 2 && B_count == 1) {
            	
            } else {
                if (true) {
                	
                } else {
                    if (true) {
                    	
                    } else {
                    	
                    }
                }
            }
        }
        A_count = 0
        B_count = 0
    }
    music.setBuiltInSpeakerEnabled(true)
})
