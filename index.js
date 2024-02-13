const app = require('./app')
const port = process.env.PORT || 3000;
const {connectDB} = require('./config/database');


// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
    connectDB()
});
