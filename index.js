const canvas = document.getElementById('canvas1');
const contexte = canvas.getContext('2d');
let rolldice = document.getElementById('rolldice1');
let holdbutton1 = document.getElementById('holdbutton');
let posGcanvas = canvas.offsetLeft;
let posHcanvas = canvas.offsetTop;
let current = 0;
let current2 = 0;
let hold = 0;
let hasard2 =0;
let hasard3 =0;
let hold2 = 0;
let hasard4 = 0;


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


rolldice.addEventListener('click', joueur1);
//---------------------------------------------------JOUEUR 2 -----------------------------------------------------

// fonction qui permet que les cliques aillent au joueur 2
function joueur2(){
    rolldice.removeEventListener('click', joueur2);
    erasescore2();
    drawscore2();
    let hasard = Math.floor(Math.random()*6 + 1);
    hasard5 = hasard;
// si je clique et que c'est 1 qui tombe alors c'est au tour du joueur 1 au prochain clique
    if (hasard5 == 1){
        current2 = 0;
        erasescore2();
        drawscore2();
        rolldice.addEventListener('click', joueur1);
        return;

    }
// sinon si c'est différent de 1 au prochain clique la fonction joueur 2 se relance 
    else if (hasard5 == 2 || hasard5 == 3 || hasard5 == 4 || hasard5 == 5 || hasard5 == 6){
        
        current2 = current2 + hasard5;
        hasard4 = current2;
        erasescore2();
        drawscore2();
        holdbutton1.addEventListener('click', transfertHold2);
        rolldice.addEventListener('click', joueur2);
        return;
         }

    else{};

    return 0;

}
//----------------------------------- JOUEUR 1 ----------------------------------------------
// fonction qui permet que les cliques aillent au joueur 1
function joueur1(){
    rolldice.removeEventListener('click', joueur1);
    erasescore();
    drawscore();
    let hasard = Math.floor(Math.random()*6 + 1);
    hasard2 = hasard;
 // si je clique et que c'est 1 qui tombe alors c'est au tour du joueur 2 au prochain clique   
    if (hasard2 == 1){
        current = 0;
        erasescore();
        drawscore();
        rolldice.addEventListener('click', joueur2);
        return;
          }
// sinon si c'est différent de 1 au prochain clique la fonction joueur 1 se relance 
    else if (hasard2 == 2 || hasard2 == 3 || hasard2 == 4 || hasard2 == 5 || hasard2 == 6){
        
        
        current = current + hasard2;
        hasard3 = current;
        erasescore();
        drawscore();
        holdbutton1.addEventListener('click', transfertHold);
        rolldice.addEventListener('click', joueur1);
         }

    else{};
};


// ---------------------------------- FONCTIONS POUR LE TRANSFERT DE HOLD -------------------------


     function transfertHold(){
        
        if(current2 == 0){
        hold = hold + hasard3;
        current = 0;
        eraseglobalscore();
        drawglobalscore();
        erasescore();
        drawscore();
        holdbutton1.removeEventListener('click', transfertHold);
        rolldice.removeEventListener('click', joueur1);
        rolldice.addEventListener('click', joueur2);
        };
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


// clique sur hold current 2 va dans son global2



function transfertHold2(){
    if(current == 0){
    hold2 = hold2 + current2;
    current2 = 0;
    eraseglobalscore2();
    drawglobalscore2();
    erasescore2();
    drawscore2();
    holdbutton1.removeEventListener('click', transfertHold2);
    rolldice.removeEventListener('click', joueur2);
    rolldice.addEventListener('click', joueur1);
    } 
}


function eraseglobalscore2(){  //fonction qui permet de cacher le score précédent dans global2
contexte.fillStyle = '#FFF';
contexte.fillRect(920, 200, 200, 200);
};

function drawglobalscore2(){ // fonction qui permet d'écrire le nouveau score de global2
     
contexte.font = '200 50px Lato';
contexte.fillStyle = '#dd5151';
contexte.fillText(hold2, 945, 250);
};


// si global sscore 1 ou global score 2 = 100 alors alert fin du jeu et tout redeviens à 0

// si hasard = 1 alors dé a un cercle, si hasard = 2 alors dé à 2 cercles ...

//si player 1 joue, cercle à coté de son nom, idem pour player 2

// New game reinitialise tout

// Si je suis au dessus d'une zone de clique la souris se transforme