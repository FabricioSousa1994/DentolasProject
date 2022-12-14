// ℹ️ Gets access to environment variables/settings
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
const express = require("express");

// Handles the handlebars
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);
require('./config/session.config')(app);

// default value for title local
const capitalize = require("./utils/capitalize");
const projectName = "PojectModule2";

app.locals.appTitle = `${capitalize(projectName)} created with IronLauncher`;


//api 
/*const axios = require('axios');

async function getWeather(req, res) {
  try {
    // Make a GET request to the API to get the current weather for the specified city
    let city = req.params
    const response = await axios.get(`http://api.weatherapi.com/v1/current.json?key=cedf31e084d64c42b8d202504221312&q=Madeira&aqi=no`, {
    });
    console.log(response)

    // Print the current temperature in the console
    res.send(`The current temperature in ${madeira} is ${response.data.observation.temp} degrees Fahrenheit.`);
  } catch (error) {
    console.error(error);
  }
}

getWeather('cedf31e084d64c42b8d202504221312', 'madeira');*/


// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
const authRoutes = require('./routes/auth.routes');
const barRoutes = require('./routes/bar.routes');
const dentinhoRoutes = require('./routes/dentinho.routes');
const profileRoutes = require('./routes/profile.routes');


app.use("/", indexRoutes);
app.use('/', authRoutes);
app.use('/bars', barRoutes);
app.use('/', dentinhoRoutes);
app.use('/', profileRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
