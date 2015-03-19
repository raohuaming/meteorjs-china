Articles.allow({
    'insert': function (userId, doc) {
        return userId;
    },
    'update': function (userId, doc, fields, modifier) {
        return (userId && doc.createdBy === userId);
    },
    'remove': function (userId, doc) {
        return (userId && doc.createdBy === userId);
    }
});

Articles.deny({
    'update': function (userId, doc, fields, modifier) {
        return _.contains(fields, 'createdBy') || _.contains(fields, 'createdAt')
    }
});
