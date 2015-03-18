Meteor.publishComposite("articles", function (limit, page) {
    Counts.publish(this, 'articles', Articles.find(), {noReady: true, nonReactive: true});
    return {
        find: function () {
            page = parseInt(page) || 1;
            limit = parseInt(limit) || 5;
            if (page <= 0) {
                page = 1;
            } else if (page * limit >= Articles.find().count) {
                page = Math.ceil(Articles.find().count / limit);
            }
            return Articles.find({}, {sort: {createdAt: -1}, limit: limit, skip: (page - 1) * limit});
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