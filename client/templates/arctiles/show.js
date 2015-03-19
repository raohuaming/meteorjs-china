Template.showArticle.created = function () {
    //add your statement here 
};

Template.showArticle.rendered = function () {

}

Template.showArticle.helpers({
    //add you helpers here
});

Template.showArticle.events({
    //add your events here
    'click #delete-button': function (event, template) {
        Articles.remove(template.data.article._id, function (err) {
            if (err) {
                alert(err);
            } else {
                Router.go('articleList');
            }
        });
    }
});
