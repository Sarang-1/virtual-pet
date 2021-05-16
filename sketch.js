//Create variables here
var dog,dog1,happyDog;
var database,foodS,foodStock,add,feed;
var fedTime,lastFed,foodObj;
var form,name1,name2,bottle,img;



function preload()
{
	//load images here
  dog1 = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  img = loadImage("images/food.png");
}




function setup() {
	createCanvas(600, 600);

  dog = createSprite(300,450);
  dog.addImage(dog1);
  dog.scale = 0.2;

  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value",readStock);

  bottle = createSprite(200,475);
  bottle.addImage(img);
  bottle.scale = 0.1;
  bottle.visible = false;
  

  foodObj = new food();

  form = new Form();
  form.display();
}





function draw() { 
 

  lastFed = database.ref("lastFed");
  lastFed.on("value",function(data){
    lastFed=data.val();
  });
   
  if(foodS != undefined && name1 != undefined){
  background(46,139,87);

  add = createButton("ADD FOOD");
  add.position(800,201);
  add.mousePressed(addFood);

  feed = createButton("FEED "+name1);
  feed.position(630,201);
  feed.mousePressed(feedDog);
  

drawSprites();
  //add styles here

  fill(255);
  textSize(25);
  stroke(255,0,0);
  text("Bottles remaining: "+foodS,10,210);


  if(lastFed>12){
  text("Last Fed: "+lastFed%12 + " PM",10,180);
  } else if(lastFed<12){
    text("Last Fed: "+lastFed + " AM",10,180);
  }else{
    text("Last Fed: 12 Noon",10,180);
  }


  fill(11,230,219);
  textSize(20);
  noStroke();
  text("Note: Even if you reload the site the number of bottles  ",10,30);
  text("remains the same!!!",10,60);

  textSize(30);
  fill("red");
  stroke(255,0,0);
  strokeWeight(1.5);
  text(name1,width/2-50,550);
  text("Your Pet: "+name1,300,120);
  text("Hello "+name2,20,120);

  foodObj.display();
  }
}





function readStock(data){

foodS = data.val();
foodObj.getFoodStock();
}




function feedDog(){

  bottle.visible = true;

  dog.addImage(happyDog);

if(foodS>0){
  foodS = foodS-1;
}

  database.ref("/").update({
    food: foodS,
    lastFed: hour()
  });
}





function addFood(){

  bottle.visible = false;

  dog.addImage(dog1);

  if(foodS<20){
  foodS++;
  }

  database.ref("/").update({
    food: foodS
  })
}