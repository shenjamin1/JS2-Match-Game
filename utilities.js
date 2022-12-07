function getRandomInteger(lower, upper) {
    var multiplier = upper - (lower - 1);
    var rnd = parseInt(Math.random() * multiplier) + lower;

    return rnd;
}

function setList() {

    const pictures = ["img/basketball.png", "img/football.png", "img/glove.png", "img/pingpong.png", "img/shoes.png", "img/tricycle.png", "img/trophy.png", "img/weight.png", "img/basketball.png", "img/football.png", "img/glove.png", "img/pingpong.png", "img/shoes.png", "img/tricycle.png", "img/trophy.png", "img/weight.png"];

    for (i = 1; i <= 16; i++) {
        picture = document.getElementById(i.toString());
        random = getRandomInteger(0, pictures.length - 1);

        if (i === 1) {img1 = pictures.splice(random, 1);}
        if (i === 2) {img2 = pictures.splice(random, 1);}
        if (i === 3) {img3 = pictures.splice(random, 1);}
        if (i === 4) {img4 = pictures.splice(random, 1);}
        if (i === 5) {img5 = pictures.splice(random, 1);}
        if (i === 6) {img6 = pictures.splice(random, 1);}
        if (i === 7) {img7 = pictures.splice(random, 1);}
        if (i === 8) {img8 = pictures.splice(random, 1);}
        if (i === 9) {img9 = pictures.splice(random, 1);}
        if (i === 10) {img10 = pictures.splice(random, 1);}
        if (i === 11) {img11 = pictures.splice(random, 1);}
        if (i === 12) {img12 = pictures.splice(random, 1);}
        if (i === 13) {img13 = pictures.splice(random, 1);}
        if (i === 14) {img14 = pictures.splice(random, 1);}
        if (i === 15) {img15 = pictures.splice(random, 1);}
        if (i === 16) {img16 = pictures.splice(random, 1);}
    }
}

function flipCard(id) {
    if (totalMatches < 8 && document.getElementById(id).src == "http://127.0.0.1:5500/JS2%20Project/img/questionmark.png") {
        if (id === '1') {document.getElementById(id).src = img1;}
        if (id === '2') {document.getElementById(id).src = img2;}
        if (id === '3') {document.getElementById(id).src = img3;}
        if (id === '4') {document.getElementById(id).src = img4;}
        if (id === '5') {document.getElementById(id).src = img5;}
        if (id === '6') {document.getElementById(id).src = img6;}
        if (id === '7') {document.getElementById(id).src = img7;}
        if (id === '8') {document.getElementById(id).src = img8;}
        if (id === '9') {document.getElementById(id).src = img9;}
        if (id === '10') {document.getElementById(id).src = img10;}
        if (id === '11') {document.getElementById(id).src = img11;}
        if (id === '12') {document.getElementById(id).src = img12;}
        if (id === '13') {document.getElementById(id).src = img13;}
        if (id === '14') {document.getElementById(id).src = img14;}
        if (id === '15') {document.getElementById(id).src = img15;}
        if (id === '16') {document.getElementById(id).src = img16;}

        currentFlips++;
        totalFlips++;

        if (currentFlips === 1) {
            lastId = id;
            console.log(lastId);
        }

        if (currentFlips === 2) {
            finalId = id;

            if (document.getElementById(lastId).src === document.getElementById(finalId).src) {
                totalMatches++;
                console.log('match');
                currentFlips = 0;
            }
        }

        if (currentFlips === 3) {
            document.getElementById(lastId).src = "img/questionmark.png";
            document.getElementById(finalId).src = "img/questionmark.png";
            currentFlips = 1;
            lastId = id;
        }

        if (totalMatches === 8) {
            document.getElementById("win").innerHTML = "You win!!!";
        }

        console.log(currentFlips);

        display();
    }

    else {console.log(document.getElementById(id).src);}
}