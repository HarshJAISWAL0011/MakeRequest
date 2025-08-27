import fetch from 'node-fetch'; 


export async function sendEmail (message){
// const data = {
//     service_id: 'Coindcx alert', 
//     template_id: 'template_rpcqp5h',
//     user_id: 'C1wF5QXy4IUHVBrql',
//     template_params: {
//         to_name: 'Harsh',
//         message: message
        
//     },
//     accessToken:'O342h4LQQ7DlYj1EaBP8K'
// };
// second account

let service_id = 'service_7he2dof'
let template_id =  'template_9irwoio'
let user_id = '5g-mymygD04J2rc1o'
let accessToken = 'sr8Y2E8P-N12Wl-Kn6x-k'
    
const data = {
   service_id , 
    template_id,
    user_id ,
    template_params: {
        to_name: 'Harsh',
        message: message
        
    },
    accessToken
};

fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log('Email Response status:', response.status);
})

.catch(error => {
    console.error('Fetch error:', error);
});
}
