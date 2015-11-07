Template.profile.helpers({
  email: function() {
    return this.emails[0].address
  }
});

Template.profile.events({
  'submit form': function(ev) {
    ev.preventDefault();
    
    
  }
})
