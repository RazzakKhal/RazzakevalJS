const canvas = document.getElementById('canvas1');
const contexte = canvas.getContext('2d');
let posGcanvas = canvas.offsetLeft;
let posHcanvas = canvas.offsetTop;
let current = 0;
let current2 = 0;
let hold = 0;
let hasard2 =0;
let hasard3 =0;


// Dessin du rectangle de chaque joueur

contexte.fillStyle = '#F6F6F6';
contexte.fillRect(0,0,625,570);
contexte.fillStyle = '#FFF';
contexte.fillRect(625,0,625,570);

// ajout des textes player 1, player 2, New game, Roll Dice, Hold

contexte.font = '30px Lato';
contexte.fillStyle = 'black';
contexte.fillText('PLAYER 1', 220, 150);
contexte.font = '150 30px Lato';
contexte.fillStyle = 'black';
contexte.fillText('PLAYER 2', 880, 150);
contexte.font = '300 15px Lato';
contexte.fillStyle = 'black';
contexte.fillText('NEW GAME', 600, 60);
contexte.font = '300 15px Lato';
contexte.fillStyle = 'black';
contexte.fillText('ROLL DICE', 600, 420);
contexte.font = '300 15px Lato';
contexte.fillStyle = 'black';
contexte.fillText('HOLD', 613, 490);

// ajout des carrés contenants les scores CURRENT ainsi que des textes Current

contexte.fillStyle = '#dd5151'
contexte.fillRect(240, 420, 100, 70);
contexte.fillStyle = '#dd5151'
contexte.fillRect(900, 420, 100, 70);
contexte.font = '300 11px Lato';
contexte.fillStyle = 'black';
contexte.fillText('CURRENT', 263, 442);
contexte.font = '300 11px Lato';
contexte.fillStyle = 'black';
contexte.fillText('CURRENT', 923, 442);


// fonction pour alert si je touche New Game

canvas.addEventListener('click', pepe);

function pepe(endroit){
    let x = endroit.pageX - posGcanvas;
    let y = endroit.pageY - posHcanvas;

    // new game est a x=600 et y=60 dans le canvas

    if (x > 600 && x < 700 && y > 50 && y < 70){
        alert('salut');
    }
};

// création des signes  de new game, roll dice, et hold

contexte.beginPath();
contexte.lineWidth = '1';
contexte.strokeStyle = '#dd5151';
contexte.arc(575, 55, 13, 0, 2*Math.PI);   // cercle de new game
contexte.stroke();

contexte.beginPath();
contexte.lineWidth = '1';
contexte.strokeStyle = '#dd5151';
contexte.moveTo(566, 55);  // trait 1 de new game
contexte.lineTo(584, 55);
contexte.moveTo(575, 46);  // trait 2 de new game
contexte.lineTo(575, 64);
contexte.moveTo(565, 415); // fleche 1 de rolldice
contexte.lineTo(561, 419);
contexte.moveTo(565, 415);
contexte.lineTo(570, 419);
contexte.moveTo(585, 415); //fleche 2 de rolldice
contexte.lineTo(580, 411);
contexte.moveTo(585, 415);
contexte.lineTo(588, 410);
contexte.moveTo(589, 475); // trait de HOLD
contexte.lineTo(589, 488);
contexte.moveTo(589, 488); // fleche 1 de HOLD
contexte.lineTo(585, 484);
contexte.moveTo(589, 488); // fleche 2 de HOLD
contexte.lineTo(593, 484);
contexte.stroke();

contexte.beginPath();
contexte.lineWidth = '1';
contexte.strokeStyle = '#dd5151';
contexte.arc(575, 415, 10, 0.1*Math.PI, Math.PI);    //demi-cercle de rolldice
contexte.stroke();

contexte.beginPath();
contexte.lineWidth = '1';
contexte.strokeStyle = '#dd5151';
contexte.arc(575, 415, 10, 1.1*Math.PI, 2*Math.PI);   //demi-cercle de rolldice
contexte.stroke();


