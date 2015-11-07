Files = new Mongo.Collection('files');

Meteor.methods({
  uploadFile: function(file_url) {
    console.log("Creating new file with url", file_url);
    console.log("Meteor user", Meteor.user(), this.userId);
    console.log("Context", this);
    
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
