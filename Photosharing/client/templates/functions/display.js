Template.image.helpers({
  postDate: function() {
    return moment(this.uploadedAt).format('MMMM Do YYYY, h:mm:ss a');
  }
});

Template.image.helpers({
  postDate: function(date) {
    return moment(this.uploadedAt).format('MMMM Do YYYY, h:mm:ss a');
  },
  ownImage: function() {
    return this.userId === Meteor.userId();
  }
});

Template.image.events({
  'click .delete-image': function(e) {
    e.preventDefault();

    var del = confirm('Are you sure you want to delete this image?');
    if (del === true) {
      Images.remove({ _id:this._id }, function(error,result) {
        if (error) {
          toastr.error("DELETE FAILED " + error);
        } else {
          toastr.success('Image successfully deleted!');
        }
      })
    }
  }
});
