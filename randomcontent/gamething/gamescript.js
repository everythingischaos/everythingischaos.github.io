//welcome to this worthless modular system i designed to be reusable
let keyPresses = {
  65 : false,
  //a
  66 : false,
  //b
  67 : false,
  //c
  68 : false,
  //d
  69 : false,
  //e
  70 : false,
  //f
  71 : false,
  //g
  72 : false,
  //h
  73 : false,
  //i
  74 : false,
  //j
  75 : false,
  //k
  76 : false,
  //l
  77 : false,
  //m
  78 : false,
  //n
  79 : false,
  //o
  80 : false,
  //p
  81 : false,
  //q
  82 : false,
  //r
  83 : false,
  //s
  84 : false,
  //t
  85 : false,
  //u
  86 : false,
  //v
  87 : false,
  //w
  88 : false,
  //x
  89 : false,
  //y
  90 : false
  //z
}
const canvas = document.getElementById("canvas")
//sets resolution
let ctx = canvas.getContext("2d")
//gets asset
let player = {
  playerX : 0,
  playerY : 0,
  playerSizeX : 0,
  playerSizeY : 25,
  playerImagesSource : "gamethingAssets/playerImages/Human Character-",
  direction = 0
}
//player location is calculated from center
//player hitbox is always equal to size
let assets = []
let mobiles = []
let assetsActive = []
let mobilesActive = []
function buildAssets() {
  assets.push(new NewAsset(25,25,0,"gamethingAssets/",background))
  assets.push(new NewAsset(25, 25, 1, "gamethingAssets/",wall))
  mobiles.push(new NewMobile(25,25,0,"gamethingAssets/",0,25,25,"basic_enemy",10,1))
}
function NewAsset(assetWidth,assetHeight,assetCode,assetImageSource,assetAction) {
  this.assetWidth = assetWidth
  this.assetHeight = assetHeight
  this.assetCode = assetCode
  this.assetImageSource = assetImageSource
  this.assetAction = assetAction
}
function NewMobile(mobWidth,mobHeight,mobCode,mobImageSource,mobAi,hitboxWidth,hitboxHeight,mobName,mobHealth,mobAttack) {
  this.mobWidth = mobWidth
  this.mobHeight = mobHeight
  this.mobImageSource = mobImageSource
  this.mobAi = mobAi
  this.hitboxWidth = hitboxWidth
  this.hitboxHeight = hitboxHeight
  this.mobName = mobName
}
function drawPlayer() {
  ctx.drawImage(playerImagesSource + player.direction + ".png", )
}
function drawEnvironment() {
  let backgroundCountAssetI = 0
  let imgApply = 0
  for(backgroundCountAssetI = 0, backgroundCountAssetI <= assets.width, backgroundCountAssetI++) {
    imgApply = backgroundCountAssetI
    ctx.drawImage(imgApply,assets[backgroundCountAssetI].(assetWidth/2)*-1,assets[backgroundCountAssetI].(assetHeight/2))
  }
}
window.setInterval(function draw() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  drawEnvironment()
  drawMobiles()
  drawEffects()
  drawPlayer()
}, 16.6)
//tick is 60 times per second, may reduce if lag is too extreme
function keyPressed() {
  alert("a key was pressed")
}