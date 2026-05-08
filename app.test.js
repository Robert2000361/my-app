const http = require('http');
const server = require('./app');
test('returns Hello from CI/CD!', (done) => {
  http.get('http://localhost:3000', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      expect(data).toBe('Hello from CI/CD!\n');
      server.close();
      done();
    });
  });
});
