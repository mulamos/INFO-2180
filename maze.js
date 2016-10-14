window.onload = function(){
	var myBoundary = document.querySelectorAll(".boundary");
	//apply event handler to all .boundary class
		for (var i = 0; i < myBoundary.length; i++ )
		{
			myBoundary[i].addEventListener("mouseover", function() {
				this.setAttribute("class", "boundary youlose");
			})
		}
		
};