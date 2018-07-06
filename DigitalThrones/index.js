var URL = 'https://anapioficeandfire.com/api/' ;  
var URLcharacters = '';
var URLhouses = '';
var characterNames = '';
var houseNames = '';
function appendElement(){

   var $element = $(`<p>`, {
    text : `${characterNames} lives in ${houseNames}` 
    });
    $(document.body).append($element);
}


function displayError(err) {
  console.log('oh no!!! it didn\'t work');
  console.log(err);
}

function main(URL){

  var request = $.get(URL);
  
  request
     .then(pullAPIdata)
     .then(makeAcharacterRequest)
     .catch(displayError)
     .then(makeAhouseRequest)
     .catch(displayError)
     .then(appendElement)
     .catch(displayError)
}


function pullAPIdata(){
$.get(URL, function(data) {
  var apisArray = [];
  var keys = Object.keys(data);
  //console.log(keys); 
  
  keys.forEach(function(aKey){
    var aLibrary = data[aKey];

    apisArray.push(aLibrary);
    
   // for (var i = 1; i < 3; i++){
        URLcharacters = apisArray[1];
        URLhouses     = apisArray[2];
      //  console.log(URLcharacters); 
      //  console.log(URLhouses);
  });
 });
} 
  function makeAcharacterRequest(){
    var characterRequest = $.get(URLcharacters, function(data){
   //    console.log(characterRequest);
      var libraryArray = [];
      var libraries = Object.keys(data);
      
      libraries.forEach(function(aElement){
         var dataLibrary = data[aElement];
         libraryArray.push(dataLibrary);
         // console.log(libraryArray);
        
        libraryArray.forEach(function (event){
             if (event.name != null){
            characterNames = event.name;
           //console.log(characterNames);
          }
          });
     });
  });
}

  function makeAhouseRequest(){
  var housesRequest = $.get(URLhouses, function(data){
       
    var libraryArray = [];
    var libraries = Object.keys(data);

    libraries.forEach(function(aElement){
       var dataLibrary = data[aElement];
       libraryArray.push(dataLibrary);
       // console.log(libraryArray);
      
      libraryArray.forEach(function (event){
        if (event.name != null){

           houseNames = event.name;
       //  console.log(houseNames);
        }
      });
   });
});

}
main(URL);