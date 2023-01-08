class Food {
  constructor(select) {
    this.map = $(select);
    this.food = $('<div></div>');
    this.food.addClass('food');
    this.map.append(this.food);
    this.x = 0;
    this.y = 0;
    this.foodPos();
  }

  foodPos(){
    let w_num = this.map.innerWidth() / 20;
    let h_num = this.map.innerHeight() / 20;

    let left = Math.floor(Math.random() * w_num);
    let top = Math.floor(Math.random() * h_num);

    this.x = left * 20;
    this.y = top * 20;
    this.food.css({
      left : this.x ,
      top : this.y
    });
  }
}