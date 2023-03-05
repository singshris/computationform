function setup() {
  createCanvas(600, 600);
  strokeWeight(3);
  frameRate(3);
  background(220);
}

function draw() {
  
  
  for(i=0;i<=width; i=i+100){
    // fill(random(i,255),random(0,i),random(133));
    fill(random(0,100), random(100,200), random(200,255))
  rect(i,0,100,50);
  }
    for(i=-50;i<=width; i=i+100){
   fill(random(100,200), random(200,255), random(0,100))
  rect(i,50,100,50);
  }
  
  for(i=0;i<=width; i=i+100){
    fill(random(200,255),random(0,100),random(100,200));
  rect(i,100,100,50);
  }
  
   for(i=-50;i<=width; i=i+100){
    fill(random(0,55),random(85,270),random(90,250));
  rect(i,150,100,50);
  }
  
  // -------------------------------------------- //
  for(i=0;i<=width; i=i+100){
    // fill(random(i,255),random(0,i),random(133));
    fill(random(0,100), random(100,200), random(200,255))
  rect(i,200,100,50);
  }
    for(i=-50;i<=width; i=i+100){
   fill(random(100,200), random(200,255), random(0,100))
  rect(i,250,100,50);
  }
  
  for(i=0;i<=width; i=i+100){
    fill(random(200,255),random(0,100),random(100,200));
  rect(i,300,100,50);
  }
  
   for(i=-50;i<=width; i=i+100){
    fill(random(0,55),random(85,270),random(90,250));
  rect(i,350,100,50);
  }
  
for(i=0;i<=width; i=i+100){
    fill(random(200,255),random(0,100),random(100,200));
  rect(i,400,100,50);
  }
  
   for(i=-50;i<=width; i=i+100){
    fill(random(10,95),random(85,170),random(160,250));
  rect(i,450,100,50);
  }
  
}