exports.error = (req, res) => {
    // res.status(404).render('404', { title: '404 - Page not found' });
    res.status(404).end(JSON.stringify({
        msg: 'Page not found'
    }));

};