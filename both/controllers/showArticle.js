ShowArticleController = AppController.extend({
    waitOn: function () {
        return this.subscribe('article', this.params._id);
    },
    data: function () {
        this.article = Articles.findOne(this.params._id);
        return {
            article: this.article
        };
    },
    onAfterAction: function () {
        Meta.setTitle(this.article.title);
    }
});