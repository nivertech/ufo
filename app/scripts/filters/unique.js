'use strict';

app.filter('unique', function () {
  return function (collection, keyName) {
    var output = [];
    var keys = [];

    angular.forEach(collection, function(item){
      var key = item[keyName];
      if(keys.indexOf(key) === -1){
        keys.push(key);
        output.push(item);
      }
    });

    return output;
  };
});
