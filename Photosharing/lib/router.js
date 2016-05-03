Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

/*Router.route('/', {
	name: 'home',
	template: 'home'
});*/
Router.route("/", {
  name : 'home',
	template: 'home',
  data : function () {
    return {
      message : "Welcome Folks"
    }

  }
});

Router.route("/about",{
  name : "homeAbout"
});

Router.route("/contact",{
  name : "homeContact"
});

Router.route('/:userSlug', {
  name: 'userPage',
  template: 'home'
});

Router.onBeforeAction('loading');
