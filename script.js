function CheckScore() {
    var userScore = Number(score.value) 
    // console.log(UserScore);
    if(userScore== "" ){
        console.log('invalid');
        seeAm.innerHTML = 'invalid'
    } else if( userScore <0){
        console.log('Null');
        seeAm.innerHTML = 'Null'
    }
    else if(userScore >= 0 && userScore < 40) {
        console.log('F - Fail ');
        seeAm.innerHTML = 'F - Fail 😢'
        var songFail = new Audio ('Audio/failure-steven-he-made-with-Voicemod.mp3')
        songFail.play()
    } else if (userScore >= 40 && userScore < 45){
        console.log('E - Pass');
        seeAm.innerHTML = 'E - Fair 😒'
        var songPass = new Audio ('Audio/mixkit-falling-male-scream-391.wav')
        songPass.play()
    } else if (userScore >= 45 && userScore < 50){
        console.log('D - Pass');
        seeAm.innerHTML = 'D - Pass 😉'
        var songPass = new Audio ('Audio/Evangelist_Ojo_Ade_-_Eyi_Kii_Sopin-Evangelist_Ojo_Ade.mp3')
        songPass.play()
    } else if (userScore >= 50 && userScore < 60) {
        console.log('C - Credit');
        seeAm.innerHTML = 'C - Credit 👍'
        var songCredit = new Audio ('Audio/mixkit-light-applause-with-laughter-audience-512.wav')
        songCredit.play()
    } else if (userScore >= 60 && userScore < 70){
        console.log('B - Good');
        seeAm.innerHTML = 'B - Good ✌️'
        var songGood = new Audio ('Audio/Clapping Sound Effects.mp3')
        songGood.play()
    }  else if (userScore >= 70 && userScore < 101){
        console.log('A - Excellence');
        seeAm.innerHTML = 'A - Excellence ❤️'
        var songExcellence = new Audio ('Audio/Right_Said_Fred_-_Stand_Up_For_The_Champions_Niggaloaded.com.ng.mp3')
        songExcellence.play()
    } else if (userScore >=101) {
        console.log('Not recognised');
        seeAm.innerHTML = 'Not recognised'
    }
}   