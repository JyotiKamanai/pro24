class ComputerArcher {
    constructor(x, y, width, height,angle) {
      this.ballImage = loadImage("assets/computerArcher.png");
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.angle =angle;
    }
    display() {
      if (keyIsDown(UP_ARROW)&& this.angle < 2) {
        this.angle += 0.1;
    }
    
    if (keyIsDown(DOWN_ARROW)&& this.angle > 1) {
     this.angle -= 0.1;    }

      push();
      translate(this.x, this.y);
      rotate(this.angle);
      imageMode(CENTER);
      image(this.ballImage,0,0, this.width, this.height,);
      pop();


    }
  }
