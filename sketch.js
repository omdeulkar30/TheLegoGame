var level1, level2, level3a, level3b
var level1Image, level2Image, level3aImage, level3bImage
var level1Start, level2Start, level3Start
var level1StartImage, level2StartImage, level3StartImage
var obstacleJoker, obstacleVampire, obstacleBoxing, heroBatman, regularMan1, regularMan2, regularMan3, mario, starwars1, starwars2
var obstacleJokerImage, obstaclevampireImage, obstacleboxingImage, heroBatmanImage1,regularman1Image, regularman2Image, regularman3Image, marioImage, starwars1Image, starwars2Image
var road1, road2, road3, road4,  road5, road1a
var road1Image, road2Image, road3Image, road4Image, road5Image
var LEGO1, LEGO2, LEGO3, LEGO4, LEGO5, LEGO6, LEGO7, LEGO8,  LEGO9
var LEGO1Image, LEGO2Image, LEGO3Image, LEGO4Image, LEGO5Image, LEGO6Image, LEGO7Image, LEGO8Image, LEGO9Imaxge
var obstacleBoxingGroup, obstacleJokerGroup, obstacleVampireGroup
var startButton, startButtonImage
var invisbleGround, invisibleCollider
var gameOver, gameOverImage, gameOver2, gameOver2Image
var winner, winnerImage
var restart, restartImage
var score=0
var LEGO1Group, LEGO2Group,  LEGO3Group,   LEGO4Group,  LEGO5Group,  LEGO6Group,  LEGO7Group,  LEGO8Group,  LEGO9Group 
var counter = 0
var road1cnt = 0
function preload() {
	road1Image=loadImage("Road(background).jpg")
	road2Image=loadImage("city_road_background.jpg")
	road3Image=loadImage("forest_road_background.jpg") 
	road4Image=loadImage("night_road_background.jpg")
	road5Image=loadImage("road2_background.jpg")
	heroBatmanImage=loadImage("batman_side_view.png")
	obstacleJokerImage=loadImage("123.png")
	obstacleBoxingImage=loadImage("1234.png")
	obstaclevampireImage=loadImage("vampire.png")
	heroBatmanImage1=loadImage("side_view4.jpg")
	startButtonImage=loadImage("Start.png")
	gameOverImage=loadImage("gameOver.jpg")
	gameOver2Image=loadImage("Game_over_2.png")
	LEGO1Image=loadImage("blue_lego.png")
	LEGO2Image=loadImage("blue_lego1.png")
	LEGO3Image=loadImage("green_lego.png")
	LEGO4Image=loadImage("green_lego1.png")
	LEGO5Image=loadImage("lego_ball.png")
	LEGO6Image=loadImage("multi_legos.png")
	LEGO7Image=loadImage("red_lego.png")
	LEGO8Image=loadImage("yellow_lego.png")
	//LEGO6Image=loadImage("legos_all.jpg")
	level1Image=loadImage("level1Completed.jpg")
	level2Image=loadImage("level2Completed.jpg")
	level3aImage=loadImage("level3a-lat.png")
	level3bImage=loadImage("level3b.jpg")
	level1StartImage=loadImage("level1.jpg")
	level2StartImage=loadImage("level2.jpg")
	level3StartImage=loadImage("level3.jpg")   
	winnerImage=loadImage("winner2.jpg")
}
function setup() {
	createCanvas(400, 400);
	obstacleJokerGroup=new Group()
	obstacleBoxingGroup=new Group()
	obstacleVampireGroup=new Group()
	LEGO1Group=new Group()
	LEGO2Group=new Group()
	LEGO3Group=new Group()
	LEGO4Group=new Group()
	LEGO5Group=new Group()
	LEGO6Group=new Group()
	LEGO7Group=new Group()
	LEGO8Group=new Group()
	//LEGO9Group=new Group()
	invisibleGround=createSprite(200,  380, 400,40) 
	invisibleGround.visible=false
	invisibleCollider=createSprite(200, 100, 400, 30)
	invisibleCollider.visible=false
	score=0
}
function draw() {
  if (road1cnt == 1) {
	if(road1.x < 30 ){
	road1.x=  width/2
	count=1
	}
	if(road4.x < 30 ){
	road4.x=  width/2
	count=1
	}
	if(road5.x < 30 ){
	road5.x=  width/2
	count=1
	}
  }
  
  background("lightblue");
 // console.log("counter 0 :"+counter)
  if (counter ==0) {
	startButtonSprite()
	counter = 1
	console.log("counter 1 :"+counter)
  }
  if(mousePressedOver(startButton) && counter==1){
    startButton.destroy()
	spawnRoadsSprite1()
	spawnRoadsSprite4()
	spawnRoadsSprite5()
    counter = 2
	console.log("destroy start")
    console.log("counter 2 :"+counter)
  }
  
  if (mousePressedOver(road1) && counter==2){
	road1.destroy()
	road4.destroy()
	road5.destroy()
	levelStartSprite1()
    counter = 3
	console.log("destroy road4 & 5")
    console.log("counter 3 :"+counter)
  }
  if (mousePressedOver(road4) && counter==2){
    road1.destroy()
	road4.destroy()
	road5.destroy()
	levelStartSprite1()
    counter = 4
	console.log("destroy road1 & 5")
    console.log("counter 4 :"+counter)
  }
  if (mousePressedOver(road5) && counter==2){
	road1.destroy()
	road4.destroy()
	road5.destroy()
    levelStartSprite1()
    counter = 5
	console.log("destroy road4 & 1")
    console.log("counter 5 :"+counter)
   }
  if (mousePressedOver(level1Start) && counter==3){
	spawnRoadsSprite1()
	road1cnt = 1
	road1.x=200
	road1.y=200
	road1.width=400
	road1.height=400
	road1.scale=3 //2.499
    road1.velocityX=-3 
    level1Start.destroy()
	heroBatmanSprite()
	
    counter = 6
	console.log("inside road1 level1Start")
    console.log("counter 6 :"+counter)
  }
  if (mousePressedOver(level1Start) && counter==4){
	spawnRoadsSprite4()
	road1cnt = 1
	road4.x=200
	road4.y=200
	road4.width=400
	road4.height=400
	road4.scale=1.6
    road4.velocityX=-3 
    level1Start.destroy()
	heroBatmanSprite()
	
    counter = 7
	console.log("inside road4 level1Start")
    console.log("counter 7 :"+counter)
  }
  if (mousePressedOver(level1Start) && counter==5){
	spawnRoadsSprite5()
	road1cnt = 1
	road5.x=200
	road5.y=200
	road5.width=400
	road5.height=400
	road5.scale= 1.6
    road5.velocityX=-3 
    level1Start.destroy()
	heroBatmanSprite()
	
    counter = 8
	console.log("inside road4 level1Start")
    console.log("counter 8 :"+counter)
  }
  if(mousePressedOver(level1) && road1cnt==2) {
	  score = 0
	  level1.destroy()
	  levelStartSprite2()
	  console.log("inside level1completed")
	  counter = 9
	  console.log("counter 9 :"+counter)
  }
  if (mousePressedOver(level2Start) && counter==9){
	level2Start.destroy()
	spawnRoadsSprite1()
	road1cnt = 1
	road1.x=200
	road1.y=200
	road1.width=400
	road1.height=400
	road1.scale=3 //2.499
    road1.velocityX=-3 
    //level2Start.destroy()
	heroBatmanSprite()
	
    counter = 10
	console.log("inside level2Start")
    console.log("counter 10 :"+counter)
  }

  if(mousePressedOver(level2) && road1cnt==3) {
	score = 0
	level2Start.destroy()
	level2.destroy()
	levelStartSprite3()
	console.log("inside level2 completed")
	counter = 11
	console.log("counter 11 :"+counter)
  }

  if (mousePressedOver(level3Start) && counter==11){
	spawnRoadsSprite1()
	road1cnt = 1
	road1.x=200
	road1.y=200
	road1.width=400
	road1.height=400
	road1.scale=3 //2.499
    road1.velocityX=-3 
    level3Start.destroy()
	heroBatmanSprite()
	
    counter = 12
	console.log("inside level3Start")
    console.log("counter 12 :"+counter)
  }
  
  if(keyDown("space") && heroBatman.y >= 200 && road1cnt==1) {
      heroBatman.velocityY = -12;
      }
  if(road1cnt==1){
	if (frameCount%320==0){
	spawnLEGOS()
	}
	if (frameCount%400==0){
	spawnObstacles()
	}
	heroBatman.velocityY = heroBatman.velocityY + 0.3  

	heroBatman.setCollider("rectangle",0,0,100,heroBatman.height);
	//heroBatman.debug=true
	heroBatman.collide(invisibleGround )
	if (heroBatman.isTouching(invisibleCollider)){
	 heroBatman.velocityY=1
	}
  rand=Math.round(random(1,6))
  if ((heroBatman.isTouching(obstacleJokerGroup))&&(rand==1)){
	 heroBatman.destroy()
	 gameOverSprite()
	 obstacleJoker.velocityX=0
  }
  if ((heroBatman.isTouching(obstacleJokerGroup))&&(rand==2)){
	heroBatman.destroy()
	gameOverSprite()
	obstacleJoker.velocityX=0
  }
  if ((heroBatman.isTouching(obstacleVampireGroup))&&(rand==3)){
	heroBatman.destroy()
	gameOverSprite()
	obstacleVampire.velocityX=0
  }
  if ((heroBatman.isTouching(obstacleVampireGroup))&&(rand==4)){
	heroBatman.destroy()
	gameOverSprite()
	obstacleVampire.velocityX=0
	//console.log("a")
  }
  if((heroBatman.isTouching(obstacleBoxingGroup))&&(rand==5)){
	heroBatman.destroy()
	gameOverSprite()
	obstacleBoxing.velocityX=0
	//console.log("a")
  }
  if ((heroBatman.isTouching(obstacleBoxingGroup))&&(rand==6)){
	heroBatman.destroy()
	gameOverSprite()
	obstacleBoxing.velocityX=0
	//console.log("a")
  }
  if (heroBatman.isTouching(LEGO1Group)){
	LEGO1Group.destroyEach()
	score = score +1
	console.log("LEGO1Groupscore")
  }
  if (heroBatman.isTouching(LEGO2Group)){
	LEGO2Group.destroyEach()
	score = score +1
	console.log("LEGO2Groupscore")
  }
  if (heroBatman.isTouching(LEGO3Group)){
	LEGO3Group.destroyEach()
	score = score +1
	console.log("LEGO3Groupscore")
  }
  if (heroBatman.isTouching(LEGO4Group)){
	LEGO4Group.destroyEach()
	score = score +1
	console.log("LEGO4Groupscore")
  }
  if (heroBatman.isTouching(LEGO5Group)){
	LEGO5Group.destroyEach()
	score = score +6
	console.log("LEGO5Groupscore")
  }
  if (heroBatman.isTouching(LEGO6Group)){
	LEGO6Group.destroyEach()
	score = score +5
	console.log("LEGO6Groupscore")           
  }
  if (heroBatman.isTouching(LEGO7Group)){
	LEGO7Group.destroyEach()
	score = score +1
	console.log("LEGO7Groupscore")
  }
  if (heroBatman.isTouching(LEGO8Group)){
	LEGO8Group.destroyEach()
	score = score +1
	console.log("LEGO8Groupscore")
  }
}
 // rand=Math.round
  if (score>=15 && (counter==6 || counter==7 || counter==8)){
	score=0
	levelCompleteSprite(1)
	heroBatman.destroy()
	LEGO1Group.destroyEach()
	LEGO2Group.destroyEach()
	LEGO3Group.destroyEach()
	LEGO4Group.destroyEach()
	LEGO5Group.destroyEach()
	LEGO6Group.destroyEach()
	LEGO7Group.destroyEach()
	LEGO8Group.destroyEach()
	obstacleBoxingGroup.destroyEach()
	obstacleJokerGroup.destroyEach()
	obstacleVampireGroup.destroyEach()
	console.log("score 1")
  }
  if (score>=30 && counter==10){  
	score=0
	levelCompleteSprite(2)
	heroBatman.destroy()
	LEGO1Group.destroyEach()
	LEGO2Group.destroyEach()
	LEGO3Group.destroyEach()
	LEGO4Group.destroyEach()
	LEGO5Group.destroyEach()
	LEGO6Group.destroyEach()
	LEGO7Group.destroyEach()
	LEGO8Group.destroyEach()
	obstacleBoxingGroup.destroyEach()
	obstacleJokerGroup.destroyEach()
	obstacleVampireGroup.destroyEach()   
	console.log("score 2")
  }
  rand=Math.round(random(1,2))
  if ((score>=50)&&(rand==1)){
	winnerSprite()
	score=0
	//levelCompleteSprite(3)
	heroBatman.destroy()
	LEGO1Group.destroyEach()
	LEGO2Group.destroyEach()
	LEGO3Group.destroyEach()
	LEGO4Group.destroyEach()
	LEGO5Group.destroyEach()
	LEGO6Group.destroyEach()
	LEGO7Group.destroyEach()
	LEGO8Group.destroyEach()
	obstacleBoxingGroup.destroyEach()
	obstacleJokerGroup.destroyEach()
	obstacleVampireGroup.destroyEach()   
	console.log("score 3a")
  }
  if ((score>=50)&&(rand=2)){
    winnerSprite()
	score=0
	//levelCompleteSprite(3)
	heroBatman.destroy()
	LEGO1Group.destroyEach()
	LEGO2Group.destroyEach()
	LEGO3Group.destroyEach()
	LEGO4Group.destroyEach()
	LEGO5Group.destroyEach()
	LEGO6Group.destroyEach()
	LEGO7Group.destroyEach()
	LEGO8Group.destroyEach()
	obstacleBoxingGroup.destroyEach()
	obstacleJokerGroup.destroyEach()
	obstacleVampireGroup.destroyEach()   
	console.log("score 3b")
  }
  drawSprites()
  if (road1cnt == 1) {
	  scoreSprite()
  }
}
function spawnObstacles(){
 rand=Math.round(random(1,3))
  if (rand==1){
	obstacleJoker=createSprite(400, 300, 10, 10)
	//obstacleJoker.debug=true
	obstacleJoker.addImage("123.png", obstacleJokerImage)
	obstacleJoker.scale=0.3
	obstacleJoker.velocityX=-1
	obstacleJokerGroup.add(obstacleJoker)
  }
  if (rand==2){
	obstacleBoxing=createSprite(400, 300, 10, 10)
	//obstacleBoxing.debug=true
	obstacleBoxing.addImage("1234.png", obstacleBoxingImage)
	obstacleBoxing.scale=0.3
	obstacleBoxing.velocityX=-1.5
	obstacleBoxingGroup.add(obstacleBoxing)
  }
   if (rand==3){
	obstacleVampire=createSprite(400, 300, 10, 10)
	//obstacleVampire.debug=true
	obstacleVampire.addImage("1234.png", obstaclevampireImage)
	obstacleVampire.scale=0.3
	obstacleVampire.velocityX=-1.3
	obstacleVampireGroup.add(obstacleVampire)
  }
 }

 function startButtonSprite(){
	startButton=createSprite(200, 100,  10, 10)
	startButton.addImage("Start.png", startButtonImage)
	startButton.scale=0.6
}

