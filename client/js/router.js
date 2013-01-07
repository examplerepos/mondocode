Meteor.Router.add({
  '/': 'index',
  '/about': 'about',
  '/dashboard': 'dashboard',
  '/project/:name': function(name) {
  	Session.set('project', name);
  	return 'project'
  }
});

Meteor.Router.filters({
  'loggedIn': function(page) {
    if (Meteor.loggingIn()) {
      return 'loading';
    } else if (Meteor.user()) {
      if(page == 'index') {
      	Meteor.Router.to('/dashboard');
      	return 'dashboard';
      } else {
      	return page;	
      }	
    } else {
      return 'index';
    }
  }
});

Meteor.Router.filter('loggedIn', { except: ['about'] });