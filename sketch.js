var dog,sadDog,happyDog,food,database,B1,B2;



function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  database=firebase.database();
  var foodDB=database.ref('Food');

  foodDB.on("value",function(data){
    food.foodStock=data.val();
  })

  var LFed=database.ref('FeedTime');

  LFed.on("value",function(data) {
    food.lastFed=data.val();
  })

  

  food=new Food();

  B1=createButton("Add Food");
  B1.position(400,100);
  B1.mousePressed(addFood)

  B2=createButton("Feed the Dog");
  B2.position(250,100);
  B2.mousePressed(feedtheDog)

}

function draw() {
  background(46,139,87);
  
  food.display();

  stroke("black");
  fill("black");
  text("Last Fed: " + food.lastFed,600,100);

  drawSprites();
}

//function to update food stock and last fed time
function feedtheDog(){
database.ref('/').update({
  Food:food.foodStock-1,
  FeedTime:hour()
})
}

//function to add food in stock
function addFood(){
  database.ref('/') .update({
    Food:food.foodStock+1
  })

}
