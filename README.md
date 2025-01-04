# image-universe-miniprogram 图宇宙QQ小程序
图宇宙QQ小程序是一款画风简约的QQ图库小程序，通过express框架快速搭建。

# 登录页面
![image](https://github.com/user-attachments/assets/d97577c6-ca13-4eb3-b074-a02e5ab0e4c1)

# 首页空间

图像数据列表形式预览
![image](https://github.com/user-attachments/assets/d48c20a6-f544-40d5-951d-8d299cbcbb9d)
# 服务器端
node 快速更新文件名称脚本
```js
var fs = require('fs');

for (let index = 1; index <= 60; index++) {
    fs.readFile("./public/webp_images/image (" + index + ").webp", (err, data) => {
        if (!err) { fs.writeFileSync("./public/png_images/image(" + index + ").png", data) }
    })
}
```

服务器快速搭建
```js
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
```
运行
```bash
node app.js
```
