var jwt = require('js-tokens');
var APP_SECRET = 'myappsecret';
var USERNAME = 'admin';
var PASSWORD = 'sercet';
module.exports = function (req, res, next) {
    if (req.url == '/login' && req.method == 'POST') {
        if (req.body != null && req.body.name === USERNAME
            && req.body.password == PASSWORD) {
            var token = jwt.sign({ data: USERNAME, expiresIn: '1h' }, APP_SECRET);
            res.json({ success: true, token: token });
        }
        else {
            res.json({ success: false });
        }
        res.end();
        return;
    }
    else if ((req.url.startsWith('/products') && req.method != 'GET')
        || (req.url.startsWith('/order') && req.method != 'POST')) {
        var token = req.headers['authorization'];
        if (token != null && token.startsWith('Bearer<')) {
            token = req.substring(7, token.length - 1);
            try {
                jwt.verify(token, APP_SECRET);
                next();
                return;
            }
            catch (err) {
            }
        }
        res.statusCode = 401;
        res.end();
        return;
    }
    next();
};
//# sourceMappingURL=authMiddleware.js.map