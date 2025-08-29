import express from 'express'; 
import fetch from 'node-fetch'; 
import { sendEmail } from './Email.js'; 
const app = express();
const baseurl='https://coin-dcx.onrender.com/';//https://requester-twha.onrender.com
const url2= 'https://chat-websocker.onrender.com/'
const port= process.env.PORT || 6000;
app.get('/', function(req, res) {
    res.status(200).send({status: 200});
});

setInterval(keepServerAlive, 5*60*1000); //Make request in every 5 minutes
// keepServerAlive();

  function keepServerAlive() {
//render will stop the server if no request is received in 15 min.
try {
     fetch( baseurl )
     .then(response => {
         if (response.ok) {
           console.log(`URL ${baseurl} is reachable. Status Code: ${response.status}`);
         } else {
           console.error(`URL ${baseurl} returned an error. Status Code: ${response.status}`);
           sendEmail(`${baseurl} have some Error. Status Code: ${response.status}`);
        }
       })
       .catch(error => {
         console.error(`Error while checking URL ${baseurl}: ${error.message}`);
       });

    fetch(url2)
    fetch("https://trading-bot-av31.onrender.com/")
    .then(response => {
         if (response.ok) {
           console.log(`URL ${baseurl} is reachable. Status Code: ${response.status}`);
         } else {
           console.error(`URL  https://trading-bot-av31.onrender.com/ returned an error. Status Code: ${response.status}`);
           // sendEmail(`https://trading-bot-av31.onrender.com/ have some Error. Status Code: ${response.status}`);
        }
       })
       .catch(error => {
         console.error(`Error while checking URL ${baseurl}: ${error.message}`);
       });
    
}catch(error) {console.error(error);}
}

app.listen(port);
