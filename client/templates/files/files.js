Template.files.onCreated(function() {
  this.autorun( () => this.subscribe('my_files') )
  
});

Template.files.helpers({
  ready: function() {
    
  },
  myFiles: function() {
    return Files.find({})
  }
})
