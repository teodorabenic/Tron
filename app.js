document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');

    //matrica koja predtavlja nas lavirint
    const layout = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1],
        [1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1],
        [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 1, 7, 1, 1, 1, 1, 1, 1, 7, 1, 0, 0, 1, 0, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 6, 3, 1, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 6, 2, 2, 3, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 5, 2, 2, 4, 1, 0, 7, 0, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 5, 4, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 7, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
        [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 1],
        [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    ];

    //dimenzije matrice
    const length = 24;
    const width = 24;

    //niz u koji cemo dodavati elemente u zavisnosti od broja koji se nalazi u matrici layout
    const squares = [];

    //0 - put
    //1 - zid
    //2,3,4,5,6 tron (imamo vise brojeva zbog CSS-a)
    //7 - nevidljiva barijera kroz koju neprijatelji ne mogu proci

    //prikazujemo matricu na ekranu
    function createBoard() {
        for (let i = 0; i < layout.length; i++) {
            var tempArr = [];
            for (let j = 0; j < layout.length; j++) {
                let square = document.createElement('div');
                grid.appendChild(square);
                tempArr.push(square);
            }
            squares.push(tempArr);
        }

        for (let i = 0; i < layout.length; i++) {
            for (let j = 0; j < layout.length; j++) {
                if (layout[i][j] === 1)
                    squares[i][j].classList.add('wall');
                else if (layout[i][j] === 0)
                    squares[i][j].classList.add('path');
                else if (layout[i][j] == 2) {
                    squares[i][j].classList.add('win');
                    squares[i][j].setAttribute("id", "center");
                }
                else if (layout[i][j] == 3) {
                    squares[i][j].classList.add('win');
                    squares[i][j].setAttribute("id", "triangle-1");
                } else if (layout[i][j] == 4) {
                    squares[i][j].classList.add('win');
                    squares[i][j].setAttribute("id", "triangle-2");
                } else if (layout[i][j] == 5) {
                    squares[i][j].classList.add('win');
                    squares[i][j].setAttribute("id", "triangle-3");
                } else if (layout[i][j] == 6) {
                    squares[i][j].classList.add('win');
                    squares[i][j].setAttribute("id", "triangle-4");
                } else if (layout[i][j] == 7) {
                    squares[i][j].classList.add('barier');
                }
            }
        }

    }
    let TRONCurrentIndexY = 22;
    let TRONCurrentIndexX = 1;

    function tronStartIndex() {
        TRONCurrentIndexY = 22;
        TRONCurrentIndexX = 1;
    }

    function drawPlayers() {
        squares[TRONCurrentIndexY][TRONCurrentIndexX].classList.add('tron');
        enemys.forEach(enemy => {
            squares[enemy.currentIndexY][enemy.currentIndexX].classList.add(enemy.className);
            squares[enemy.currentIndexY][enemy.currentIndexX].classList.add('enemy');

        });
    }

    //funkcija koja pomjera trona
    function moveTRON(e) {
        //zvuk koji se cuje kada se tron pomjera
        var audio = new Audio('audio/tron.wav');
        audio.volume='0.5';
        squares[TRONCurrentIndexY][TRONCurrentIndexX].classList.remove('tron');
        switch (e.keyCode) {
            case 37:
                if (TRONCurrentIndexX - 1 !== 0 && !squares[TRONCurrentIndexY][TRONCurrentIndexX - 1].classList.contains('wall'))
                    TRONCurrentIndexX -= 1;
                audio.play();
                break;
            case 38:
                if (TRONCurrentIndexY - 1 !== 0 && !squares[TRONCurrentIndexY - 1][TRONCurrentIndexX].classList.contains('wall'))
                    TRONCurrentIndexY -= 1;
                audio.play();
                break;
            case 39:
                if (TRONCurrentIndexX + 1 !== 0 && !squares[TRONCurrentIndexY][TRONCurrentIndexX + 1].classList.contains('wall'))
                    TRONCurrentIndexX += 1;
                audio.play();
                break;
            case 40:
                if (TRONCurrentIndexY + 1 !== 0 && !squares[TRONCurrentIndexY + 1][TRONCurrentIndexX].classList.contains('wall'))
                    TRONCurrentIndexY += 1;
                audio.play();
                break;
        }
        squares[TRONCurrentIndexY][TRONCurrentIndexX].classList.add('tron');
        checkForWin();
    }
    class Enemy {
        constructor(className, startIndexX, startIndexY, speed) {
            this.className = className;
            this.startIndexX = startIndexX;
            this.startIndexY = startIndexY;
            this.currentIndexX = startIndexX;
            this.currentIndexY = startIndexY;
            this.timerId = NaN;
            this.speed = speed;
        }
    }

    //niz neprijatelja
    enemys = [
        new Enemy('dipsy', 15, 10, 300),
        new Enemy('lala', 10, 9, 200),
        new Enemy('tinky', 1, 1, 250),
        new Enemy('po', 22, 22, 350)
    ];

    function EnemyStartIndex() {
        enemys[0].startIndexX = 15;
        enemys[0].startIndexY = 10;

        enemys[1].startIndexX = 10;
        enemys[1].startIndexY = 9;

        enemys[2].startIndexX = 1;
        enemys[2].startIndexY = 1;

        enemys[3].startIndexX = 22;
        enemys[3].startIndexX = 22;
    }

    function moveEnemy(enemy) {
        const directions = [+1, -1];
        //promjenljiva koja cuva direkciju uspomoc koje cemo pomjeriti neprijatelja
        let direction = directions[Math.floor(Math.random() * directions.length)];
        //promjenljiva koja cuva koji cemo od indeksa promjeniti
        //0-promjenicemo Y
        //1-promjenicemo X
        let choice = Math.floor(Math.random() * 2);

        enemy.timerId = setInterval(function () {

            let au = new Audio('audio/enemy.wav');
            au.volume = '0.05';
            au.play();
            if (choice === 0 && !squares[enemy.currentIndexY + direction][enemy.currentIndexX].classList.contains('wall')
                && !squares[enemy.currentIndexY + direction][enemy.currentIndexX].classList.contains('barier')) {

                squares[enemy.currentIndexY][enemy.currentIndexX].classList.remove(enemy.className);
                squares[enemy.currentIndexY][enemy.currentIndexX].classList.remove('enemy');
                enemy.currentIndexY += direction;
                squares[enemy.currentIndexY][enemy.currentIndexX].classList.add(enemy.className, 'enemy');

            } else if (choice === 1 && !squares[enemy.currentIndexY][enemy.currentIndexX + direction].classList.contains('wall')
                && !squares[enemy.currentIndexY][enemy.currentIndexX + direction].classList.contains('barier')) {
                squares[enemy.currentIndexY][enemy.currentIndexX].classList.remove(enemy.className);
                squares[enemy.currentIndexY][enemy.currentIndexX].classList.remove('enemy');
                enemy.currentIndexX += direction;
                squares[enemy.currentIndexY][enemy.currentIndexX].classList.add(enemy.className, 'enemy');

            }
            else {
                direction = directions[Math.floor(Math.random() * directions.length)];
                choice = Math.floor(Math.random() * 2);
            }
            checkForLose();
            checkForLifeLose();
        }, enemy.speed)
    }

    let modal = document.getElementById("readyModal");

    let level = 1;
    let levelDisplay = document.getElementById('level');

    //algoritam koji provjerava 
    function checkForWin() {
        if (squares[TRONCurrentIndexY][TRONCurrentIndexX].classList.contains('win')) {
            document.removeEventListener('keyup', moveTRON);
            enemys.forEach(enemy => {
                squares[enemy.currentIndexY][enemy.currentIndexX].classList.remove(enemy.className);
                squares[enemy.currentIndexY][enemy.currentIndexX].classList.remove('enemy');

            });
            squares[TRONCurrentIndexY][TRONCurrentIndexX].classList.remove('tron');
            let audio = new Audio('audio/win.mp3');
            audio.volume = '0.3';
            audio.play();
            enemys.forEach(enemy => clearInterval(enemy.timerId));
            setTimeout(() => {
                modal.style.display = "flex";
            }, 2000);
            setTimeout(() => {
                modal.style.display = "none";
                enemys.forEach(enemy => {
                    enemy.speed -= 10;
                });
                level++;
                levelDisplay.innerHTML = level;
                tronStartIndex();
                EnemyStartIndex();
                drawPlayers();
                document.addEventListener('keyup', moveTRON);
                enemys.forEach(enemy => moveEnemy(enemy));
            }, 3 * 1000);
        }
    }

    let life = 3;
    var hearts = document.querySelector('.lifes');

    function drawHearts() {
        let i = 3;
        while (i > 0) {
            var img = document.createElement("img");
            img.src = "./img/life.png";
            hearts.appendChild(img);
            i--;
        }
    }

    function checkForLifeLose() {
        if (squares[TRONCurrentIndexY][TRONCurrentIndexX].classList.contains('enemy')) {
            life--;
            hearts.removeChild(hearts.lastChild);
            document.removeEventListener('keyup', moveTRON);
            squares[TRONCurrentIndexY][TRONCurrentIndexX].classList.remove('tron');
            enemys.forEach(enemy => clearInterval(enemy.timerId));
            let aud = new Audio('audio/endgame.wav');
            aud.volume = '0.3';
            aud.play();
            setTimeout(function () {
                document.addEventListener('keyup', moveTRON);
                tronStartIndex();
                EnemyStartIndex();
                drawPlayers();
                enemys.forEach(enemy => moveEnemy(enemy));
            }, 3000);
            checkForLose();
        }
    }

    let registrationModal = document.querySelector('.registration-modal');
    function checkForLose() {
        if (life === 0) {
            let gameOver = document.getElementById('gameOver');
            let wall = document.querySelector('.wall');
            grid.style.animation = "blinker 0.8s linear infinite";
            enemys.forEach(enemy => clearInterval(enemy.timerId));
            document.removeEventListener('keyup', moveTRON);

            currentUser.level = level;
            enemys.forEach(enemy => {
                squares[enemy.currentIndexY][enemy.currentIndexX].classList.remove(enemy.className);
                squares[enemy.currentIndexY][enemy.currentIndexX].classList.remove('enemy');

            });
            squares[TRONCurrentIndexY][TRONCurrentIndexX].classList.remove('tron');
            setTimeout(() => {
                gameOver.classList.remove('hidden');
                gameOver.classList.add('flex-class');
            }, 2000);
            setTimeout(() => {
                gameOver.classList.remove('flex-class');
                gameOver.classList.add('hidden');
                registrationModal.classList.remove('hidden');
            }, 4000);
        }

    }

    let button = document.querySelector('.start-button');
    button.addEventListener('click', start);

    let main = document.querySelector('.main-container');
    let container = document.querySelector('.container');

    function start() {
        button.removeEventListener('click', start, false);
        drawHearts();
        main.style.display = 'none';
        let gameopen = new Audio('audio/gameopen.wav');
        gameopen.volume = '0.3';
        gameopen.play();
        setTimeout(function () {
            container.style.display = 'block';
            createBoard();
            drawPlayers();
            document.addEventListener('keyup', moveTRON);
            enemys.forEach(enemy => moveEnemy(enemy));
        }, 1500);
    }



    const updateScoreboard = function () {
        const allPlayers = JSON.parse(localStorage.getItem('players'));
        let paragraph;
        const divElem = document.querySelector('.scoreboard-div');
        divElem.innerHTML = '';

        let users = document.createElement('div');
        let levels = document.createElement('div');


        allPlayers.sort((a, b) => {
            if (a.level > b.level) return -1;
            else if (a.level < b.level) return 1;
            else return 0;
        });

        allPlayers.forEach((player) => {
            let us = document.createElement('p');
            let lev = document.createElement('p');


            us.textContent = `${player.name}`;
            lev.textContent = `LEVEL  ${player.level}`;
            users.insertAdjacentElement('beforeend', us);
            levels.insertAdjacentElement('beforeend', lev);

            divElem.appendChild(users);
            divElem.appendChild(levels);
        });
    };
    currentUser = {
        name: '',
        level: 1,
    };
    const input = document.getElementById('username-input');
    const addEntry = function () {
        const allEntries = JSON.parse(localStorage.getItem('players')) || [];
        localStorage.setItem('player', JSON.stringify(currentUser));
        allEntries.push(currentUser);
        localStorage.setItem('players', JSON.stringify(allEntries));
    };


    let saveButton = document.querySelector('.save-button');
    saveButton.addEventListener('click', () => {
        input.focus();
        currentUser.name = input.value;
        addEntry();
        location.reload();
    });


    updateScoreboard();
//pravljenje score-boarda
    let scores = document.querySelector('.scores');
    const divElem = document.querySelector('.scoreboard-div');
    const btnn = document.querySelector('.buttons-container');
    const closeScoreBoard = document.querySelector('.close-scoreborard');
    scores.addEventListener('click', () => {
        divElem.classList.remove('hidden');
        divElem.classList.add('flex-class');
        closeScoreBoard.classList.remove('hidden');
        closeScoreBoard.classList.add('flex-class');
        btnn.style.opacity = "0";
    });

    let rules = document.querySelector('.rules-div');
    let exitRules = document.querySelector('.close-rules');
    let rulesButton = document.querySelector('.rules');
    rulesButton.addEventListener('click', () => {
        rules.classList.remove('hidden');
        rules.classList.add('flex-class');
        exitRules.classList.remove('hidden');
        exitRules.classList.add('flex-class');
        btnn.style.opacity = "0";
    })

//sakrivanje rules na doubleclick
    window.addEventListener('dblclick', (e) => {
        rules.classList.remove('flex-class');
        rules.classList.add('hidden');
        exitRules.classList.remove('flex-class');
        exitRules.classList.add('hidden');
        btnn.style.opacity = "1";
    });

//sakrivanje score-boarda na enter
    window.addEventListener('keyup', (e) => {
        divElem.classList.remove('flex-class');
        divElem.classList.add('hidden');
        btnn.style.opacity = "1";
        closeScoreBoard.classList.remove('flex-class');
        closeScoreBoard.classList.add('hidden');
    });


});
