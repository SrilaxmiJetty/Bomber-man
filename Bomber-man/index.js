const bombs=[];
let gamePoints=0;
let canPlay=true;
function updateGamepoints(){
    const gamepointElement = document.getElementById('gamePoints');
    gamepointElement.innerHTML="Game Points:" + gamePoints;
}

function addGrid(){
    const appElement=document.getElementById('app');

    for (let i=0;i<9;i++){
        const row=document.createElement('div');
        row.style.display='flex';
        row.style.alignSelf='center';
        for(let j=0;j<9;j++){
            const index=i*9+j;
            const column=document.createElement('div');
            column.style.display='inline-block';
            column.style.height='60px';
            column.style.width='60px';
            column.style.border= '1px solid black';
            column.style.textAlign='center';
            column.style.verticalAlign='middle';
            column.setAttribute('index', index);

            column.addEventListener('click', function(){
                if(canPlay){
                if(bombs.includes(index)){
                    // column.innerHTML='!!!';
                    column.style.background='red';
                    // alert('Bomb Clicked');
                    canPlay=false;
                }
                else{
                    column.style.background='green';
                    gamePoints++;
                    updateGamepoints();
                }
            }
            })

            row.appendChild(column);
        }
        appElement.appendChild(row);
    }
}

function generateBombs(){
    while(bombs.length<11){
        // while(bombs.length !==10){
        const randomNumber=Math.floor(Math.random()*100);
        if(randomNumber<81 && !bombs.includes(randomNumber)){
            bombs.push(randomNumber);
    }
}
}
addGrid();
generateBombs();
// console.log(bombs);
// show all the bombs once a bomb is clicked.   
// Give a button to start the game again.
// Every column should be only clickable once.
// If all normal cells are clicked and none is left then show alert that hyou won.
// if a bomb is clicked then show alert that you lost.