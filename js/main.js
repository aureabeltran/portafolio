//para los pop adds

$("#pencil").on("click", function(){
	var draw = $("#draw");
	draw.toggleClass("_hide");
	$('.contenedor').not(draw).addClass('_hide');
})
$("#joy").on("click", function(){
	var game = $("#gamepad");
	game.toggleClass("_hide");
	$('.contenedor').not(game).addClass('_hide');
})
$("#smile").on("click", function(){
	var face = $("#face");
	face.toggleClass("_hide");
	$('.contenedor').not(face).addClass('_hide');
})
$("#group").on("click", function(){
	var people = $("#people");
	people.toggleClass("_hide");
	$('.contenedor').not(people).addClass('_hide');
})
$("#book").on("click", function(){
	var note = $("#note");
	note.toggleClass("_hide");
	$('.contenedor').not(note).addClass('_hide');
})
$("#bateria").on("click", function(){
	var batery = $("#batery");
	batery.toggleClass("_hide");
	$('.contenedor').not(batery).addClass('_hide');
})
$("#servicio").on("click", function(){
	var tenedor = $("#tenedor");
	tenedor.toggleClass("_hide");
	$('.contenedor').not(tenedor).addClass('_hide');
})
$("#pc").on("click", function(){
	var compu = $("#compu");
	compu.toggleClass("_hide");
	$('.contenedor').not(compu).addClass('_hide');
})
$("#bici").on("click", function(){
	var cleta = $("#cleta");
	cleta.toggleClass("_hide");
	$('.contenedor').not(cleta).addClass('_hide');
})

 $(window).resize(function(){

   if ($(window).width() <= 420) {  

          $('.contenedor').css({'width' : '250px' , 'left' : '0%' , 'top' : '20%' , 'height' : '200px'});

   }     

})