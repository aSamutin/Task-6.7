'use strict';

class Figure {
    constructor (height, width, color) {
        this.height = height;
        this.width = width;
        this.color = color;
    }
    render () {
        let canvas = document.getElementById('canvas');
        let ctx = canvas.getContext('2d');
        ctx.fillStyle = this.color;
        return ctx;
    }
}

export {Figure};
