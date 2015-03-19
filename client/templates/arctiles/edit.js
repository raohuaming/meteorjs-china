Template.editArticle.created = function () {
    //add your statement here
    this.articleEmpty = new ReactiveVar(true);
};

Template.editArticle.rendered = function () {
    var template = this;

    $('#preview-area').hide();
    $('#edit').hide();

    Session.set('articleBody', this.data.article.body);

    template.articleEmpty.set(_.isEmpty($('#articleTitle').val()));
    $('#articleTitle').change(function () {
        template.articleEmpty.set(_.isEmpty($('#articleTitle').val()));
    });
};

Template.editArticle.helpers({
    //add you helpers here
    "editorOptions": function () {
        return {
            lineNumbers: false,
            mode: "markdown",
            lineWrapping: true,
            autofocus: true
        };
    },
    markdownData: function () {
        return Session.get('articleBody');
    },
    readyToSubmit: function () {
        if (Template.instance().articleEmpty.get()) {
            return 'disabled';
        } else {
            return '';
        }
    }
});

Template.editArticle.events({
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
    'click #submit': function (event, template) {
        $('#submit').html('正在提交');
        $('#submit').prop("disabled", true);

        if (template.data.article._id) {
            Articles.update(template.data.article._id, {
                $set: {
                    title: $('#articleTitle').val(),
                    body: Session.get('articleBody')
                }
            }, function (err, count) {
                if (err) {
                    $('#submit').html('保存');
                    $('#submit').prop("disabled", false);
                    alert(err.message);
                } else {
                    Router.go('showArticle', {_id: template.data.article._id});
                }
            });
        } else {
            Articles.insert({
                title: $('#articleTitle').val(),
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
    }
});
