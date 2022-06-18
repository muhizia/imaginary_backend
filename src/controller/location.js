// const indexDAO = require('../dao/location');

class locationController {
    get_average_location(long, lat) {
        var average_location = long + lat;
        return average_location;
    }
}

module.exports = new locationController();