const DEFAULT_GRID_SIZE = 16;
const WIDTH = 800;

const resetBtn = document.querySelector('.reset-btn');

createGrid();

resetBtn.addEventListener('click', resetGrid);

function createGrid(gridSize=DEFAULT_GRID_SIZE){
    const boxSize = WIDTH/gridSize;

    const container = document.createElement('div');
    container.classList.add('container');

    // create grid of divs
    for(let i = 0; i<gridSize; ++i){
        let row = document.createElement('div');
        row.classList.add('row');

        for(let j = 0; j<gridSize; ++j){
            let box = document.createElement('div');
            box.classList.add('box');
            box.setAttribute('style', `width: ${boxSize}px; height: ${boxSize}px`)
            row.appendChild(box);
        }

        container.appendChild(row);
    }

    document.body.appendChild(container);

    // add mouseover to all of the boxes
    let boxes = Array.from(document.getElementsByClassName('box'));

    boxes.forEach(box => {
        box.addEventListener('mouseover', changeColor)
    });
}

function resetGrid(){
    let newSize = prompt('Enter new gridsize (max 100):');

    if(newSize){
        if(newSize < 1 || newSize > 100){
            alert('Value must be between 1 and 100');
        } else {
            let oldGrid = document.querySelector('.container');
            console.log(oldGrid);
            oldGrid.remove();
            createGrid(newSize);
        }
    }
}


function changeColor(event){
    let rgb = [];
    for(let i = 0; i<3; ++i){
        rgb[i] = Math.ceil((Math.random()*256));
    }
    this.style.backgroundColor = `rgb(${rgb[0]} ${rgb[1]} ${rgb[2]})`;
}













