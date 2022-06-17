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
const indexDAO = require('../dao/location');
const indexController = require('../controller/location');
 
class IndexService {

    addLocation(long, lat) {
        return indexController.addLocation(long, lat);
    }
    updateLocation(id, long, lat) {
        return indexController.updateLocation(id, long, lat);
    }
}

module.exports = new IndexService();