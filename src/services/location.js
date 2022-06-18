/**
 * This is the route file which contains get requests routes.
 *
 * @author Aristide Muhizi
 *
 * @email: muhizia4@gmail.com
 *
 * @class IndexService
 *
 */
const locationDAO = require('../dao/location');
const locationController = require('../controller/location');
 
class IndexService {

    async addLocation(long, lat) {
        const average_location = locationController.get_average_location(long, lat);
        return await locationDAO.addLocation(long, lat, average_location);
    }
    async updateLocation(id, long, lat) {
        const average_location = locationController.get_average_location(long, lat);
        return await locationDAO.updateLocation(id, long, lat, average_location);
    }
}

module.exports = new IndexService();