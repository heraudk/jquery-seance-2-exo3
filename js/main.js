$("p").animate({
    width: '+=20px',
    height: '+=20px'
}).queue(function() {
    $(this).dequeue(); //dequeue() permet de lancer l'animation suivante;
}).animate({
    width: '+=50px',
    height: '+=50px'
}).queue(function() {
    $(this).dequeue();
}).animate({
    width: '+=60px',
    height: '+=60px'
});    

$("p").animate({
    width: '-=20px',
    height: '-=20px'
}).queue(function() {
    $(this).dequeue(); //dequeue() permet de lancer l'animation suivante;
}).animate({
    width: '-=50px',
    height: '-=50px'
}).queue(function() {
    $(this).dequeue();
}).animate({
    width: '-=60px',
    height: '-=60px'
});    