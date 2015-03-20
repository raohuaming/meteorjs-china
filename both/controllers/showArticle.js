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
        if (this.ready()) {
            Meta.setTitle(this.article.title);
        }
    }
});

EditArticleController = ShowArticleController.extend({
    onBeforeAction: function () {
        if (this.article.createdBy !== Meteor.userId()) {
            Router.go('showArticle', this.article);
        } else {
            this.next();
        }
    }
});