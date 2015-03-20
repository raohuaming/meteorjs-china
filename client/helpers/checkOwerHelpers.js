Template.registerHelper('checkOwner', function (createdById, currentUser) {
    return currentUser && currentUser._id === createdById;
});