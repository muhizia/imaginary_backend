/**
 * This is the route file which contains get requests routes.
 *
 * @author Aristide Muhizi
 *
 * @email: muhizia4@gmail.com
 *
 *
 */
require('dotenv').config()
const koaRouter = require('koa-router');
const router = new koaRouter();
const locationService = require('../services/location')

router.post('/add', async ctx => {
    const { lat, long } = ctx.request.body;
    
    if (!lat) {
        ctx.throw(400, 'Provide a valid latitude');
    }
    if (!long) {
        ctx.throw(400, 'Provide a valid longitude');
    }
    
    
    const location = await index.addLocation(long, lat);
    console.log(location)
    if (location[0]) {
        ctx.status = 201;
        ctx.body = { "status": "success", "msg": "You have successfuly added a location" };
    } else {
        ctx.status = 400;
        ctx.body = { "status": "fail", "msg": "failed to insert" };
    }
});

router.put('/edit', async ctx => {
    const { id, lat, long } = ctx.request.body;
    var error = false;

    if(!id) {
        ctx.throw(400, 'Provide a valid ID');
    }
    if (!lat) {
        ctx.throw(400, 'Provide a valid latitude');
    }
    if (!long) {
        ctx.throw(400, 'Provide a valid longitude');
    }
    
    
    const location = await locationService.updateLocation(id, long, lat);
    
    if (location[0]) {
        ctx.status = 201;
        ctx.body = { "status": "success", "msg": "You have successfuly updated a location" };
    } else {
        ctx.status = 400;
        ctx.body = { "status": "fail", "msg": "failed to update check if the id exists" };
    }

    
});

module.exports = router.routes();