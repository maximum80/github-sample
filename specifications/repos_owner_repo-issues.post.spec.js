'use strict';
var
  GitHub = require(__dirname + '/../application/github'),
  token = process.env.GITHUB_TOKEN || require(__dirname + '/env.json').GITHUB_TOKEN,
  assert = require('chai').assert;

describe('POST /repos/:owner/:repo/issues', function () {
  var github = new GitHub(token);
  var owner = 'code-developers';
  var repository = 'legendary-parakeet';
  var issue = {
    title: uuid(),
    body: 'This issue is made by GitHub API challenge from codecheck',
    labels: [ 'wontfix' ],
  };
  var number = null;
  after('Remove issues if created', function () {
    if (number === null) {
      return;
    }
    var closeOption = {
      state: 'closed'
    };
    github.editIssue(owner, repository, number, closeOption, function (err, resp, result) {
      assert.equal(resp.statusCode, 200);
      assert.equal(result.number, number);
    });
  });
  it('should fail with invalid token', function (done) {
    var hub = new GitHub('invalid');
    hub.createIssue(owner, repository, issue, function (err, resp, body) {
      assert.equal(resp.statusCode, 401);
      done();
    });
  });

  it('should succeed and contains data', function (done) {
    github.createIssue(owner, repository, issue, function (err, resp, result) {
      assert.equal(resp.statusCode, 201);
      assert.property(result, 'number');
      number = result.number;
      assert.propertyVal(result, 'state', 'open');
      assert.propertyVal(result, 'title', result.title);
      assert.propertyVal(result, 'body', result.body);
      assert.property(result, 'labels');
      done();
    });
  });
});

function uuid () {
  function s4 () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4());
}
