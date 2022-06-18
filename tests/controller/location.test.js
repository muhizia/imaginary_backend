const locationController = require('../../src/controller/location');

test('adds 1 + 2 to equal 3', () => {
    expect(locationController.get_average_location(1, 2)).toBe(3);
});