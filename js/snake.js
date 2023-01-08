class Snake{
  constructor(select) {
    this.map = $(select);
    this.direction = 'right';
    this.snakeList = [];
    this.createSnake();
  };

  createHead(){
    let head = this.snakeList[0];
    let pos = {x:0,y:0};

    if (head){
      switch (this.direction){
        case "left":
          pos.x = head.position().left - 20;
          pos.y = head.position().top;
          break;
        case "right":
          pos.x = head.position().left + 20;
          pos.y = head.position().top;
          break;
        case "top":
          pos.x = head.position().left;
          pos.y = head.position().top - 20;
          break;
        case "bottom":
          pos.x = head.position().left;
          pos.y = head.position().top + 20;
          break;
      }
      head.removeClass();
      head.addClass('body');
    }
    let $div = $('<div class="head"></div>');
    this.snakeList.unshift($div);
    $div.css({
      left:pos.x,
      top:pos.y
    });
    this.map.append($div);
  };

  createSnake(){
    for (let i = 0; i < 3; i++) {
      this.createHead();
    }
  };

  move(){
    let body = this.snakeList.pop();
    body.remove();
    this.createHead();
  };

  isEat(foodX,foodY){
    let head = this.snakeList[0];
    let headX = head.position().left;
    let headY = head.position().top;
    if (Math.abs(foodX - headX) <= 0.1 && Math.abs(foodY - headY) <= 0.1) return true;
    return false;
  };

  isDie(){
    let head = this.snakeList[0];
    let headX = head.position().left;
    let headY = head.position().top;

    if (headX < 0 || headY < 0 || headX >= this.map.width() || headY >= this.map.height())
      return true;
    return false;
  }
}