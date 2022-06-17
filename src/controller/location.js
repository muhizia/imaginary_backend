const indexDAO = require('../dao/location');

class IndexController {
    async addLocation(long, lat) {
        var average_location = long + lat;
        const location =  await indexDAO.addLocation(long, lat, average_location);
        return location;
    }
    async updateLocation(id, long, lat) {
        var average_location = long + lat;
        const location =  await indexDAO.updateLocation(id, long, lat, average_location);
        return location;
    }
}

module.exports = new IndexController();