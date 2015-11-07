Meteor.publish('my_files', function() {
  return Files.find({ userId: this.userId });
});
