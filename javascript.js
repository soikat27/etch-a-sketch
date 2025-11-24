// global variables
const grid      = document.querySelector(".grid")
const resizeBtn = document.querySelector(".resize");
const clearBtn  = document.querySelector(".clear");

const MAX_SIZE     = 100;
const DEFAULT_SIZE = 16;

// initial board
function init ()
{
    // create the default-size grid
    createGrid(DEFAULT_SIZE);

    // add event listeners to btns
    resizeBtn.addEventListener("click", resizeGrid);
    clearBtn.addEventListener("click", clearGrid);
}

// create grid of a specific size
function createGrid (size)
{
    // remove current Grid
    removeGrid();

    let totalSquares = size*size;
    let height = parseFloat(getComputedStyle(grid).height)/size;
    let width  = parseFloat(getComputedStyle(grid).width)/size;

    for (let i = 1; i <= totalSquares; i++)
    {
        // create the sq
        const square = document.createElement("div");
        square.classList.add("square");

        // define shape
        square.style.cssText = `
        height: ${height}px; 
        width: ${width}px; 
        border: 1px solid black;`;

        // add event listener
        square.addEventListener("mouseenter", colorSquare);
        grid.appendChild(square);
    }
}

// remove the current grid
function removeGrid ()
{
    while (grid.firstElementChild)
    {
        grid.firstElementChild.remove();
    }
}

// change square color on mouse hover
function colorSquare (e)
{
    e.target.classList.add("filled");
}

function resizeGrid ()
{
    let size = parseInt(prompt("Enter grid size(1-100): "));

    if (isNaN(size))
    {
        alert("Not a valid number!");
    }

    else if (size<1 || size>100)
    {
        alert("The number's too long!");
    }

    else
    {
        removeGrid();
        createGrid(size);
    }
}

function clearGrid ()
{
    let squares = Array.from(document.querySelectorAll(".square"));

    squares.forEach(square => {
        square.classList.remove("filled");
    });
}

// start the app
init();