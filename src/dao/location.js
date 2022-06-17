const db = require('../db/db');

class LocationDAO {
    
    async updateLocation(id, long, lat, average_location){
        const obj = await db('location').update({ lat: lat, long: long, average_location: average_location, updated_at: new Date() }).where({ 'id': id }).returning('id');
        return obj;
    }
    async addLocation(long, lat, average_location) {
        const obj = await db.insert({ lat: lat, long: long, average_location: average_location, created_at: new Date() }).into("location").returning('id');
        return obj;
    }
}

module.exports = new LocationDAO();