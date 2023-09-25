
const gamesBoardContainer = document.querySelector('#gameboard-container')
const width = 10;

export function createBoard(color,user) {
    const gameBoardContainer = document.createElement('div');
    gameBoardContainer.classList.add('game-board');
    gameBoardContainer.style.backgroundColor = color;
    gameBoardContainer.id = user;
    
    for (let i = 0; i < width * width; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.id = i;
        gameBoardContainer.append(block);
    }

    gamesBoardContainer.appendChild(gameBoardContainer);
}
createBoard('green', 'player');
createBoard('yellow', 'computer'); 
