const session = require('express-session');
const mongoStore = require('connect-mongo');
const mongoose = require('mongoose');

module.exports = (app) => {
    //config needed when the app is deployed
    app.set("trust proxy", 1)

    app.use(session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: false,
        cookie: {
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax',
            secure: process.env.NODE_ENV === 'production',
            maxAge: 6000000
        },
        rolling: true,
        store: mongoStore.create({
            mongoUrl: process.env.MONGODB_URI || 'mongodb+srv://Antonio:Tm8MKjDoNBsnZAvY@cluster0.y5eekmw.mongodb.net/dentolas-project?retryWrites=true&w=majority'
        })
    })
    
    );
};