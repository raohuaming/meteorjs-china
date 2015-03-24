Meteor.startup(function () {

    Factory.define('article', Articles, {
        title: function () {
            return Fake.sentence(4);
        },
        body: function () {
            return Fake.paragraph();
        },
        rating: function () {
            return _.random(1, 5);
        },
        authorName: function () {
            return Fake.word();
        },
    	clickCount: function (){
	  return 1;
	}
    });

    if (Articles.find({}).count() === 0) {

        _(10).times(function (n) {
            Factory.create('article');
        });

    }

});
