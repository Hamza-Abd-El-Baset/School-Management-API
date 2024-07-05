const app = require('./app')
const config = require('./config/index.config.js');

const port = config.dotEnv.PORT || 3000;



// Start server
server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    config.dotEnv.MONGO_URI && require('./connect/mongo')({
        uri: config.dotEnv.MONGO_URI
    });
});


