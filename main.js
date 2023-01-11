lips_x=0
lips_y=0 


function preload(){
lipstick = loadImage("https://i.postimg.cc/7PccTZ1j/download-removebg-preview.png")
}

function setup(){
    canvas=createCanvas(400,400);
canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);



}

function take_snapshot(){
    save("myfilter_img.png")
}

function modelLoaded(){
    console.log("Posenet is loaded.")

}

function gotPoses(results){
if(results.length>0){
console.log(results);

lips_x =  results[0].pose.nose.x+35;
lips_y =  results[0].pose.nose.y+60;

}

}


function draw(){
    image(video,0,0,400,400);
   // fill(255,0,0);
    //stroke(0,0,0);
    //circle(nose_x,nose_y,20); 
image(lipstick,lips_x,lips_y,50,40);




}