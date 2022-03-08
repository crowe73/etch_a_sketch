const container = document.querySelector('.grid-container');

// Add 16 divs.
for (let i = 0; i < 256; i++)
{
    const cell = document.createElement('div');
    cell.addEventListener('mouseover', changeColor);
    cell.addEventListener('mousedown', changeColor);
    container.appendChild(cell).className = 'grid-items';
}

var mouseDown = false;

document.body.onmousedown = function()
{
    mouseDown = true;
};

document.body.onmouseup = function()
{
    mouseDown = false;
};

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