function spawnRoadsSprite1(){
	road1 = createSprite(100, 200)
	road1.addImage("Road(background).jpg", road1Image)
	road1.scale=0.3
	if(road1.x < 30 ){
		road1.x=  width/2
		count = 1
	}
}

function spawnRoadsSprite2(){
	road2 = createSprite(100, 100)
	road2.addImage("city_road_background.jpg", road2Image) 
	road2.scale=0.3
}

function spawnRoadsSprite3(){
	road3 = createSprite(300, 100)
	road3.addImage("forest_road_background.jpg", road3Image) 
	road3.scale=0.3
}

function spawnRoadsSprite4(){
	road4 = createSprite(100, 100)
	road4.addImage("night_road_background.jpg", road4Image) 
	road4.scale=0.3
	if(road4.x < 30 ){
		road4.x=  width/2
		count = 1
	}
}

function spawnRoadsSprite5(){
	road5 = createSprite(100, 300)
	road5.addImage("road2_background.jpg", road5Image) 
	road5.scale=0.3	
	if(road5.x < 30 ){
		road5.x=  width/2
		count = 1
	}
}

function levelStartSprite1(){
	level1Start=createSprite(300, 100, 10 ,10)
	level1Start.addImage("level1.jpg",  level1StartImage)
}
function levelStartSprite2(){
	level2Start=createSprite(300, 200, 10 ,10)
	level2Start.addImage("level2.jpg",  level2StartImage)
	//counter = 4
}
function levelStartSprite3(){
	level3Start=createSprite(300, 300, 10 ,10)
	level3Start.addImage("level3.jpg",  level3StartImage)
}
function levelCompleteSprite(l){
	if (l==1){
		level1=createSprite(200,200) 
		level1.addImage("level1Completed.jpg", level1Image)
		road1cnt=2
		//levelStartSprite2()
	}
	if (l==2){
		level2=createSprite(200,200) 
		level2.addImage("level2Completed.jpg", level2Image)
		level2.scale=0.23
		road1cnt=3
		level2Start.destroy()
		console.log("level2start destroy inside level2 complete")
		level1.destroy()
	}
	if (l==3){
		level3a=createSprite(200,200, 1, 1) 
		//level1.addImage("level1Completed.jpg", level1Image)
		level3b=createSprite(200,200, 1, 1)
		road1cnt=4
		level3Start.destroy()
		level2.destroy()
	}
}

