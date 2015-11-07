Template.filesUpload.onCreated(function() {
  this.uploader = new Slingshot.Upload("medicalFile");
});

Template.filesUpload.events({
  'change #files-upload-button': function(ev, instance) {
    ev.preventDefault();
        
    let file = document.getElementById('files-upload-button').files[0];
    
    instance.uploader.send(file, (error, downloadUrl) => {
      if (error) {
        console.error('Error uploading', instance.uploader.xhr.response);
        alert (error);
      } else {
        Meteor.call('uploadFile', downloadUrl, (err, fileId) => {
          console.log("Client callback for file upload", err, fileId);
        });
      }
    });
  }
});
