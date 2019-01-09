// Your code goes here!
$("button[type='submit']").on('click', function(event){
	
	event.preventDefault();
	
	const height = $('#inputHeight').val(); // Select size input
	const width = $('#inputWidth').val(); // Select size input
	
	$('#pixelCanvas').empty(); //clean the grid to start all over again

	makeGrid(height, width); // When size is submitted by the user, call makeGrid()
});
/*function to draw the grid*/
function makeGrid(height, width) {
	for(i = 0; i < height; i++){
		$("#pixelCanvas").append($("<tr></tr>"));
		for(j = 0; j < width; j++){
			$("tr").last().append($("<td></td>"));
		}	
	}

	$("td").on('click', function(event){
		const painting = $('#colorPicker').val(); // Select color input
		$(event.target).css('background-color', painting); //painting the background of td with color picked by user
	});

}
function MouseRollover(MyHone) {
            MyHone = document.querySelector('h1');
             MyHone.style.color = '#ffff';

           
    }
        function MouseOut(MyHone) {
               MyHone.style.color = '#91DC22';
    }

 document.onmousemove = updateMyHonePosition; 
