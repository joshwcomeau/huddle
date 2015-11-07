Files = new Mongo.Collection('files');

Meteor.methods({
  uploadFile: function(file_url) {    
    // Validations
    check(this.userId, String);
    check(file_url, String);
    
    var user = Meteor.user();
    var file_object = {
      url: file_url,
      userId: user._id,
      createdAt: new Date()
    }
    
    return Files.insert(file_object);
  }
})
