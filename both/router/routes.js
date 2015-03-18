Router.route('/', {
    name: 'articleList'
});

Router.route('/newArticle', {
    name: 'newArticle'
});

Router.route('/articles/:_id', {
    name: 'showArticle'
})

Router.plugin('ensureSignedIn', {
    only: ['newArticle']
});