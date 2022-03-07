const container = document.querySelector('.container');

// Add 16 divs.
for (let i = 0; i < 256; i++)
{
    const div = document.createElement('div');
    container.appendChild(div);
}