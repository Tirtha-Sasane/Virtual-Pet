class Food{
    constructor(){
        this.foodStock;
        this.lastFed;
        this.image=loadImage("Images/Milk.png");
    }

    display(){
        console.log(this.foodStock);

        if(this.foodStock!=0){
            var x=80, y=100;
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                  y=y+50;
                  x=80;
                }
                image(this.image,x,y,50,50);
                x=x+50;
            }
        }
    }
}