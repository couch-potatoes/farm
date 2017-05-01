'use strict';

module.exports = function(Researcher) {

};

// Copyright IBM Corp. 2014,2015. All Rights Reserved.
// Node module: loopback-example-user-management
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

var config = require('../../server/config.json');
var path = require('path');

module.exports = function(User) {
  //send password reset link when requested
  User.on('resetPasswordRequest', function(info)
  {
      console.log(info.accessToken.id);
      console.log(info);
      User.findById(info.accessToken.userId, function(err, user)
      {
        console.log('password:'+info.options.password);
          if (err) return res.sendStatus(404);
          user.updateAttribute('password', info.options.password, function(err, user)
          {
            if (err) return res.sendStatus(404);
            console.log('> password reset processed successfully');
          });
      });
  });
};
