//--------ROBOT QUI MARCHE

function setup() {
  createCanvas(800, 600);

  c1 = color(0,0,0);
  c2 = color(255,255,255);
  c3 = color(60,60,60);
  c4 = color(140,140,140);

  //noLoop();
}

let angleCiel = 0;
let evol = 0.4;
let evolN = 0.6;

//X Y des nuages :
let a = 0;
let b = 0;

const Y_AXIS = 1;
const X_AXIS = 2;
let c1, c2, c3, c4;

//Robot
let angleBG = 29;
let angleBD = -29;
let angleJG = -29;
let angleJD = 29;
let evolBG = 1;
let evolBD = 1;
let evolJG = 1;
let evolJD = 1;
let reflet = 0;

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
  point (-120, -320);
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

  ellipse (-1500+a, 300+2.5*b, 40, 40);
  ellipse (-1530+a, 300+2.5*b, 20, 20);
  ellipse (-1480+a, 300+2.5*b, 20, 20);
  ellipse (-1510+a, 300+2.5*b, 30, 30);

  ellipse (-1000+a, 200-2*b, 40, 40);
  ellipse (-1030+a, 200-2*b, 20, 20);
  ellipse (-980+a, 200-2*b, 20, 20);
  ellipse (-1010+a, 200-2*b, 30, 30);
  
  ellipse (-640+a, 300+2*b, 40, 40);
  ellipse (-600+a, 300+2*b, 20, 20);
  ellipse (-660+a, 300+2*b, 20, 20);
  ellipse (-620+a, 300+2*b, 30, 30);
  
  ellipse (-540+a, 175-b, 40, 40);
  ellipse (-500+a, 175-b, 20, 20);
  ellipse (-560+a, 175-b, 20, 20);
  ellipse (-520+a, 175-b, 30, 30);

  ellipse (-240+a, 175+1.5*b, 40, 40);
  ellipse (-200+a, 175+1.5*b, 20, 20);
  ellipse (-260+a, 175+1.5*b, 20, 20);
  ellipse (-220+a, 175+1.5*b, 30, 30);

  ellipse (-40+a, 220-b, 40, 40);
  ellipse (-0+a, 220-b, 20, 20);
  ellipse (-60+a, 220-b, 20, 20);
  ellipse (-20+a, 220-b, 30, 30);

  a += 1;
  if(a>1955){
    a = 0;
  }

  b += evolN;
  if(b>30){
    evolN = -evolN;
  } else if (b<0){
    evolN = -evolN;
  }

  
  //sol
  stroke(127,127,127);
  //fill(color(127,127,127));
  setGradient(0, 400, 800, 200, c3, c4, Y_AXIS);

  //montagnes
  stroke(140,140,140);
  strokeWeight(5);
  fill(color(150,150,150));
  triangle(50,405, 100, 405, 75, 350);
  triangle(200,415, 300, 415, 250, 300);
  triangle(300,400, 350, 400, 325, 350);
  triangle(400,410, 550, 410, 475, 250);
  triangle(600,400, 650, 400, 625, 350);

  //ROBOT
  stroke(100,100,100);
  fill(color(230,230,230));
  //bras gauche
  push ();
  translate(390,210);
  rotate(-angleBG);
  rect(-10,0,20,125);
  pop ();

  //jambe gauche
  push ();
  translate(390,345);
  rotate(-angleJG);
  rect(-10,0,20,125);
  pop ();

  //corps

  rect(350,200,80,150);
  line (387,150, 387, 100);
  arc (387, 150, 50, 50,PI, PI);
  rect(362,150,50,50);
  line (390, 183, 410, 183);
  line (393, 165, 393, 170);
  stroke(color(255,255,255));
  line (365+reflet, 220, 365+reflet, 330);

  reflet += 0.1;
  if(reflet>315){
    reflet -= 0.1;
  } else if (reflet<365){
    reflet -= 0.1;
  }

  stroke(100,100,100);
  //bras droit
  push ();
  translate(390,210);
  rotate(-angleBD);
  rect(-10,0,20,125);
  pop ();

  //jambes droit
  push ();
  translate(390, 345);
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