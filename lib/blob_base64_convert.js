// blob to base64
function blobTobase64(blob) {
  const fileReader = new FileReader()
  let base64 = ''
  fileReader.onload = () => {
    base64 = fileReader.result // 读取base64
  }
  fileReader.readAsDataURL(blob) // 读取blob
}
// base64 to blob
function dataURItoBlob(dataURI) {
  var mimeString = dataURI
    .split(',')[0]
    .split(':')[1]
    .split(';')[0] // mime类型
  var byteString = atob(dataURI.split(',')[1]) //base64 解码
  var arrayBuffer = new ArrayBuffer(byteString.length) //创建ArrayBuffer
  var intArray = new Uint8Array(arrayBuffer) //创建视图
  for (var i = 0; i < byteString.length; i++) {
    intArray[i] = byteString.charCodeAt(i)
  }
  return new Blob([intArray], { type: mimeString }) // 转成 blob
}

module.exports = {
  blobTobase64,
  dataURItoBlob
}
