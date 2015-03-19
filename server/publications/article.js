Meteor.publishComposite("articles", function (limit, page, userId) {
    var criteria = {};
    if (_.isEmpty(userId) === false) {
        var criteria = {createdBy: userId};
    }
    Counts.publish(this, 'articles', Articles.find(criteria), {noReady: true, nonReactive: true});
    return {
        find: function () {
            page = parseInt(page) || 1;
            limit = parseInt(limit) || 5;
            if (page <= 0) {
                page = 1;
            } else if (page * limit >= Articles.find(criteria).count) {
                page = Math.ceil(Articles.find(criteria).count / limit);
            }
            return Articles.find(criteria, {sort: {createdAt: -1}, limit: limit, skip: (page - 1) * limit});
        }
        // ,
        // children: [
        //   {
        //     find: function(item) {
        //       return [];
        //     }
        //   }
        // ]
    }
});

Meteor.publish('article', function (_id) {
    return Articles.find({_id: _id});
});