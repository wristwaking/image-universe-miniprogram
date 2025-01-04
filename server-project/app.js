const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 设置静态文件服务，将 public 文件夹公开出来
app.use('/image', express.static(path.join(__dirname, 'public/png_images/')));

// 启动服务器
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