function heroBatmanSprite(){
	heroBatman=createSprite(100, 300, 10, 10)
	heroBatman.addImage("batman_side_view.png",heroBatmanImage )
	heroBatman.scale=0.3
}

function gameOverSprite(){
	var r = Math.round(random(1,2))
	if (r==1){
		gameOver=createSprite(200, 200, 10, 10)
		gameOver.addImage("gameOver.jpg", gameOverImage)
	}
	if (r==2) {
		gameOver2=createSprite(200, 200, 10, 10)
		gameOver2.addImage("Game_over_2.png", gameOver2Image)
		gameOver2.scale=0.6
	}
}

function winnerSprite(){
	winner=createSprite(200, 200, 10, 10)
	winner.addImage("winner2.jpg",winnerImage )
	winner.scale=1.6
}

function scoreSprite() {
	fill("green ")
	text("Score: "+ score, 300,50);
}

function spawnLEGOS(){
rand=Math.round(random(1,8))
  if (rand==1){
	LEGO1=createSprite(500, 350, 10, 10)
	//LEGO1.debug=true
	LEGO1.addImage("blue_lego.png", LEGO1Image)
	LEGO1.scale=0.3
	LEGO1.velocityX=-1
	LEGO1Group.add(LEGO1)
  }
  if (rand==2){
	LEGO2=createSprite(500, 300, 10, 10)
	//LEGO2.debug=true
	LEGO2.addImage("blue_lego1.png", LEGO2Image)
	LEGO2.scale=0.3
	LEGO2.velocityX=-1
	LEGO2Group.add(LEGO2)
  }
   if (rand==3){
	LEGO3=createSprite(500, 300, 10, 10)
	//LEGO3.debug=true
	LEGO3.addImage("green_lego.png", LEGO3Image)
	LEGO3.scale=0.3
	LEGO3.velocityX=-1
	LEGO3Group.add(LEGO3)
  }
    if (rand==4){
	LEGO4=createSprite(500, 300, 10, 10)
	//LEGO4.debug=true
	LEGO4.addImage("green_lego1.png", LEGO4Image)
	LEGO4.scale=0.3
	LEGO4.velocityX=-1
	LEGO4Group.add(LEGO4)
}
   if (rand==5){
	LEGO5=createSprite(500, 300, 10, 10)
	//LEGO5.debug=true
	LEGO5.addImage("lego_ball.png", LEGO5Image)
	LEGO5.scale=0.3
	LEGO5.velocityX=-1
	LEGO5Group.add(LEGO5)
}
   if (rand==6){
	LEGO6=createSprite(500, 300, 10, 10)
	//LEGO6.debug=true
	LEGO6.addImage("multi_legos.png", LEGO6Image)
	LEGO6.scale=0.3
	LEGO6.velocityX=-1
	LEGO6Group.add(LEGO6)
}
   if (rand==7){
	LEGO7=createSprite(500, 300, 10, 10)
	//LEGO7.debug=true
	LEGO7.addImage("red_lego.png", LEGO7Image)
	LEGO7.scale=0.3
	LEGO7.velocityX=-1
	LEGO7Group.add(LEGO7)  
}
 if (rand==8){
	LEGO8=createSprite(500, 300, 10, 10)
	//LEGO8.debug=true
	LEGO8.addImage("yellow_lego.png", LEGO8Image)
	LEGO8.scale=0.3
	LEGO8.velocityX=-1
	LEGO8Group.add(LEGO8)
}
}