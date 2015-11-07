Template.filesThumb.helpers({
  pathForFile: function() {
    return FlowRouter.path('file', { fileId: this._id })
  }
});
