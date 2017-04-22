'use strict';

module.exports = function(app, cb) {
  /*
   * The `app` object provides access to a variety of LoopBack resources such as
   * models (e.g. `app.models.YourModelName`) or data sources (e.g.
   * `app.datasources.YourDataSource`). See
   * http://docs.strongloop.com/display/public/LB/Working+with+LoopBack+objects
   * for more info.
  */
  if (process.env.NODE_ENV !== 'production') {
    process.nextTick(cb);
    return;
  }
  var dataSource = app.dataSources['mysql-db'];
  /*
  * We can pass an array of strings of models to automigrate.
  * NOTE: automigrating will delete the model's table if it exists, so this
  * should be done only for models that don't have a table.
  */
  var tablesToMigrate = [
    'statusentries',
  ];
  dataSource.automigrate(tablesToMigrate, function(err) {
    if (err) return cb(err);
    return cb();
  });
};
