var Lock_img1 = 0
var Lock_img2 = 0
var Lock_img3 = 0
var Lock_img4 = 0
var num1 = 0
var num2 = 0
var num3 = 0
var num4 = 0
var att = 0
var max_atts = 10


function init() {
    num1 = Math.round((Math.random())*9);
    num2 = Math.round((Math.random())*9);
    num3 = Math.round((Math.random())*9);
    num4 = Math.round((Math.random())*9);
}


function img(a) {
    
    if (a == 1) {
        Lock_img1 += 1
        if (Lock_img1 > 9) {
            Lock_img1 = 0
        }
        image1.src = "Assets/sprite_0"+Lock_img1+".png"
    }

    if (a == 2) {
        Lock_img2 += 1
        if (Lock_img2 > 9) {
            Lock_img2 = 0
        }
        image2.src = "Assets/sprite_0"+Lock_img2+".png"
    }

    if (a == 3) {
        Lock_img3 += 1
        if (Lock_img3 > 9) {
            Lock_img3 = 0
        }
        image3.src = "Assets/sprite_0"+Lock_img3+".png"
    }

    if (a == 4) {
        Lock_img4 += 1
        if (Lock_img4 > 9) {
            Lock_img4 = 0
        }
        image4.src = "Assets/sprite_0"+Lock_img4+".png"
    }
}

function decrypt() {
    if (att < max_atts) {
        att += 1
    remains.innerHTML = "Intentos Restantes: " + (max_atts - att)

    valid = 0
    if (Lock_img1 == num1) {
        valid += 1
        slot1.style.background = "green"
    } else if (Lock_img1 == (num1 - 1) || Lock_img1 == (num1 + 1)) {
        slot1.style.background = "blue"
    } else {
        slot1.style.background = "white"
    }


    if (Lock_img2 == num2) {
        valid += 1
        slot2.style.background = "green"
    } else if (Lock_img2 == (num2 - 1) || Lock_img2 == (num2 + 1)) {
        slot2.style.background = "blue"
    } else {
        slot2.style.background = "white"
    }
    

    if (Lock_img3 == num3) {
        valid += 1
        slot3.style.background = "green"
    } else if (Lock_img3 == (num3 - 1) || Lock_img3 == (num3 + 1)) {
        slot3.style.background = "blue"
    } else {
        slot3.style.background = "white"
    }


    if (Lock_img4 == num4) {
        valid += 1
        slot4.style.background = "green"
    } else if (Lock_img4 == (num4 - 1) || Lock_img4 == (num4 + 1)) {
        slot4.style.background = "blue"
    } else {
        slot4.style.background = "white"
    };

    if (valid != 4) {
    Lock_img1 = 0
    Lock_img2 = 0
    Lock_img3 = 0
    Lock_img4 = 0
    image1.src = "Assets/sprite_0"+Lock_img1+".png"
    image2.src = "Assets/sprite_0"+Lock_img2+".png"
    image3.src = "Assets/sprite_0"+Lock_img3+".png"
    image4.src = "Assets/sprite_0"+Lock_img4+".png"
    }

    correct.innerHTML = "Digitos Acertados: " + valid
    
    if (att >= 10 ) {
        verify_button.disabled = true
        slot1.style.filter = "blur(10px)";
        slot2.style.filter = "blur(10px)";
        slot3.style.filter = "blur(10px)";
        slot4.style.filter = "blur(10px)";
        alert('Combinacion Correcta: '+ num1 + num2 + num3 + num4)
    }

}
}