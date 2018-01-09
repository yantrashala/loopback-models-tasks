'use strict';

module.exports = function (Task) {
  var methodNames = [
    "replaceOrCreate", "patchOrCreate", "findOne",
    "findById", "destroyById",
    "count", "exists", "replaceById", "prototype.patchAttributes",
    "replaceById", "upsertWithWhere"
  ];

  methodNames.forEach(function (name) {
    Task.disableRemoteMethodByName(name);
  });

  Task.prototype.complete = function(data, options, cb) {
    return this.updateAttributes({status:1}).then((result) => {
      return;
    });
  };

  var completeOptions = {
    description: 'Patch attributes for a model instance and persist it into ' +
      'the data source.',
    accessType: 'WRITE',
    accepts: [
      {
        arg: 'data', type: 'object', model: 'any',
        http: {source: 'body'},
        description: 'An object of formValue property name/value pairs',
      },
      {arg: 'options', type: 'object', http: 'optionsFromRequest'},
    ],
    returns: {arg: 'data', type: 'any', root: true},
    http: [{verb: 'put', path: '/complete'}],
  };

  Task.remoteMethod('prototype.complete',completeOptions);
};