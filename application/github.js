'use strict';
var
  request = require('request');

function GitHub (token) {
  this.token = token;
  this.root_endpoint = 'https://api.github.com';
}

GitHub.prototype.endpoint = function getEndpoint (path) {
  return this.root_endpoint + path;
};

GitHub.prototype.getUser = function getUser (username, callback) {
};

GitHub.prototype.getUsersRepos = function getUsersRepos (username, qs, callback) {
};

GitHub.prototype.createIssue = function createIssue (owner, repository, parameter, callback) {
};

GitHub.prototype.editIssue = function editIssue (owner, repository, number, parameter, callback) {
};

module.exports = GitHub;
