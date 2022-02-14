// console.log("my JS assessment test")

const prompt = require('prompt-sync')({sigint: true});
const clear = require('clear-screen');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
 
//field class
class Field {
    constructor(field){
      this.field = field;
    }
    print(){
      for(let i = 0 ; i < this.field.length; i++) {
        console.log(this.field[i]);
      }
    }
    
  }
  
  //our field 
  const myField = new Field([
    ['*', '░', '░', 'O', '░', '░', '░'],
    ['░', '░', '░', '░', '░', '░', '░'],
    ['░', '░', '░', '^', '░', 'O', '░'],
    ['░', '░', '░', '░', '░', '░', '░'],
  ]);

  myField.print() //print field
  
//start of game
var gameState = '';
var i = 0, j = 0;
while (gameState !== 'loss' || gameState !== 'You found your hat!') {
    let currentPosition = myField.field[i][j];
    let move = prompt("Choose a move : ")
    //output
    if ((move == 'u' && (i == 0 || myField.field[i - 1][j] == hole || myField.field[i - 1][j] == pathCharacter))) {
        gameState = 'loss';
        break;
    } 
}
console.log(gameState); // error, cant figure out. 