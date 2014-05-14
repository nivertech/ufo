'use strict';

describe('Service: Nuforcservice', function () {

  // load the service's module
  beforeEach(module('ufoApp'));

  // instantiate service
  var Nuforcservice;
  beforeEach(inject(function (_Nuforcservice_) {
    Nuforcservice = _Nuforcservice_;
  }));

  it('should do something', function () {
    expect(!!Nuforcservice).toBe(true);
  });

});
