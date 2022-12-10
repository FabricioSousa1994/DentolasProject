const isLoggedIn = (req, res, next) => {
    if (!req.session.currentUser) {
       return res.redirect('auth/login')
    }
    next() 
};

const isBarOwner = (req, res, next) => {
    if (!req.session.currentUser.role === 'barOwner') {
        return res.redirect('auth/login')   // insert error page
    }
    next() 
};

const isClient = (req, response, next) => {
    if (!req.sesion.currentUser.role === 'client') {
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

module.exports = {isLoggedIn, isLoggedOut, isBarOwner, isClient}
