window.addEventListener("load", function(){
	var win = true;
	var myBoundary = document.querySelectorAll(".boundary");
	var end = document.getElementById("end");
	var start = document.getElementById("start");
	var status = document.getElementById("status");
	var maze = document.getElementById("maze");

	//apply event handler to all .boundary class
		for (var i = 0; i < myBoundary.length - 1; i++ )
		{
			myBoundary[i].addEventListener("mouseover", function() {
				for (var j = 0; j < myBoundary.length - 1; j++ )
				{
					myBoundary[j].setAttribute("class", "boundary youlose");
					win = false;
				}
				status.innerHTML = "You Lose! :(";
			});
		}	

		end.addEventListener("mouseover", function(){

			if (win)
			{
				status.innerHTML = "You Win! :)";
			}
			
		})

		start.addEventListener("click", function(){
			for (var i = 0; i < myBoundary.length; i++)
			{
				myBoundary[i].setAttribute("class", "boundary");
			}
			status;
			var top = maze.offsetTop;
			var left = maze.offsetLeft;
			var height = maze.offsetHeight;
			var width = maze.offsetWidth;

			
			window.addEventListener("mousemove", function(event){
				var x = event.clientX;
				var y = event.clientY;
				console.log(x);
				if ((x < left) || (x > width + left) || (y < top) || (y > height + top))
				{
					for (var i = 0; i < myBoundary.length - 1; i++)
					{
						myBoundary[i].setAttribute("class", "boundary youlose");
					}
					status.innerHTML = "You're Cheating!";
			}
		});
	});
});



