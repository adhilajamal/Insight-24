// Cron job to hit endpoint every 14 sec to keep backend alive always

import cron from "cron";
import https from "https";

const backendUrl = 'https://insight-backend.onrender.com' ;
const job = new cron.CronJob('*/14 * * * *', function () {
    
    console.log(`Restarting server`);

    
    https.get(backendUrl, (res) => {
        if (res.statusCode === 200) {
            console.log("Server restarted");
        } else {
            console.error(
                `failed to restarted server with status code: ${res.statusCode}`
            );
        }
    })
    .on('error', (err) => {
        console.error('Error during Restart: ', err.message);
    });
});



export default job;
