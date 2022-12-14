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


// 👇 Start handling routes here
const indexRoutes = require("./routes/index.routes");
const authRoutes = require('./routes/auth.routes');
const barRoutes = require('./routes/bar.routes');
const dentinhoRoutes = require('./routes/dentinho.routes');
const profileRoutes = require('./routes/profile.routes');


function checkIfLoggedIn(req,res,next) {
	let user = req.session.currentUser || undefined;
	if ( user ) {
		res.locals.loggedIn = true;
		res.locals.isAdmin = user.role === "admin";
		next();
	} else {
        res.locals.loggedIn = false;
        next();
        return;
    }
};

app.use(checkIfLoggedIn);

app.use("/", indexRoutes);
app.use('/', authRoutes);
app.use('/bars', barRoutes);
app.use('/', dentinhoRoutes);
app.use('/', profileRoutes);


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
