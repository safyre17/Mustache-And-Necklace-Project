function preload(){
mustache = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
necklace = loadImage("https://i.postimg.cc/SNK77Hsx/jewellery-necklace-png-14.png");
}

function setup(){
   canvas = createCanvas (400,400);
   canvas.center();
   video = createCapture(VIDEO);
   video.size(400,400);
   video.hide();

   poseNet=ml5.poseNet(video, modelLoaded);
   poseNet.on('pose',gotPoses);
}

nosex = 0
nosey = 0

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        nosex = results[0].pose.nose.x - 23;
        nosey = results[0].pose.nose.y - 0;
        console.log("nose position x = " + nosex);
        console.log("nose position y = " + nosey);
    }
}

function modelLoaded(){
    console.log("Model Loaded!")
}

function draw(){
image(video, 0, 0, 400, 400);
image(mustache, nosex, nosey, 50, 50);
image(necklace, nosex - 50, nosey + 50, 150, 150);
}

function takesnapshot(){
    save("mustacheandnecklace.png");
}