Template.registerHelper('dateformat', function (date) {
    if (moment) {
        return moment(date).format('LLL');
    } else {
        return date;
    }
});
