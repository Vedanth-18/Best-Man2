class Umbrella{
    constructor(x,y){
        this.umbrella=Bodies.circle(x,y,70,{isStatic:true});
        this.x=x;
        this.y=y;
        this.umbrellaImage=loadImage("walking_1.gif");
        this.note = loadImage("Note.png");
        this.blast = loadImage("blast.gif");
        this.superman = loadImage("superman.gif");
        this.radius=65;
        World.add(world, this.umbrella);
    }
    display(){
       var pos = this.umbrella.position;
       if(pos.x<220){
            imageMode(CENTER);
            image(this.umbrellaImage, pos.x, pos.y+90, 500, 300);
       }
       //
       if(pos.x>170){
            if(frameCount%40===0){
                bat = createSprite(Math.round(random(0, 1000)), Math.round(random(0, 500)), 100, 100);
                bat.addImage("batImg", batImg);
                bat.scale=0.3;
                bat.x = bat.x+30;
                bat.lifetime=50;
            }
            if(pos.x>=170 && pos.x<=220){
              image(this.note, pos.x + 60, pos.y-110, 400, 260);
            }
            if(pos.x>220 && pos.x<245){
              image(this.blast, pos.x-100, pos.y-150, 500, 500);
            }
            if(pos.x>245){
              image(this.superman, pos.x, pos.y +10, 400, 250);
            }

       }
       //
       if(frameCount%20===0){
        pos.x = pos.x +9;
     }
    }
}