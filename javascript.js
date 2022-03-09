const container = document.querySelector('.container');
const button = document.createElement('button');
let size;

button.classList.add('clear-button');
button.innerText = 'CLEAR';
document.body.appendChild(button);

var mouseDown = false;
document.body.onmousedown = function()
{
    mouseDown = true;
};

document.body.onmouseup = function()
{
    mouseDown = false;
};

button.addEventListener('click', function()
{
    container.innerHTML = '';
    size = prompt('What size do you want your grid to be: ');
    checkSize(size);
});
// Create the canvas and set it's size.
function canvas(size)
{
    container.style.setProperty('--grid-column', size);
    container.style.setProperty('--grid-row', size);

    // Create the grid.
    for (let i = 0; i < size * size; i++)
    {
        const cell = document.createElement('div');
        cell.addEventListener('mouseover', changeColor);
        cell.addEventListener('mousedown', changeColor);
        container.appendChild(cell).className = 'grid-items';
    }
}
canvas(16);

// Change cell color.
function changeColor(e)
{
    if (mouseDown)
    {
        //let color1 = Math.floor(Math.random() * 256);
        //let color2 = Math.floor(Math.random() * 256);
        //let color3 = Math.floor(Math.random() * 256);

        let color1 = 0;
        let color2 = 0;
        let color3 = 0;

        e.target.style.backgroundColor = `rgb(${color1},${color2},${color3})`;
    }
}

//Check to make sure that size entered is not greater than 100.
function checkSize(e)
{
    if (e < 16 || e > 100)
    {
        alert("Size can only be between 16 and 100.");
        canvas(16);
    }
    else
    {
        canvas(e);
    }
}