contexte.lineWidth = '1';
contexte.strokeStyle = '#dd5151';
contexte.strokeRect(581, 479, 16, 16);  // carré de HOLD

contexte.save();    // sauvegarde du canvas avant l'ajout d'ombre

// création du dé à cliquer et de son ombre

contexte.shadowColor = '#F1F1F1';
contexte.shadowOffsetX = 10;
contexte.shadowOffsetY = 10;
contexte.shadowBlur = 20;
contexte.fillStyle = 'white';
contexte.fillRect(575, 190, 100, 100);

// création des variables du score current, des variables du 
// score Global, et de la condition qui permet que lorsque je clique
// sur le dé, un score aléatoire entre 1 et 6 apparait dans current
contexte.restore();






canvas.addEventListener('click', joueur1);

function erasescore(){   // qui permet que le score ne se superpose pas
    contexte.fillStyle = '#dd5151'
    contexte.fillRect(240, 420, 100, 70);
    contexte.font = '300 11px Lato';
    contexte.fillStyle = 'black';
    contexte.fillText('CURRENT', 263, 442);
};

function drawscore(){       // fonction qui écrit dans Current 1
    contexte.font = '25px Lato';
    contexte.fillStyle = 'white';
    contexte.fillText(current, 275, 475);
};

function erasescore2(){   // qui permet que le score ne se superpose pas
    contexte.fillStyle = '#dd5151'
    contexte.fillRect(900, 420, 100, 70);
    contexte.font = '300 11px Lato';
    contexte.fillStyle = 'black';
    contexte.fillText('CURRENT', 923, 442);
};
function drawscore2(){ // fonction qui écrit dans Current 2
    contexte.font = '25px Lato';
    contexte.fillStyle = 'black';
    contexte.fillText(current2, 935, 475);
};


// fonction qui permet que les cliques aillent au joueur 2
function joueur2(endroit4){
    canvas.addEventListener('click', joueur2);
    erasescore2();
    let x = endroit4.pageX - posGcanvas;
    let y = endroit4.pageY - posHcanvas;
    let hasard = Math.floor(Math.random()*6 + 1);
    if (x > 475 && x < 675 && y > 180 && y < 280 && hasard != 1 && current == 0){
        
        current2 = current2 + hasard;
        drawscore2();
        return current2;
        
    }
    else{
        canvas.addEventListener('click', joueur1);
        current2 = 0;
        
        
       
    }

}

function joueur1(endroit2){
    
    erasescore();
    let x = endroit2.pageX - posGcanvas;
    let y = endroit2.pageY - posHcanvas;
    

    let hasard = Math.floor(Math.random()*6 + 1);
    hasard2 = hasard;
    
    if (x > 475 && x < 675 && y > 180 && y < 280 && hasard != 1 && current2 == 0){
    current = current + hasard2;
    hasard3 = current;
    drawscore();
    }

    else{
        current = 0;
        joueur2();
    }; 
    
};

canvas.addEventListener('click', transfertHold);


     function transfertHold(endroit3){
        let x = endroit3.pageX - posGcanvas;
        let y = endroit3.pageY - posHcanvas;
        if (x > 570 && x < 660 && y > 470 && y < 500 ){
        let mucha = hasard3;
        hold = (hold + mucha);
        eraseglobalscore();
        drawglobalscore();
       }
    }

    
function eraseglobalscore(){  //fonction qui permet de cacher le score précédent dans global
    contexte.fillStyle = '#F6F6F6';
    contexte.fillRect(220, 200, 200, 200);
};

function drawglobalscore(){ // fonction qui permet d'écrire le nouveau score de global
         
    contexte.font = '200 50px Lato';
    contexte.fillStyle = '#dd5151';
    contexte.fillText(hold, 245, 250);
};



// si je clique sur HOLD le score de current va dans le global









//si global égal 100 le jeu est fini