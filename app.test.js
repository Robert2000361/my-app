const http = require('http');
const server = require('./app');
test('returns CI/CD is Awesome and Automatic!!', (done) => {
  http.get('http://localhost:3000', (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      expect(data).toBe('CI/CD is Awesome and Automatic!!\n');
      server.close();
      done();
    });
  });
});
