let bldgs = document.querySelector('.buildings');

for (let i=0; i<5; i++) {
    let bldg = document.createElement('div');
    bldg.classList.add('building');
    let height = (Math.floor(Math.random()*9)+1 )  * 25;
    bldg.style.height = height+'px';
    bldgs.appendChild(bldg);
}