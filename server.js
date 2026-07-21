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

      <title>เว็บไซต์ของแก้ม</title>

      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          font-family: 'Arial', 'Segoe UI', sans-serif;
          text-align: center;
          background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
          position: relative;
          overflow: hidden;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        /* ล้นลงมา */
        .floating-emoji {
          position: fixed;
          font-size: 40px;
          opacity: 0.7;
          animation: float-down linear infinite;
          pointer-events: none;
          text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
        }

        @keyframes float-down {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        .emoji-1 { left: 10%; animation-duration: 8s; animation-delay: 0s; }
        .emoji-2 { left: 20%; animation-duration: 10s; animation-delay: 1s; }
        .emoji-3 { left: 30%; animation-duration: 12s; animation-delay: 2s; }
        .emoji-4 { left: 40%; animation-duration: 9s; animation-delay: 3s; }
        .emoji-5 { left: 50%; animation-duration: 11s; animation-delay: 1.5s; }
        .emoji-6 { left: 60%; animation-duration: 10s; animation-delay: 2.5s; }
        .emoji-7 { left: 70%; animation-duration: 12s; animation-delay: 0.5s; }
        .emoji-8 { left: 80%; animation-duration: 9s; animation-delay: 3.5s; }
        .emoji-9 { left: 90%; animation-duration: 11s; animation-delay: 1s; }

        .box {
          width: 90%;
          max-width: 650px;
          background: rgba(255, 255, 255, 0.95);
          padding: 45px;
          border-radius: 35px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          border: 8px solid rgba(255, 105, 180, 0.3);
          backdrop-filter: blur(10px);
          position: relative;
          z-index: 10;
          animation: boxFloat 3s ease-in-out infinite;
        }

        @keyframes boxFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        h1 {
          color: #e73c7e;
          font-size: 42px;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(231, 60, 126, 0.2);
          animation: titleGlow 2s ease-in-out infinite;
        }

        @keyframes titleGlow {
          0%, 100% {
            text-shadow: 2px 2px 4px rgba(231, 60, 126, 0.2);
          }
          50% {
            text-shadow: 0 0 20px rgba(231, 60, 126, 0.5);
          }
        }

        h2 {
          color: #23a6d5;
          font-size: 28px;
          margin-bottom: 20px;
        }

        p {
          color: #555555;
          font-size: 18px;
          line-height: 1.8;
          margin-bottom: 15px;
        }

        .name {
          background: linear-gradient(135deg, #f1e9ff, #ffe6f0);
          padding: 20px;
          border-radius: 25px;
          color: #6948b5;
          font-weight: bold;
          font-size: 16px;
          border-left: 5px solid #e73c7e;
          margin: 20px 0;
        }

        .cartoon {
          font-size: 60px;
          margin-bottom: 10px;
          animation: bounce 2s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .decoration {
          margin-top: 25px;
          font-size: 32px;
          letter-spacing: 10px;
          animation: decorationFloat 4s ease-in-out infinite;
        }

        @keyframes decorationFloat {
          0%, 100% {
            transform: translateX(0);
            opacity: 0.8;
          }
          50% {
            transform: translateX(10px);
            opacity: 1;
          }
        }

        .stars {
          position: fixed;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          animation: twinkle 3s infinite;
          pointer-events: none;
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
      </style>
    </head>

    <body>
      <!-- ดาวเล็กๆกระพริบบน -->
      <div class="stars" style="top: 10%; left: 15%; animation-delay: 0s;"></div>
      <div class="stars" style="top: 20%; left: 80%; animation-delay: 1s;"></div>
      <div class="stars" style="top: 30%; left: 25%; animation-delay: 2s;"></div>
      <div class="stars" style="top: 40%; left: 85%; animation-delay: 1.5s;"></div>
      <div class="stars" style="top: 50%; left: 10%; animation-delay: 2.5s;"></div>

      <!-- อโมจิลอยลงมา -->
      <div class="floating-emoji emoji-1">🐰</div>
      <div class="floating-emoji emoji-2">🌸</div>
      <div class="floating-emoji emoji-3">🎀</div>
      <div class="floating-emoji emoji-4">💜</div>
      <div class="floating-emoji emoji-5">⭐</div>
      <div class="floating-emoji emoji-6">🩵</div>
      <div class="floating-emoji emoji-7">🌷</div>
      <div class="floating-emoji emoji-8">🐻</div>
      <div class="floating-emoji emoji-9">☁️</div>

      <div class="box">

        <div class="cartoon">🐰🌸🎀</div>

        <h1>ยินดีต้อนรับเข้าสู่ Web Server</h1>

        <h2>สวัสดีค่ะ ชื่อเล่นแก้ม 💜</h2>

        <p>
          เว็บไซต์ของฉันทำงานด้วยระบบ Node.js<br>
          และเผยแพร่ผ่าน Railway
        </p>

        <div class="name">
          👩‍💻 จัดทำโดย นางสาว ภัควดี กล่ำจีน<br>
          รหัสนักศึกษา 69319011203
        </div>

        <p>ขอบคุณที่เข้ามาเยี่ยมชมเว็บไซต์ของแก้มนะคะ 🥰</p>

        <div class="decoration">
          ☁️ 🩵 🌷 ⭐ 🐻 🎀 💜 ☁️
        </div>

      </div>
    </body>
    </html>
  `);
});

server.listen(port, () => {
  console.log(\`Server is running on port: \${port}\`);
});
