const GRID_SIZE = 16;
const WIDTH = 800;
const boxSize = WIDTH/GRID_SIZE;

const container = document.querySelector('.container')

createGrid();

function createGrid(){

    // create grid of divs
    for(let i = 0; i<16; ++i){
        let row = document.createElement('div');
        row.classList.add('row');

        for(let j = 0; j<16; ++j){
            let box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px`)
            row.appendChild(box);
        }

        container.appendChild(row);
    }

    // add mouseover to all of the boxes
    let boxes = Array.from(document.getElementsByClassName('box'));

    boxes.forEach(box => {
        box.addEventListener('mouseover', changeColor)
    });
}

function changeColor(event){
    console.log("worked");
    this.style.backgroundColor = 'black';
    this.removeEventListener('mouseover', changeColor);
}
