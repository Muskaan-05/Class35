var ball;
var database;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    var locInDb=database.ref("Ball/Position");
    locInDb.on("value",readPosition);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
 database.ref("Ball/Position").set({
     x:ball.x+x, y:ball.y+y
 })

}

function readPosition(value){
    var posInDb=value.val();
    ball.x=posInDb.x;
    ball.y=posInDb.y;
}


