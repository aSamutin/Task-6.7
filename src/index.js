import $ from 'jquery';
import {FigureFactory} from './FigureFactory';

var figure;
var canvas = document.getElementById('canvas');

$('input[name="clear"]').on('click', function () {
    $('.job').addClass('hide');
    $('.create').removeClass('hide');
    canvas.width = canvas.width;
});

$('input[name="addFigure"]').on('click', function () {
    $('.create').addClass('hide');
    $('.job').removeClass('hide');
    canvas.width = canvas.width;
    figure = FigureFactory.create($('.figure').val(), $('.color').val());
    figure.render(200, 200);
});

$('input[name="increase"]').on('click', function () {
    canvas.width = canvas.width;
    figure.increase(1.1);
    figure.render(200, 200);
});

$('input[name="decrease"]').on('click', function () {
    canvas.width = canvas.width;
    figure.decrease(1.1);
    figure.render(200, 200);
});

$('input[name="getArea"]').on('click', function () {
    alert(figure.getArea());
});
