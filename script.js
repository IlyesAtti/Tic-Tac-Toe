let ply = 0;

function printTheCharacter(id) {
    if (ply % 2 == 0) {
        document.getElementById(id).innerText = 'X';
    } else {
        document.getElementById(id).innerText = "O";
    }
    ++ply;
    return (verifWiner(id)); 
}

function verifWiner(id) {
    let msg = 0;
    let winer = document.getElementById(id).innerText;
    if(msg == 0) {
        if (ply == 9) {
            document.getElementById('mesage').innerText = "Draw game";
        }
        if (((document.getElementById(1).innerText != '') && (document.getElementById(1).innerText == document.getElementById(2).innerText) && (document.getElementById(2).innerText == document.getElementById(3).innerText))||
            ((document.getElementById(4).innerText != '') && (document.getElementById(4).innerText == document.getElementById(5).innerText) && (document.getElementById(5).innerText == document.getElementById(6).innerText))||
            ((document.getElementById(7).innerText != '') && (document.getElementById(7).innerText == document.getElementById(8).innerText) && (document.getElementById(8).innerText == document.getElementById(9).innerText))||
            ((document.getElementById(1).innerText != '') && (document.getElementById(1).innerText == document.getElementById(5).innerText) && (document.getElementById(5).innerText == document.getElementById(9).innerText))||
            ((document.getElementById(1).innerText != '') && (document.getElementById(1).innerText == document.getElementById(4).innerText) && (document.getElementById(4).innerText == document.getElementById(7).innerText))||
            ((document.getElementById(2).innerText != '') && (document.getElementById(2).innerText == document.getElementById(5).innerText) && (document.getElementById(5).innerText == document.getElementById(8).innerText))||
            ((document.getElementById(3).innerText != '') && (document.getElementById(3).innerText == document.getElementById(6).innerText) && (document.getElementById(6).innerText == document.getElementById(9).innerText))||
            ((document.getElementById(3).innerText != '') && (document.getElementById(3).innerText == document.getElementById(5).innerText) && (document.getElementById(5).innerText == document.getElementById(7).innerText))) {
            document.getElementById('mesage').innerText = "Player " + winer +" win";
            msg = 1;
        }
    }
    if (msg == 0 && ply == 9) {
        document.getElementById('mesage').innerText = "Draw game";
    }
}

 function restartGame() {
    location.reload();
 }
