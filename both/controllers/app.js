AppController = RouteController.extend({
    layoutTemplate: 'appLayout'
});

AppController.events({
    'click [data-action=logout]': function () {
        AccountsTemplates.logout();
    }
});

T9n.setLanguage("zh-cn");