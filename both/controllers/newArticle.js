NewArticleController = AppController.extend({
    onAfterAction: function () {
        Meta.setTitle('投稿');
    }
});