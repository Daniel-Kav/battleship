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
    let isHorizontal = true;
    let randomStartIndex = Math.floor(Math.random() * width * width);
    console.log(randomStartIndex);

    let shipBlocks = []

    for (let i = 0 ; i < ship.length ; i++) {
        if (isHorizontal) {
            shipBlocks.push(allBoardBlocks[Number(randomStartIndex)+i])
            console.log(shipBlocks)
        }else {
            shipBlocks.push(allBoardBlocks[Number(randomStartIndex) = i * width])
        }
    }
}

addShipPiece(destroyer)