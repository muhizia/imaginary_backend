const request = require("supertest");
const app = require("../../src/app");





const mockListen = jest.fn();
app.listen = mockListen;

afterEach(() => {
    mockListen.mockReset();
});

describe("Test the root path", () => {
    test('Hello world works', async () => {
        const response = await request(app.callback()).get('/add');
        expect(response.status).toBe(404);
    });
    test('Hello world works', async () => {
        const response = await request(app.callback()).post('/add');
        expect(response.status).toBe(400);
    });
    test('Hello world works', async () => {
        const response = await request(app.callback()).put('/add');
        expect(response.status).toBe(404);
    });
    test('Hello world works', async () => {
        const response = await request(app.callback()).delete('/add');
        expect(response.status).toBe(404);
    });
});

describe("Test the root path", () => {
    test('Hello world works', async () => {
        const response = await request(app.callback()).get('/edit');
        expect(response.status).toBe(404);
    });
    test('Hello world works', async () => {
        const response = await request(app.callback()).post('/edit');
        expect(response.status).toBe(404);
    });
    test('Hello world works', async () => {
        const response = await request(app.callback()).put('/edit');
        expect(response.status).toBe(400);
    });
    test('Hello world works', async () => {
        const response = await request(app.callback()).delete('/edit');
        expect(response.status).toBe(404);
    });
});