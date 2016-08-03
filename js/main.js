//para los pop adds

$("#pencil").on("click", function(){
	var draw = $("#draw");
	$(".contenedor").addClass("_hide");
	draw.toggleClass("_hide");
})
$("#joy").on("click", function(){
	var game = $("#gamepad");
	$(".contenedor").addClass("_hide");
	game.toggleClass("_hide");
})
$("#smile").on("click", function(){
	var face = $("#face");
	$(".contenedor").addClass("_hide");
	face.toggleClass("_hide");
})
$("#group").on("click", function(){
	var people = $("#people");
	$(".contenedor").addClass("_hide");
	people.toggleClass("_hide");
})
$("#book").on("click", function(){
	var note = $("#note");
	$(".contenedor").addClass("_hide");
	note.toggleClass("_hide");
})
$("#bateria").on("click", function(){
	var batery = $("#batery");
	$(".contenedor").addClass("_hide");
	batery.toggleClass("_hide");
})
$("#servicio").on("click", function(){
	var tenedor = $("#tenedor");
	$(".contenedor").addClass("_hide");
	tenedor.toggleClass("_hide");
})
$("#pc").on("click", function(){
	var compu = $("#compu");
	$(".contenedor").addClass("_hide");
	compu.toggleClass("_hide");
})