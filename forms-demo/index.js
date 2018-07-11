 /*var theForm = document.querySelector('[data-form]');

theForm.addEventListener('submit', function(event){
   event.preventDefault();
   console.log('it works');
});
*/

/*jquery */ 
const LS_KEY = 'key';
var $theForm = $('[data-form]');
var $usernameField = $('[data-username]');
var $commentField = $('[data-comment]');
//var localData = [];

$theForm.on('submit', function(event) {
event.preventDefault();
console.log('it works');

console.log(`The username is: ${$usernameField.val()}`);
console.log(`The comment is: ${$commentField.val()}`);
/*
var formData = $(this).serializeArray();
localData = formData;

$(formData).each(function(i, field){
    localStorage.setItem(LS_KEY, JSON.stringify(formData));
    var parseData = JSON.parse(localStorage.getItem(LS_KEY));
});
 */
});


$usernameField.on(`input`, function (event) {
    console.log($usernameField.val());
 
var theUsername = $usernameField.val();
var currentData = loadData();

if (!currentData) {
   currentData = {};
}

currentData['name'] = theUsername;  

console.log(currentData);

saveData(currentData);
});

$commentField.on(`input`, function(event){
     var theComment = $commentField.val();
     var currentData = loadData();

     if (!currentData){
       currentData = {};
     }
    currentData['comment'] = theComment;
    saveData(currentData);
});

var dummyData = {
    name: 'Sebastian',
    food: 'cheesesticks',
    smoking: 'nonsmoking',
    hascats: 'nocats'
  };

  
function saveData(data){
   
   //step 1 convert the data to a string
   var dataAsString = JSON.stringify(data);

   //step 2 save string to localStorage
   //can be replaced with const
   localStorage.setItem(LS_KEY, dataAsString);
   //localStorage.setItem('key', dataAsString);
   
} 



function loadData(){
   var dataAsString = localStorage.getItem(LS_KEY);
   //var dataAsString = localStorage.getItem('key');
   var theData = JSON.parse(dataAsString);
   
   return theData;
}



function fillForm(){
    var data =  loadData();

    if(data){
        console.log('yes its working');
        console.log(data);
        $usernameField.val(data.name);
        $commentField.val(data.comment);
    } else{
        console.log('not working');
    }
}

fillForm();