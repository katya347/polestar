import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '30s', target: 20 }, 
        { duration: '1m', target: 20 },  
        { duration: '10s', target: 0 }, 
    ],
};

export default function () {
    const res = http.get('https://reqres.in/api/users?page=2');
    check(res, {
        'is status 200': (r) => r.status === 200,
    });
    sleep(1);
}
