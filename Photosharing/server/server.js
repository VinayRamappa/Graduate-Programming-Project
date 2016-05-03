Meteor.publish('images', function(limit, username) {
  check(limit, Number);

  var findQuery = {};

    return Images.find(findQuery, {
    limit: limit,
    sort: { uploadedAt: -1 }
  });
});
