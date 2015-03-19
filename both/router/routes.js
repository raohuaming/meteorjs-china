Router.route('/', {
    name: 'articleList'
});

Router.route('/newArticle', {
    name: 'newArticle',
    template: 'editArticle'
});

Router.route('/article/:_id', {
    name: 'showArticle'
});

Router.route('/article/:_id/edit', {
    name: 'editArticle'
});

Router.plugin('ensureSignedIn', {
    except: ['articleList']
});