function setup() {
  createCanvas(800,600);

}

let angleB = 0;
let angleJ = 0;
let evolB = 0.5;
let evolJ = 0.5;
let a =0;
let evolA = 0.5;

function draw(){
  angleMode('degrees');
  background('#222222');
  strokeWeight(5);
//bras
  push ();
  translate(360,210);
  rotate(angleB);
  rect(-10,0,20,125);
  pop ();

  push ();
  translate(420,210);
  rotate(-angleB);
  rect(-10,0,20,125);
  pop ();

//jambes
  push ();
  translate(370,345);
  rotate(angleJ);
  rect(-10,0,20,125);
  pop ();

  push ();
  translate(410, 345);
  rotate(-angleJ);
  rect(-10,0,20,125);
  pop ();

//corps
  stroke(127,127,127);
  fill(color(180,180,180));
  rect(350,200,80,150);
  line (387,150, 387, 100);
  arc (387, 150, 50, 50,PI, PI);
  rect(362,150,50,50);
  line (380, 165, 380, 170);
  line (393, 165, 393, 170);

  rect (370, 185, 35, a);

  angleB += evolB;
  if(angleB>150){
    evolB = -evolB;
  } else if (angleB<0){
    evolB = -evolB;
  }
  angleJ += evolJ;
  if(angleJ>45){
    evolJ = -evolJ;
  } else if (angleJ<0){
    evolJ = -evolJ;
  }

  a += evolA;
  if(a<10){
    a += evolA;
  } else if(a=10){
    a -= evolA;
  }
}