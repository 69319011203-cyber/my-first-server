const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');

  res.end(`
    <!DOCTYPE html>
    <html lang="th">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">

      <title>My Cute Web Server</title>

      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: Arial, sans-serif;
          background: linear-gradient(135deg, #bde7ff, #d8c4ff, #ffcce6);
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
        }

        .card {
          background-color: white;
          width: 80%;
          max-width: 550px;
          padding: 40px 25px;
          border-radius: 25px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
        }...
