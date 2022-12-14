const isLoggedIn = (req, res, next) => {
    if (!req.session.currentUser) {
       return res.redirect('auth/login')
    }
    next() 
};

const isAdmin = (req, res, next) => {
    if (!req.session.currentUser.role === 'admin') {
        return res.redirect('auth/login')   // insert error page
    }
    next() 
};

const isUser = (req, response, next) => {
    if (!req.sesion.currentUser.role === 'user') {
        return res.redirect('auth/login') // insert error page
    }
    next()
}

const isLoggedOut = (req, res, next) => {
    if(req.session.currentUser) {
       return res.redirect('/')
    }
    next()
};    

module.exports = {isLoggedIn, isLoggedOut, isAdmin, isUser}
