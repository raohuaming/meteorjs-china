ArticleListController = AppController.extend({
    waitOn: function () {
        this.limit = 5;
        var page = parseInt(this.params.query.page) || 1;
        return this.subscribe('articles', this.limit, page, this.params.query.userId);
    },
    data: function () {
        var currentPage = parseInt(this.params.query.page) || 1;
        var prevPage = currentPage - 1;
        var nextPage = currentPage + 1;
        var userId = this.params.query.userId;

        var prevPageDisabled = '';
        var nextPageDisabled = '';
        var prevPageLink = _.template('/?page=<%= page %>&userId=<%= userId %>')({
            page: prevPage, userId: userId
        });
        var nextPageLink = _.template('/?page=<%= page %>&userId=<%= userId %>')({
            page: nextPage, userId: userId
        });
        var totalPages = Math.ceil(Counts.get('articles') / this.limit);

        if (nextPage > totalPages) {
            nextPageDisabled = 'disabled';
            nextPageLink = '#';
        }

        if (prevPage <= 0) {
            prevPageDisabled = 'disabled';
            prevPageLink = '#';
        }

        return {
            articles: Articles.find({}),
            prevPageDisabled: prevPageDisabled,
            nextPageDisabled: nextPageDisabled,
            prevPageLink: prevPageLink,
            nextPageLink: nextPageLink
        };

    },
    onAfterAction: function () {
        Meta.setTitle('文章列表');
    }
});

ArticleListController.events({
    'click [data-action=doSomething]': function (event, template) {
        event.preventDefault();
    }
});