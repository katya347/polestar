const ApiService = require('../services/apiService');

const apiService = new ApiService('https://reqres.in/api');

describe('User API Tests', () => {
    it('should get a list of users', async () => {
        const response = await apiService.get('/users?page=2');
        expect(response.statusCode).toBe(200);
        expect(response.body.data).toBeDefined();
        expect(Array.isArray(response.body.data)).toBe(true);
    });

    it('should create a new user', async () => {
        const userData = { name: 'John Doe', job: 'Software Developer' };
        const response = await apiService.post('/users', userData);
        expect(response.statusCode).toBe(201);
        expect(response.body.name).toBe(userData.name);
        expect(response.body.job).toBe(userData.job);
    });

    it('should update an existing user', async () => {
        const userData = { name: 'Jane Doe', job: 'Product Manager' };
        const response = await apiService.put('/users/2', userData);
        expect(response.statusCode).toBe(200);
        expect(response.body.name).toBe(userData.name);
        expect(response.body.job).toBe(userData.job);
    });

    it('should delete a user', async () => {
        const response = await apiService.delete('/users/2');
        expect(response.statusCode).toBe(204);
    });
});
