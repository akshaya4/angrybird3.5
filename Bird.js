class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    this.body.position.x = 300;
    this.body.position.y = 400;
    super.display();
  }
}
