Articles = new Mongo.Collection('articles');

Articles.helpers({});

Articles.before.insert(function (userId, doc) {
    doc.createdBy = userId;
    doc.createdAt = moment().toDate();
    doc.updatedAt = moment().toDate();
});

Articles.before.update(function (userId, doc) {
    doc.updatedAt = moment().toDate();
});
