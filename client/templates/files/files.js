Template.files.onCreated(function() {
  this.autorun( () => this.subscribe('my_files') )
  
});

Template.files.helpers({
  myFiles: function() {
    return Files.find({})
  }
})
