const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8000;

require("../server/config/mongoose.config");

//MIDDLEWARE
app.use(cors(), express.json(), express.urlencoded({extended:true}));

// database connection
const AllMyProductRoutes = require("../server/routes/product.routes");
AllMyProductRoutes(app);

app.listen(PORT, ()=> {
    console.log(`🎈🎈 Server up on port: ${PORT} 🎈🎈`)
})
