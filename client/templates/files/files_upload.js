Template.filesUpload.events({
  'change #files-upload': function(ev) {
    ev.preventDefault();
    
    let uploader = new Slingshot.Upload("medicalFile");
    let file     = document.getElementById('files-upload').files[0];

    uploader.send(file, (error, downloadUrl) => {
      if (error) {
        console.error('Error uploading', uploader.xhr.response);
        alert (error);
      } else {
        Meteor.call('uploadFile', downloadUrl, (err, fileId) => {
          console.log("Client callback for file upload");
        });
      }
    });
  }
});
