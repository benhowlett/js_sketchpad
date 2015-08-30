var size = document.getElementById("grid_size").value;

$(document).ready(function(){

	createGrid(size);

	draw();

	$("#reset").click(function() {
		resetGrid();
	});

});

function createGrid(size) {
	numSquares = size * size;
	square = '<div class="square" style="width:'+780/size+'px;height:'+780/size+'px;"></div>';
	console.log(square);
	for(i = 0; i < numSquares; i++) {
		$(".sketchpad").append(square);
	}
}

function draw() {
	$(".square").hover(function(){
		$(this).css('background-color', '').css('background-color', 'black');
	});
}

function resetGrid() {
	$(".square").remove();
	size = document.getElementById("grid_size").value;
	createGrid(size);
	draw();
}
