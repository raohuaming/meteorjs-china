Template.newArticle.created = function () {
    //add your statement here
};

Template.newArticle.rendered = function () {
    $('#preview-area').hide();
    $('#edit').hide();
    Session.set('articleBody', '##支持Markdown');
};

Template.newArticle.helpers({
    //add you helpers here
    "editorOptions": function () {
        return {
            lineNumbers: false,
            mode: "markdown"
        };
    },
    markdownData: function () {
        return Session.get('articleBody');
    }
});

Template.newArticle.events({
    //add your events here
    'click #preview': function (event) {
        $('#edit-area').hide();
        $('#preview-area').show();
        $('#edit').show();
        $('#preview').hide();
    },
    'click #edit': function (event) {
        $('#preview-area').hide();
        $('#edit-area').show();
        $('#preview').show();
        $('#edit').hide();
    },
    'click #submit': function (event) {
        $('#submit').html('正在提交');
        $('#submit').prop("disabled", true);
        Articles.insert({
            createdBy: Meteor.userId(),
            title: $('#title').val(),
            body: Session.get('articleBody')
        }, function (err, _id) {
            if (err) {
                $('#submit').html('提交');
                $('#submit').prop("disabled", false);
                alert(err.message);
            } else {
                Router.go('showArticle', {_id: _id});
            }
        });
    }
});
