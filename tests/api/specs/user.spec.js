const ApiService = require('../services/apiService');
const apiService = new ApiService(process.env.BASE_URL);

describe('User API Tests', () => {
    it('should get a list of users', async () => {
        const response = await apiService.get('/users?page=2');
        expect(response.statusCode).toBe(200);
        expect(response.body.data).toBeDefined();
        expect(Array.isArray(response.body.data)).toBe(true);
    });
});
