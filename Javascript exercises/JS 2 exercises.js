//POSITIVE NUMBERS
var arr = [-3, -2, -1, 0, 1,2,3];
var result = [];

arr.forEach(function (numbers){
   if (numbers >= 0) {
      result.push(numbers);
  }
  });

  //EVEN
  var arr = [0, 1,2,3,4,5,6,7,8,9,10];
  var result = [];
  
  arr.forEach(function (numbers){
     if (numbers % 2 == 0) {
        result.push(numbers);
    }
    });

    //SQUARE
var arr = [0, 1,2,3,4,5,6,7,8,9,10];
var result = [];

arr.forEach(function (numbers){
      numbers = numbers * numbers;
      result.push(numbers);
  }
  );

  //CITIES
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
  
  function isLowTemp(city){
     if (city.temperature < 70)
          return city;
    }
  
  var result = cities.filter(isLowTemp);
  console.log(result);

  //CITIES 2 returns names
var cities = [
    { name: 'Los Angeles', temperature: 60.0},
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 }
  ];
  
  function names(city){
      return city.name;
    }
  
  var result = cities.map(names);
  console.log(result);

  //GOOD JOB
  var people = [
    'Dom',
    'Lyn',
    'Kirk',
    'Autumn',
    'Trista',
    'Jesslyn',
    'Kevin',
    'John',
    'Eli',
    'Juan',
    'Robert',
    'Keyur',
    'Jason',
    'Che',
    'Ben'
  ];
  
  people.forEach(function (praise, i, arr){
    console.log("Good Job!"+ arr[i]);
    });

    //3 times
    var fun =  function (){
  
      console.log("Hello World"); }
    
    function call3Times(fun) {
      fun();
      fun();
      fun();
    }
    
    call3Times(fun);
   
    //CAll n times
    var fun =  function (){
  
      console.log("Hello World"); }
    
    function callNTimes(times, fun) {
      for (var i = 0; i < times; i++){
        fun();
        }
    }
    
    callNTimes(5, fun);
    
    //multiply str

function strMultiply(str, times){
  var finalString = '';
  for (var i = 0; i< times; i++){
    finalString = finalString + str; 
  } 
return finalString;
console.log(finalString);
}

strMultiply('abc', 5);

//multiply str using Range
function range(min, max) {
  var arr = [];
  for (var i = min; i < max; i++) {
    arr.push(i);
  }
  return arr;
}


function strMultiply2(str, times){
  var counterArray = range(0, times);
    var stringArray = counterArray.map(function(num){
      return str;
      });
    }


    
    