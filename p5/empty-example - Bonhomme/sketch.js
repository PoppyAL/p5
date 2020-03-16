//--------ROBOT QUI MARCHE

function setup() {
  createCanvas(800, 600);

  c1 = color(0,0,0);
  c2 = color(255,255,255);
  c3 = color(60,60,60);
  c4 = color(140,140,140);
}

//X Y des nuages :
let aN = 0;
let bN = 0;
let b = 0;

//dégradé
const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3, c4;

//ciel
let angleCiel = 0;
let evol = 0.4;
let evolN = 0.6;

//Robot
let angleBG = 29;
let angleBD = -29;
let angleJG = -29;
let angleJD = 29;
let evolBG = 4;
let evolBD = 4;
let evolJG = 4;
let evolJD = 4;

//montagnes
let mX = 0;
let mY = -75;
let evolMX = .334;
let evolMY = .334;

function draw(){

  angleMode('degrees');
  strokeWeight(5);
  strokeJoin(ROUND);

  push ();

  translate (400,400);
  rotate (angleCiel);

  function setGradient(x, y, w, h, c1, c2, axis) {
    noFill();
    if (axis === Y_AXIS) {
      for (let i = y; i <= y + h; i++) {
        let inter = map(i, y, y + h, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x + w, i);
      }
    } else if (axis === X_AXIS) {
      for (let i = x; i <= x + w; i++) {
        let inter = map(i, x, x + w, 0, 1);
        let c = lerpColor(c1, c2, inter);
        stroke(c);
        line(i, y, i, y + h);
      }
    }
  }

  setGradient(-800, -800, 1600, 1600, c1, c2, Y_AXIS);
  
  //lunes
  stroke(200,200,200);
  fill(color(200,200,200));
  ellipse (0, -250, 40, 40);
  ellipse (-100, -300, 75, 75);
  stroke(255,255,255);
  noFill ();
  arc (0, -250, 30, 30, 280, HALF_PI);
  arc (-100, -300, 55, 55, 280, HALF_PI);

  //étoiles
  stroke(255,255,255);
  point (-420, -80);
  point (-400, -280);
  point (-380, -200);
  point (-350, -150);
  point (-300, -70);
  point (-260, -350);
  point (-240, -300);
  point (-200, -180);
  point (-160, -220);
  point (-100, -80);
  point (-70, -150);
  point (-40, -200);
  point (-0, -370);
  point (40, -260);
  point (70, -400);
  point (-70, -350);
  point (-40, -400);
  point (-0, -40);
  point (40, -350);
  point (70, -300);
  point (100 , -290);
  point (120, -100);
  point (-40, -300);
  point (-0, -470);
  point (40, -360);
  point (70, -200);
  point (100 , -310);
  point (120, -200);
  point (160 , -175);
  point (190 , -200);
  point (190 , -300);
  point (220 , -50);
  point (270 , -255);
  point (300, -95);
  point (320,-100 );
  point (350, -180);
  point (380, -220);
  point (400, -30);
  point (420, -160);

  //soleil
  stroke (255,255,255);
  fill(color(255,255,255))
  ellipse (0, 275, 75, 75);
  ellipse (100, 300, 30, 30);

  //tour du soleil grand
  strokeWeight(2);
  noFill();
  arc (0, 275, 95, 95, 20, 120);
  arc (0, 275, 95, 95, 220, 350);
  arc (0, 275, 110, 110, 0, 180);
  arc (0, 275, 110, 110, 170, 280);
  arc (0, 275, 125, 125, 70,170);
  arc (0, 275, 125, 125, 200,300);
  arc (0, 275, 125, 125, -20,40);
  
  //tour du soleil petit
  arc (100, 300, 45, 45, 20, 110);
  arc (100, 300, 45, 45, 220, 340);
  arc (100, 300, 60, 60, 0, 170);
  arc (100, 300, 60, 60, 170, 260);
  arc (100, 300, 75, 75, 70, 160);
  arc (100, 300, 75, 75, 200, 290);
  arc (100, 300, 75, 75, -20, 30);


  pop ();

  angleCiel += evol;

  //nuages
  stroke (225,225,225);
  fill(color(225,225,225))

  ellipse (-1500+aN, 300+2.5*bN, 40, 40);
  ellipse (-1530+aN, 300+2.5*bN, 20, 20);
  ellipse (-1480+aN, 300+2.5*bN, 20, 20);
  ellipse (-1510+aN, 300+2.5*bN, 30, 30);

  ellipse (-1000+aN, 300-2*bN, 40, 40);
  ellipse (-1030+aN, 300-2*bN, 20, 20);
  ellipse (-980+aN, 300-2*bN, 20, 20);
  ellipse (-1010+aN, 300-2*bN, 30, 30);
  
  ellipse (-640+aN, 300+2*bN, 40, 40);
  ellipse (-600+aN, 300+2*bN, 20, 20);
  ellipse (-660+aN, 300+2*bN, 20, 20);
  ellipse (-620+aN, 300+2*bN, 30, 30);
  
  ellipse (-540+aN, 175-bN, 40, 40);
  ellipse (-500+aN, 175-bN, 20, 20);
  ellipse (-560+aN, 175-bN, 20, 20);
  ellipse (-520+aN, 175-bN, 30, 30);

  ellipse (-240+aN, 175+1.5*bN, 40, 40);
  ellipse (-200+aN, 175+1.5*bN, 20, 20);
  ellipse (-260+aN, 175+1.5*bN, 20, 20);
  ellipse (-220+aN, 175+1.5*bN, 30, 30);

  ellipse (-40+aN, 220-bN, 40, 40);
  ellipse (-0+aN, 220-bN, 20, 20);
  ellipse (-60+aN, 220-bN, 20, 20);
  ellipse (-20+aN, 220-bN, 30, 30);

  aN += 1;
  if(aN>1955){
    aN = 0;
  }

  bN += evolN;
  if(bN>30){
    evolN = -evolN;
  } else if (bN<0){
    evolN = -evolN;
  }

  
  //sol
  stroke(127,127,127);
  setGradient(0, 400, 800, 200, c3, c4, Y_AXIS);

  stroke(60);
  fill(color(60));

  mX += evolMX;
  if(mX>75){
    evolMX = -evolMX
  } else if (mX<-75){
    evolMX = -evolMX;
  }

  mY += evolMY;

  if(mY>75){
    evolMY = -evolMY
  } else if (mY<-75){
    evolMY = -evolMY;
  }

  if (mY<=0){
    strokeWeight(0);
    noFill();
  } else {
    strokeWeight(5);
    fill(color(60));
  }
  
  //ombres qui bougent
  triangle(50-b, 405, 100-b, 405, 75+mX-b, 405+mY);
  triangle(200-b, 415, 300-b, 415, 250+mX-b, 415+mY);
  triangle(300-b, 400, 350-b, 400, 325+mX-b, 400+mY);
  triangle(400-b, 410, 550-b, 410, 475+mX-b, 410+mY);
  triangle(600-b, 400, 650-b, 400, 625+mX-b, 400+mY);

  triangle(850-b, 405, 900-b, 405, 875+mX-b, 405+mY);
  triangle(1000-b, 415, 1100-b, 415, 1050+mX-b, 415+mY);
  triangle(1100-b, 400, 1150-b, 400, 1125+mX-b, 400+mY);
  triangle(1200-b, 410, 1350-b, 410, 1275+mX-b, 410+mY);
  triangle(1400-b, 400, 1450-b, 400, 1425+mX-b, 400+mY);

  //montagnes
  stroke(140,140,140);
  strokeWeight(5);
  fill(color(150,150,150));
  triangle(50-b, 405, 100-b, 405, 75-b, 350);
  triangle(200-b, 415, 300-b, 415, 250-b, 300);
  triangle(300-b, 400, 350-b, 400, 325-b, 350);
  triangle(400-b, 410, 550-b, 410, 475-b, 250);
  triangle(600-b, 400, 650-b, 400, 625-b, 350);

  triangle(850-b, 405, 900-b, 405, 875-b, 350);
  triangle(1000-b, 415, 1100-b, 415, 1050-b, 300);
  triangle(1100-b, 400, 1150-b, 400, 1125-b, 350);
  triangle(1200-b, 410, 1350-b, 410, 1275-b, 250);
  triangle(1400-b, 400, 1450-b, 400, 1425-b, 350);

  b += 1;
  if(b>795){
    b = 0;
  }

  //ROBOT

  stroke(100,100,100);
  fill(color(230,230,230));

  //bras gauche
  push ();
  translate(390,260);
  rotate(-angleBG);
  rect(-10,0,20,125);
  pop ();

  //jambe gauche
  push ();
  translate(390,395);
  rotate(-angleJG);
  rect(-10,0,20,125);
  pop ();

  //corps
  rect(350,250,80,150);
  line (387,200, 387, 150);
  ellipse (387, 200, 50, 50,);
  rect(362,200,50,50);
  line (390, 233, 410, 233);
  line (393, 215, 393, 220);
  
  push();
  stroke(color(255,255,255));
  strokeWeight(10);
  line (365, 270, 365, 380);
  strokeWeight(7);
  line (372, 212, 372, 236)
  pop();

  stroke(100,100,100);

  //bras droit
  push ();
  translate(390,260);
  rotate(-angleBD);
  rect(-10,0,20,125);
  pop ();

  //jambes droit
  push ();
  translate(390, 395);
  rotate(-angleJD);
  rect(-10,0,20,125);
  pop ();

  //bras gauche
  angleBG -= evolBG;
  if(angleBG>30){
    evolBG = -evolBG;
  } else if (angleBG<-30){
    evolBG = -evolBG;
  }

  //Jambe gauche
  angleJG += evolJG;
  if(angleJG>30){
    evolJG = -evolJG;
  } else if (angleJG<-30){
    evolJG = -evolJG;
  }
  
  //bras droit
  angleBD += evolBD;

  if(angleBD>30){
    evolBD = -evolBD;
  } else if (angleBD<-30){
    evolBD = -evolBD;
  }

  //jambes droite
  angleJD -= evolJD;
  console.log(angleJD);
  if(angleJD>30){
    evolJD = -evolJD;
  } else if (angleJD<-30){
    evolJD = -evolJD;
  }
}