let player = 0;
let winerCombinations = [['1', '2','3'],
                        ['4', '5', '6'],
                        ['7', '8', '9'],
                        ['1', '5', '9'],
                        ['1', '4', '7'],
                        ['2', '5', '8'],
                        ['3', '6', '9'],
                        ['3', '5', '7']];          
let xs =  [];
let os =  [];

function printTheCharacter(id) {
    if (player % 2 == 0) {
        document.getElementById(id).innerText = 'X';
        xs.push(Number(id));
    } else {
        document.getElementById(id).innerText = "O";
        os.push(Number(id));  
    }
    ++player;
    return (verifWiner(id));
}

function verifWiner(id) {
    xs.sort((a, b) => a - b);
    os.sort((a, b) => a - b);
    let mesages = 0;
    if (mesages == 0) {
        if (player == 9) {
            document.getElementById('mesage').innerText = "Draw game";
        }
        for (let i = 0; i < 8; ++i) {
            foundx = 0;
            foundo = 0;
            for (let j = 0; j < 3; ++j) {
                for (let z = 0; z <= xs.length; ++z) {
                    if (winerCombinations[i][j] == xs[z]) {
                        ++foundx;
                    }
                }
                for (let z = 0; z <= os.length; ++z) {
                    if (winerCombinations[i][j] == os[z]) {
                        ++foundo;
                    }
                }
            }
            if (foundx == 3) {
                document.getElementById('mesage').innerText = "Player X win";
            }
            if (foundo == 3) {
                document.getElementById('mesage').innerText = "Player O win";
            }
        }
    }
}

 function restartGame() {
    location.reload();
 } 