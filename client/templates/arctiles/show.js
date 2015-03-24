Template.showArticle.created = function () {
  //add your statement here
  if (!Session.get(this.data.article._id)) {
    Meteor.call('updateClick', this.data.article._id);
  }
  Session.set(this.data.article._id, true);
};

Template.showArticle.rendered = function () {
};

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
