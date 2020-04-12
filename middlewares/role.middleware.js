module.exports = function roleCheck(role) {
    return function (req, res, next) {
        if (req.user.role > role) {
            res.sendStatus(401);
        } else {
            next();
        }
    }
}