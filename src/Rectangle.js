'use strict'

import {Figure} from './Figure';

class Rectangle extends Figure {

    render(x, y){
        var ctx = super.render();
        ctx.fillRect(x, y, this.width, this.height);
    }

    increase(times){
        this.height*=times;
        this.width*=times;
    }

    decrease(times){
        this.height/=times;
        this.width/=times;
    }

    getArea(){
        return "Площадь фигуры:"+this.height*this.width;
    }
}

export {Rectangle};
