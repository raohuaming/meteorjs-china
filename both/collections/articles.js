Articles = new Mongo.Collection('articles');

Articles.helpers({});

Articles.before.insert(function (userId, doc) {
    doc.createdAt = moment().toDate();
});
