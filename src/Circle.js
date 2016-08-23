'use strict';

import {Figure} from './Figure';

class Circle extends Figure {
    constructor (radius, color) {
        super();
        this.radius = radius;
        this.color = color;
    }
    render (x, y) {
        var ctx = super.render();
        ctx.arc(x, y, this.radius, 0, 360, false);
        ctx.fill();
    }
    increase (times) {
        this.radius *= times;
    }
    decrease (times) {
        this.radius /= times;
    }
    getArea () {
        return 'Площадь фигуры:' + Math.PI * Math.pow(this.radius, 2);
    }
}

export {Circle};
