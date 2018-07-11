function hello(name){
  console.log("Hello," + name + "!");
  }
  
hello('Mustache');

function madlib(name, subject){
  return( name + "'s new favorite subject in school is " + subject );  
  }
  
madlib('Anushka', 'art')

function tipAmount(amount, serviceLevel){
  var total = 0;
  if (serviceLevel == "good" || serviceLevel == 'good'){
     total = (amount * .20) ;
    }
  else if (serviceLevel == "fair" || serviceLevel == 'fair'){
    total = (amount * .15) ;
    }
  else if (serviceLevel == "bad" || serviceLevel == 'bad'){
    total = (amount * .10) ;
    }
    return total;
  }
 tipAmount(100, 'good');
 tipAmount(40, 'fair');

 function tipAmount(amount, serviceLevel){
  var total = 0;
  if (serviceLevel == "good" || serviceLevel == 'good'){
     total = (amount * .20) + amount ;
    }
  else if (serviceLevel == "fair" || serviceLevel == 'fair'){
    total = (amount * .15) + amount ;
    }
  else if (serviceLevel == "bad" || serviceLevel == 'bad'){
    total = (amount * .10) + amount;
    }
    return total;
  }
 tipAmount(100, 'good');
 tipAmount(40, 'fair');

 function tipAmount(amount, serviceLevel, splitAmount){
  var total = 0;
  if (serviceLevel == "good" || serviceLevel == 'good'){
     total = ((amount * .20) + amount) / splitAmount ;
    }
  else if (serviceLevel == "fair" || serviceLevel == 'fair'){
    total = ((amount * .15) + amount) / splitAmount;
    }
  else if (serviceLevel == "bad" || serviceLevel == 'bad'){
    total = ((amount * .10) + amount) / splitAmount;
    }
    return total;
  }
 tipAmount(100, 'good', 5);
 tipAmount(40, 'fair', 2);

 //JS Exercises 2
 function printNumbers(start, end){
  var numbers = [];
  for (var i = start; i < end; i++){
      numbers.push(i);
      
   }
   return console.log(numbers);
  }
  
printNumbers(2,20);

//unfinished square
function printSquare(size){
  var square = '*';
  var lines = 0;
  while (lines < size){
      console.log(square * lines);
      lines++;
      }
    
    }
  
printSquare(5);

function printSquare(size){
  var square = '*';
  var lines = 0;
  while (lines < size){
      for (lines = 0; lines < size; lines++){
        console.log(square);
        }
        
      }
    
    }
  
printSquare(5);

function createSolidRow(width){
var row = '';

for (var i = 0; i< width; i++){
  row = row + '*';
}
return row;
}

function createLineBreak(){
  return '/n';
}

function createHollowRow(width){
  var row = '';

  for (var i = 0; i< width; i++){
     if (i==0){
      row = row + '*';
     } else if (i== (width - 1 )){
       row = row + '*'
     } else {
       row = row + '';
     }
     
  }
  return row;
  
}  


//PRINT BOX
function printBox(height, width){
var boxString = '';

boxString = boxString + createSolidRow(width);
boxString = boxString + createLineBreak();

for (var i = 0; i < (height -2); i++){
  boxString = boxString + createHollowRow(width);
  boxString = boxString + creeateLineBreak();
}

boxString = boxString + createSolidRow(width);
console.log(boxString);
//return boxString;
}

function rotate(character, offset){
 var newCharacter = '';
 var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
 var seatNumber = alphabet.indexOf(character);

if (seatNumber == -1 ){
  newCharacter = character;
} else {
  seatNumber  = seatNumber + offset;
  if (seatNumber > 25){
    seatNumber = seatNumber - 26;
  } 
 
 newCharacter = alphabet[seatNumber];

 return newCharacter;
}


function cipher(originalString, offset){
var encodedString = ''

for (var i = 0; i < originalString.length; i++){
  var currentLetter = originalString[i];
  encodedString = encodedString + rotate(currentLetter, offset);
}
  return encodedString;
}

}


//LEET speak
function leetspeak(text){
  var conversion= { A : '4', 
                    E : '3', 
                    G : '6', 
                    L : '1', 
                    O : '0', 
                    S : '5', 
                    T : '7'};
    var keys = ['A', 'E', 'G', 'L', 'O', 'S', 'T'];
    for (var i= 0; i < text.length; i++){
        var splitText = text.split('');
        console.log(splitText);
        if (splitText[i] == keys[i])
         console.log(splitText[i]);
        var message = conversion[splitText[i]]; 
         console.log(message);
       }
       return message;
  }
       
  leetspeak('LEET')


 