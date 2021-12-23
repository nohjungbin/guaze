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
let A_count = 0
let B_count = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        if (true) {
        	
        } else {
            if (true) {
            	
            } else {
                if (true) {
                	
                } else {
                    if (true) {
                    	
                    } else {
                    	
                    }
                }
            }
        }
    }
    music.setBuiltInSpeakerEnabled(true)
})
