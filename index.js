const rp = require('request-promise'); 
const cheerio = require('cheerio');
const translate = require('google-translate-api');

const URL = `http://news.ycombinator.com/`;

const options = {
    uri: URL,
    transform : (body) => {
        //cheerio parses html strings into functions (jQuery for Node js)
        if (body){
        return cheerio.load(body);
        }
    }
};    


rp (options)
   .then(($) =>  {
    //will look like JQuery    
    //console.log($);
     $('.storylink').each( (i, element) => {
         console.log( $(element).text() ); 
         translate($(element).text(), {from: 'en' , to: 'es'}).then(response => {
            // automatic language detection to english
            //  console.log(response.from.language.iso);

            //to autocorrect mispellings/jibberish
         //   console.log(response.from.text.autoCorrected);
         
          //boolean if text is understood
         //   console.log(response.from.text.didYouMean);

         //boolean if guess was understood
          //  console.log(response.from.text.value);
           console.log(response.text);
      });
     });
   })
   .catch((err) => {
       console.log(err);
   });
  