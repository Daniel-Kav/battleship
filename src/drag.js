//drag player ships
const optionContainer = document.querySelector('.option-container');
let draggedShip;
const ships = [destroyer, submarine, cruiser, battleship, carrier]


const optionShips = Array.from(optionContainer.children)
optionShips.forEach(optionShip => optionShip.addEventListener('dragstart', dragstart));
const allPlayerBlocks =  document.querySelectorAll('#player div');

allPlayerBlocks.forEach(playerBlock => {
    playerBlock.addEventListener('dragover', dragover);
    playerBlock.addEventListener('drop', dropShip);
});

function dragstart(e){
    draggedShip = e.target;
}

function dragover(e){
    e.preventDefault();
}
function dropShip(){
    const startId = e.target.id;
    const ship = ships[draggedShip.id];
    addShipPiece(ship) 
}