Template.registerHelper('checkOwner', function (createdById, currentUser) {
    return currentUser._id === createdById;
});