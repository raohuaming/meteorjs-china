Meteor.methods({
    'Articles.insert': function (params) {
        Articles.insert(params);
    }, 
    'updateClick': function(articleID) {
      Articles.update(articleID, {$inc: {clickCount: 1}});
    }
});
