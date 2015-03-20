Template.newCommentsBox.inheritsHelpersFrom('commentsBox');
Template.myCommentsSingleComment.inheritsHelpersFrom('commentsSingleComment');

Template.myCommentsTextarea.inheritsHelpersFrom('commentsTextarea');

Template.myCommentsTextarea.events({
    'click .cancel-reply': function (event, template) {
        Comments.session.set('replyTo', null);
    }
});