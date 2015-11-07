Template.file.onCreated(function() {
  this.autorun( () => this.subscribe('my_files') );
});

Template.file.helpers({
  file: function() {
    return Files.findOne( FlowRouter.getParam("fileId") );
  },
  formatted_date: function() {
    let date = Files.findOne( FlowRouter.getParam("fileId") ).createdAt;
    return moment(date).format('MMMM Do YYYY, h:mm:ss a');
  }
  
});
