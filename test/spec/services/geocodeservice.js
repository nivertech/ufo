'use strict';

describe('Service: Geocodeservice', function () {

  // load the service's module
  beforeEach(module('ufoApp'));

  // instantiate service
  var Geocodeservice;
  beforeEach(inject(function (_Geocodeservice_) {
    Geocodeservice = _Geocodeservice_;
  }));

  it('should do something', function () {
    expect(!!Geocodeservice).toBe(true);
  });

});
