export class Ship{
    constructor(name, length) {
        this.name = name;
        this.length = length;
    }
}

const destroyer = new Ship('destroyer', 2);
const submarine = new Ship('submarine', 3);
const cruiser = new Ship('cruiser',3)
const battleship = new Ship('battleship',4);
const carrier = new Ship('carrier',5);

const ships = [destroyer, submarine, cruiser, carrier,battleship];
let width = 10;
function addShipPiece(ship) {
    const allBoardBlocks = document.querySelectorAll('#computer div')
    let randomBoolean = Math.random() < 0.5 ;
    let isHorizontal = randomBoolean;
    let randomStartIndex = Math.floor(Math.random() * width * width);
    console.log(randomStartIndex);
    let validStart = isHorizontal ? randomStartIndex <= width * width - ship.length ? randomStartIndex : width * width - ship.length:
    //handle vertical
    randomStartIndex <= width * width - width * ship.length ? randomStartIndex : 
    randomStartIndex - ship.length * width + width ;

    let shipBlocks = []

    for (let i = 0 ; i < ship.length ; i++) {
        if (isHorizontal) {
            shipBlocks.push(allBoardBlocks[Number(validStart)+i])
            
        }else {
            shipBlocks.push(allBoardBlocks[Number(validStart) + i * width])
        }
    }

    shipBlocks.forEach(shipBlock => {
        shipBlock.classList.add(ship.name);
        shipBlock.classList.add('taken');
    })
}

ships.forEach(ship => addShipPiece(ship));