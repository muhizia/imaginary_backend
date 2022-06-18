const request = require("supertest");
const app = require("../../src/app");

describe("testing add endpoint", () => {
    test('testing add endpoint on get', async () => {
        const response = await request(app.callback()).get('/add');
        expect(response.status).toBe(404);
    });
    test('testing add endpoint on post', async () => {
        const response = await request(app.callback()).post('/add');
        expect(response.status).toBe(400);
    });
    test('testing add endpoint on put', async () => {
        const response = await request(app.callback()).put('/add');
        expect(response.status).toBe(404);
    });
    test('testing add endpoint on delete', async () => {
        const response = await request(app.callback()).delete('/add');
        expect(response.status).toBe(404);
    });
});

describe("Testing edit endpoint", () => {
    test('testing edit endpoint on get', async () => {
        const response = await request(app.callback()).get('/edit');
        expect(response.status).toBe(404);
    });
    test('testing edit endpoint on get', async () => {
        const response = await request(app.callback()).post('/edit');
        expect(response.status).toBe(404);
    });
    test('testing edit endpoint on get', async () => {
        const response = await request(app.callback()).put('/edit');
        expect(response.status).toBe(400);
    });
    test('testing edit endpoint get', async () => {
        const response = await request(app.callback()).delete('/edit');
        expect(response.status).toBe(404);
    });
});