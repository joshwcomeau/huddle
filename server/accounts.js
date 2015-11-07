Accounts.onCreateUser(function(options, user) {
  user.profile = user.profile || {};
  
  user.profile.role = 'patient';
  
  return user;
});
