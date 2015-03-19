Template._header.helpers({
    projectTitle: function () {
        return Meteor.settings.public.meta.title
    },
    myArticleLink: function () {
        return _.template('/?userId=<%= userId %>')({
            userId: Meteor.userId()
        });
    }
});