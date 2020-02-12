let data = 0
function getData() {
  getData = new XMLHttpRequest()
  getData.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      data = JSON.parse(this.responseText).data
    }
  }
  getData.open("GET", "artgallerydata.txt", true)
  getData.send()
  console.log(data)
}
let artGalleryImage = 0
function changePage(direction) {
  let i = 0
  if(direction == 0 && artGalleryImage != 0) {
    for(i = 0, i != artGalleryImage, i++) {
      if(i == artGalleryImage) {
        artGalleryImage--
        document.getElementById("display").src = "../Images/" + getData[i].source
        }
      }
    }else{
  if(direction == 1 && artGalleryImage != data.length)
    for(i = 0, i != artGalleryImage, i++) {
      if(i == artGalleryImage) {
        artGalleryImage = artGalleryImage - 1
        document.getElementById("display").src = "../Images/" + getData[i].source
      }
    }
  }
}