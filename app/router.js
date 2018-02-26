import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('notes', function() {
    this.route('show', { path: '/:note_id' });
    this.route('edit', { path: '/edit/:note_id' });
    this.route('new', { path: '/new'});
  });
});

export default Router;
