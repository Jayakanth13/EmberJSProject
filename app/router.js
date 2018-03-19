import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('page1', function() {
    this.route('page2', function() {
      this.route('page3', function() {
        this.route('page4');
      });
    });
  });
});

export default Router;
