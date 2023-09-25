//drag player ships
const optionContainer = document.querySelector('.option-container');


const optionShips = Array.from(optionContainer.children)
optionShips.forEach(optionShip => optionShip.addEventListener('dragstart', dragstart));
export function dragstart(e){
    console.log(e.target);
 }