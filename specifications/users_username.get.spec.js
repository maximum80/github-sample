'use strict';
var
  GitHub = require(__dirname + '/../application/github'),
  token = process.env.GITHUB_TOKEN || require(__dirname + '/env.json').GITHUB_TOKEN,
  assert = require('chai').assert;

describe('GET /users/:username', function () {
  var github = new GitHub(token);
  var username = 'givery';
  it('should fail with invalid token', function (done) {
    var hub = new GitHub('invalid');
    hub.getUser(username, function (err, resp, body) {
      assert.equal(resp.statusCode, 401);
      done();
    });
  });

  it('should success with valid token', function (done) {
    github.getUser(username, function (err, resp, body) {
      assert.equal(resp.statusCode, 200);
      done();
    });
  });
  it('should contains data', function (done) {
    github.getUser(username, function (err, resp, user) {
      assert.propertyVal(user, 'login', username);
      assert.property(user, 'id');
      assert.property(user, 'avatar_url');
      assert.propertyVal(user, 'url', 'https://api.github.com/users/' + user.login);
      assert.propertyVal(user, 'html_url', 'https://github.com/' + user.login);
      assert.propertyVal(user, 'type', 'User');
      assert.property(user, 'name');
      assert.property(user, 'email');
      done();
    });
  });
});


