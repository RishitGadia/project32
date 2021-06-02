const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // add condition to check if any background image is there to a

    // write code to display time in correct format here


}

async function getBackgroundImg(){
        var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
        var responseJSON = await response.json();
      
        var time=responseJSON.datetime
        var hour = time.slice(11,13);
        if(hour>=6&& hour<=9){
            bg="sunrise1.png" 
        } 
        if(hour>=9&& hour<=10){
            bg="sunrise2.png" 
        } 
        if(hour>=10&& hour<=11){
            bg="sunrise3.png" 
        } 
        if(hour>=12&& hour<=14){
            bg="sunrise4.png" 
        } 
        if(hour>=14&& hour<=16){
            bg="sunrise5.png" 
        } 

        if(hour>=16&& hour<=17){
            bg="sunrise6.png" 
        } 
        if(hour>=17&& hour<=18){
            bg="sunset7.png" 
        } 
        if(hour>=18&& hour<=19){
            bg="sunset8.png" 
        } 

        if(hour>=19&& hour<=20){
            bg="sunset9.png" 
        } 
        if(hour>=20&& hour<=21){
            bg="sunset10.png" 
        } 
        if(hour>=21&& hour<=22){
            bg="sunset11.png" 
        } 
        if(hour>=22&& hour<=6){
            bg="sunset12.png" 
        } 
    backgroundImg=loadImage(bg);
   }
