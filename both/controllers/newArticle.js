NewArticleController = AppController.extend({
    data: function () {
        return {
            article: {
                body: "##支持Markdown"
            }
        };
    },
    onAfterAction: function () {
        Meta.setTitle('投稿');
    }
});