let player = 0;
let winerCase = ['1', '2','3', '4', '5', '6', '7', '8', '9', '1', '5', '9', '1', '4', '7', '2', '5', '8', '3', '6', '9', '3', '5', '7'];
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
    let winer = document.getElementById(id).innerText;
    if (mesages == 0) {
        if (player == 9) {
            document.getElementById('mesage').innerText = "Draw game";
        }
        for (let i = 0; i < winerCase.length; i += 3) {
            let curentPozition = i;
            let founded = 0;
            for (let j = 0; j < xs.length; ++j) {
                if (winerCase[curentPozition] == xs[j]) {
                    ++founded;
                }
                ++curentPozition;
            }
            if (founded >= 3) {
                document.getElementById('mesage').innerText = "Player " + winer +" win";
                mesages = 1;
            }
        }
        for (let i = 0; i < winerCase.length; i += 3) {
            let curentPozition = i;
            let founded = 0;
            for (let j = 0; j < os.length; ++j) {
                if (winerCase[curentPozition] == os[j]) {
                    ++founded;
                }
                ++curentPozition;
            }
            if (founded >= 3) {
                document.getElementById('mesage').innerText = "Player " + winer +" win";
                mesages = 1;
            }
        }
    }
}

 function restartGame() {
    location.reload();
 }