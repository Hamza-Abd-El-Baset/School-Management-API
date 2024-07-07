const app = require('./app')
const config = require('./config/index.config.js');
const cron = require('node-cron');
const axios = require('axios');
const port = config.dotEnv.PORT || 3000;

// Cron job (Every 10 mins) in order to keep render server awake
cron.schedule('*/10 * * * *', async () => {
    try {
        const response = await axios.get('https://school-management-api-yc2l.onrender.com/ping'); // Replace with your server's URL
        console.log('Pinged server:', response.status);
    } catch (error) {
        console.error('Error pinging server:', error);
    }
});

// Start server
server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    config.dotEnv.MONGO_URI && require('./connect/mongo')({
        uri: config.dotEnv.MONGO_URI
    });
});


