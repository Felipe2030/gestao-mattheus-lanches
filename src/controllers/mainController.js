
exports.products = (req, res) => {
    res.render('products', { is_active_navbar: 'products' })
}

exports.buy = (req, res) => {
    res.render('buy', { is_active_navbar: 'buy' })
}

exports.sell = (req, res) => {
    res.render('sell', { is_active_navbar: 'sell' })
}

exports.reports = (req, res) => {
    res.render('reports', { is_active_navbar: 'reports' })
}

exports.login = (req, res) => {
    res.render('login', { titulo: 'Login' })
}