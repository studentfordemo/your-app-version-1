var a,logoimg ,button,b,bimg 
var score = 0;
var START = 0;
var PLAY = 1; 
var QUIZ =  2;
var gameState = START;
var database;
var chatofperson1;
 function preload () {
   logoimg=loadImage("logo.png") 
   bimg = loadImage("i.jpg") 
   qimg1 = loadImage("q1 (1).png")
   qimg2 = loadImage("q2 (1).png") 
   qimg3 = loadImage("q3 (1).png") 
   qimg4 = loadImage("q4 (1).png")
   qimg5 = loadImage("q5 (1).jpg") 
   h=loadImage("home.jpg") 
   quizimage = loadImage("quiz.jpg") 
   proimg = loadImage("pro.png")
   tipsimg = loadImage("b1.jpg") 
   chatimg = loadImage("chat.jpg") 
   yesimg=loadImage("yes.jpg");
   noimg=loadImage("no.jpg");
   maybeimg=loadImage("maybe.jpg");
 }
function setup() {
  createCanvas(400,600); 
  database = firebase.database();

  a=createSprite(200, 300, 50, 50); 
  a.addImage("a1",logoimg)  
  a.scale = 0.35; 


  b=createSprite(200, 120, 50, 50); 
  b.addImage("b1",bimg)  
  b.scale = 0.35;

  button = createButton("Get Started :)"); 
  button.position (150,390); 

  c=createSprite(200, 120, 1, 1); 
  quiz= createSprite(80,320,1,1);
  b1 = createSprite(120,420,1,1); 
  b2 = createSprite(60,500,1,1); 
  b3 = createSprite(100,550,1,1); 

  yes1=createSprite(310,280,1,1);
  no1=createSprite(310,380,1,1);
  maybe1=createSprite(310,460,1,1);

  yes2=createSprite(310,280,1,1);
  no2=createSprite(310,380,1,1);
  maybe2=createSprite(310,460,1,1);

  yes3=createSprite(310,280,1,1);
  no3=createSprite(310,380,1,1);
  maybe3=createSprite(310,460,1,1);

  yes4=createSprite(310,280,1,1);
  no4=createSprite(310,380,1,1);
  maybe4=createSprite(310,460,1,1);

  yes5=createSprite(310,280,1,1);
  no5=createSprite(310,380,1,1);
  maybe5=createSprite(310,460,1,1);

  q1 = createSprite(200,100,1,1); 
  q2 = createSprite(200,100,1,1); 
  q3 = createSprite(200,100,1,1); 
  q4 = createSprite(200,100,1,1); 
  q5 = createSprite(200,100,1,1); 
  input=createInput();

}

function draw() {   

if(gameState === START) { 
  background("#CB9BE2");   

  fill("black")
  textSize(20) 
  //textFont("Black Jack")
  text("Learn how to stop wasting your time &",20,450) 
  text("Develop your personality",20,470)

 

  
  button.mousePressed (()=>{
    gameState = PLAY;
      })
} 
 if(gameState === PLAY) {
    background("#BEF0F4") 
    a.destroy();
    b.destroy();
   button.hide();

    c.scale = 0.45;
    c.addImage("h1",h)  
    
    quiz.scale=0.15;
  quiz.addImage("quiz",quizimage);

    b1.scale=0.1 
    b1.addImage("p",proimg)

   b2.addImage("c",chatimg); 
   b2.scale=0.15
     
    b3.addImage("t",tipsimg);
    b3.scale=0.2;   
   if(mousePressedOver(quiz)){
     gameState=QUIZ
   }
   
  if(mousePressedOver(b2)){
    gameState="chat";
    console.log("hi")
    
   }
  } 


  if(gameState === QUIZ) { 
    background("#F6B6D1")
    c.destroy();
    quiz.destroy();
    b1.destroy();
    b2.destroy();
    b3.destroy();

    yes1.addImage(yesimg);
    yes1.scale=0.2;

    no1.addImage(noimg);
    no1.scale=0.08;

    maybe1.addImage(maybeimg);
    maybe1.scale=0.18;

    q1.addImage("q1",qimg1) 

  

    //q3.addImage("q3",qimg3) 

    //q4.addImage("q4",qimg4) 

//q5.addImage("q5",qimg5) 
    
    if(mousePressedOver(yes1)){
   q1.destroy();
   count=1;
   q2.addImage("q2",qimg2) ;
   yes1.destroy();
   no1.destroy();
   maybe1.destroy();

   yes2.addImage(yesimg);
    yes2.scale=0.2;
    yes2.x=200;

    no2.addImage(noimg);
    no2.scale=0.08;
    no2.x=200;

    maybe2.addImage(maybeimg);
    maybe2.scale=0.18;
    maybe2.x=200;
    }

    if(mousePressedOver(yes2)){
      q2.destroy();
      count=2;
      q3.addImage("q3",qimg3) ;
      yes2.destroy();
      no2.destroy();
      maybe2.destroy();
   
      yes3.addImage(yesimg);
       yes3.scale=0.2;
   
       no3.addImage(noimg);
       no3.scale=0.08;
   
       maybe3.addImage(maybeimg);
       maybe3.scale=0.18;
       }
  
       if(mousePressedOver(yes3)){
        q3.destroy();
        count=3;
        q4.addImage("q4",qimg4) ;
        yes3.destroy();
        no3.destroy();
        maybe3.destroy();
     
        yes4.addImage(yesimg);
         yes4.scale=0.2;
         yes4.x=200;
     
         no4.addImage(noimg);
         no4.scale=0.08;
         no4.x=200;

         maybe4.addImage(maybeimg);
         maybe4.scale=0.18;
         maybe4.x=200;
         }
         
       if(mousePressedOver(yes4)){
        q4.destroy();
        count=4;
        q5.addImage("q5",qimg5) ;
        yes4.destroy();
        no4.destroy();
        maybe4.destroy();
     
        yes5.addImage(yesimg);
         yes5.scale=0.2;
      
         no5.addImage(noimg);
         no5.scale=0.08;
        

         maybe5.addImage(maybeimg);
         maybe5.scale=0.18;
       
         }
         if(mousePressedOver(yes5)){
          q5.destroy();
          count=5;
          yes5.destroy();
          no5.destroy();
          maybe5.destroy();
          gameState="tips"
         }  
         if(gameState==="tips"){
           background("#CB9BE2")
         }
         
  }
  if(gameState==="chat"){
    background("chocolate") ;
    c.destroy();
    quiz.destroy();
    b1.destroy();
    b2.destroy();
    b3.destroy();

   
    
    input.position(200,200);
msg=input.value();
updatechatinfo(msg)
   }
getchat();


  drawSprites(); 
 
} 
function updatechatinfo(msg){
  database.ref('person1').set({
chat:msg
  })
}
function getchat(){
  database.ref('person1/chat').on("value",(data)=>{
    chatofperson1:data.val();
  })

}
