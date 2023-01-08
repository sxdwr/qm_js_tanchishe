class Game{
  constructor(select,scoreEle,over) {
    this.map = $(select);
    this.food = new Food(select);
    this.snake = new Snake(select);
    this.timer = 0;
    this.count = 0;
    this.scoreEle = $(scoreEle);
    this.over = $(over);

  }


  start(){
    this.over.hide();
    this.timer = setInterval( () => {
      this.snake.move();
      if (this.snake.isEat(this.food.x,this.food.y)){
        this.count++;
        this.scoreEle.text(this.count * 10);
        this.snake.createHead();
        this.food.foodPos();
      }
      if (this.snake.isDie()){
        clearInterval(this.timer);
        this.over.show();
      }
    },600 - this.count * 10);
  }

  pause(){
    clearInterval(this.timer);
  }

  restart(){
    window.location.reload();
  }
  change(type){
    this.snake.direction = type;
  }
}