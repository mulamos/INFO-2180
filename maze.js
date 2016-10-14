window.onload = function(){
	var win = true;
	var myBoundary = document.querySelectorAll(".boundary");
	//apply event handler to all .boundary class
		for (var i = 0; i < myBoundary.length; i++ )
		{
			myBoundary[i].addEventListener("mouseover", function() {
				for (var j = 0; j < myBoundary.length; i++)
				{
					myBoundary[j].setAttribute("class", "boundary youlose");
					//win = false;
					//document.getElementById("status");
				}
				
			});
		}
		
};