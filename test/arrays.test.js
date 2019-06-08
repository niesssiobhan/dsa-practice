'use strict';

const arrays = require('../arrays.js');

describe('uniqueChar', () => {
  it('should return true if all characters in the array are unique', () => {
    const result = arrays.uniqueChar(['f','a', 'm', 'i', 'l', 'y']);
    expect(result).toBe(true);
  });
});