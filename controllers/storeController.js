exports.myMiddleware = (req, res, next) => {
    req.name = 'Boško';
    if(req.name === 'Boško') {
        throw Error('Thats stupid name');
    }
    next();
}

exports.homePage = (req, res) => {
    console.log(req.name);
    res.render('index')
}