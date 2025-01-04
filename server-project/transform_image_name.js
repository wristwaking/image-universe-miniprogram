var fs = require('fs');

for (let index = 1; index <= 60; index++) {
    fs.readFile("./public/webp_images/image (" + index + ").webp", (err, data) => {
        if (!err) { fs.writeFileSync("./public/png_images/image(" + index + ").png", data) }
    })
}