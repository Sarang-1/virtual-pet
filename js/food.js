class food{
    constructor(){
        var lastFed,foodStock;
        this.stock = 0;
        this.image = loadImage("images/food.png");
    }

    getFoodStock(){
        this.stock = foodS;
    }


    

    display(){
        var x=30;
        var y=180;

        if(this.stock != 0){
        for(var i=0;i<this.stock;i++){
            if(i%10 ===0 ){
                x=30;
                y=y+60;
            }
            image(this.image,x,y,70,70);
            x=x+35;
        }
    }
}
}