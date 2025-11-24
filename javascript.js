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
    if (!e.target.style.backgroundColor)
    {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);

        e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        e.target.style.opacity = "0.1";
    }

    else
    {
        let curOpacity = parseFloat(getComputedStyle(e.target).opacity);
        let newOpacity = curOpacity + 0.1;
        if (newOpacity > 1) newOpacity = 1;
        
        e.target.style.opacity = `${newOpacity}`;
    }  
}

// resize the grid
function resizeGrid ()
{
    let size = parseInt(prompt("Enter grid size(1-100): "));

    if (isNaN(size))
    {
        alert("Not a valid number!");
    }

    else if (size<1 || size>100)
    {
        alert("The size's out of bound!");
    }

    else
    {
        removeGrid();
        createGrid(size);
    }
}

// clear grid (color)
function clearGrid ()
{
    let squares = Array.from(document.querySelectorAll(".square"));

    squares.forEach(square => {
        square.style.backgroundColor = "";
    });
}

// start the app
init();