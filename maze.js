window.addEventListener("load", function(){
	var win = true;
	var myBoundary = document.querySelectorAll(".boundary");
	var end = document.getElementById("end");
	var start = document.getElementById("start");

	//apply event handler to all .boundary class
		for (var i = 0; i < myBoundary.length - 1; i++ )
		{
			myBoundary[i].addEventListener("mouseover", function() {
				for (var j = 0; j < myBoundary.length - 1; j++ )
				{
					myBoundary[j].setAttribute("class", "boundary youlose");
					win = false;
				}
				status.innerHTML = "You Lose!";
			});
		}

		var status = document.getElementById("status");
		end.addEventListener("mouseover", function(){

			if (win){
				status.innerHTML = "You Win!";

			}
			
		})

		start.addEventListener("click", function(){
			for (var i = 0; i < myBoundary.length; i++)
			{
				myBoundary[i].setAttribute("class", "boundary");
			}
		})
});