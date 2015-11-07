FlowRouter.route('/', {
  name: 'home',
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {
      main:     'homeFeed'
    });
  }
});

FlowRouter.route('/files', {
  name: 'files',
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {
      main:     'files'
    });
  }
});

FlowRouter.route('/files/:fileId', {
  name: 'file',
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {
      main:     'file'
    });
  }
});

FlowRouter.route('/messages', {
  name: 'messages',
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {
      main:     'messages'
    });
  }
});

FlowRouter.route('/profile', {
  name: 'profile',
  action: function(params, queryParams) {
    BlazeLayout.render('mainLayout', {
      main:     'profile'
    });
  }
});
