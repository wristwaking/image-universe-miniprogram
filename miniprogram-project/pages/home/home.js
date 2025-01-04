Page({
  data: {
    images: []
  },
  onLoad: function () {
    for (let i = 1; i <= 60; i++) {
      let image = "http://localhost:3000/image/image(" + i + ").png"
      this.data.images.push(image)
    }
    this.setData({ images: this.data.images })
  }
})
