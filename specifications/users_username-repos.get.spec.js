'use strict';
var
  GitHub = require(__dirname + '/../application/github'),
  token = process.env.GITHUB_TOKEN || require(__dirname + '/env.json').GITHUB_TOKEN,
  assert = require('chai').assert;

describe('GET /users/:username/repos', function () {
  var github = new GitHub(token);
  var username = 'code-check';
  it('should fail with invalid token', function (done) {
    var hub = new GitHub('invalid');
    hub.getUsersRepos(username, {per_page: 1}, function (err, resp, body) {
      assert.equal(resp.statusCode, 401);
      done();
    });
  });

  it('should success with valid token', function (done) {
    github.getUsersRepos(username, {per_page: 1}, function (err, resp, body) {
      assert.equal(resp.statusCode, 200);
      done();
    });
  });
  it('should contains data', function (done) {
    github.getUsersRepos(username, {per_page: 1}, function (err, resp, repos) {
      assert(repos.length <= 1, 'repositories must be less or equals to 1');
      var repo = repos[0];
      assert.property(repo, 'id');
      assert.property(repo, 'name');
      assert.propertyVal(repo, 'full_name', repo.owner.login + '/' + repo.name);
      assert.property(repo, 'owner');
      assert.deepPropertyVal(repo, 'owner.login', username);
      assert.deepProperty(repo, 'owner.id');
      assert.deepPropertyVal(repo, 'owner.url', 'https://api.github.com/users/' + repo.owner.login);
      assert.deepPropertyVal(repo, 'owner.type', 'Organization');
      assert.property(repo, 'private', false);
      assert.propertyVal(repo, 'html_url', 'https://github.com/' + repo.full_name);
      assert.property(repo, 'clone_url');
      done();
    });
  });
});
