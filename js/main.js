//para los pop adds

$("#pencil").on("click", function(){
	var draw = $("#draw");
	draw.toggleClass("_hide");
})
$("#joy").on("click", function(){
	var game = $("#gamepad");
	game.toggleClass("_hide");
})
$("#smile").on("click", function(){
	var face = $("#face");
	face.toggleClass("_hide");
})
$("#group").on("click", function(){
	var people = $("#people");
	people.toggleClass("_hide");
})
$("#book").on("click", function(){
	var note = $("#note");
	note.toggleClass("_hide");
})
$("#bateria").on("click", function(){
	var batery = $("#batery");
	batery.toggleClass("_hide");
})
$("#servicio").on("click", function(){
	var tenedor = $("#tenedor");
	tenedor.toggleClass("_hide");
})
$("#pc").on("click", function(){
	var compu = $("#compu");
	compu.toggleClass("_hide");
})
$("#bici").on("click", function(){
	var compu = $("#cleta");
	compu.toggleClass("_hide");
})