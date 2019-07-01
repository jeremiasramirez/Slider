let colors = ["blue","red", "orangered", "magenta", "#333", "purple", 
	  "green", "cyan"]
// funcion de slider
function goImage(goimg, backimg, listImgs, counter_, sizeListImgs, imgitem, routeimg, mainimg, counterimage){
// go click
	goimg.addEventListener("click", (e)=>{
		 
	counter_ += 1;
		counterimage.style.backgroundColor = colors[counter_]
		if (counter_ < sizeListImgs){
			imgitem[0].src = routeimg+"/"+listimgs[counter_];
			goimg.classList.add("scale")
		}
		if (counter_ > sizeListImgs-1){
		counter_ = 0
		imgitem[0].src = mainimg;
		}
  	counterimage.textContent=counter_ + " of " + sizeListImgs ;
	  	setTimeout(()=>{
	  		goimg.classList.remove("scale")
	  	},300)
	}, false)
// back click
		backimg.addEventListener("click", (e)=>{
 		 
  		
		if (counter_ != 0){
	 		counter_ -= 1;
	 		counterimage.textContent=counter_ + " of " + sizeListImgs;
		 	imgitem[0].src = routeimg+"/"+listimgs[counter_];
		 	e.target.classList.add("scale")

			 setTimeout(()=>{
	  			e.target.classList.remove("scale")
	  		},300)

		 }
	
  	counterimage.style.backgroundColor = colors[counter_]
 }, false)

}

let backimg = document.getElementById("back"),
	goimg = document.getElementById("go");

let listimgs = ["abra.jpg", "aerodactyl.jpg", "alakazam.jpg", "arbok.jpg", 
			    "arcanine.jpg", "articuno.jpg", "beedrill.jpg", "bellsprout.jpg"],

			    routeimg = "img", containerimgs = document.getElementById("containerimg"),
			    counterimage = document.getElementById("counterimage")
			    imgitem = containerimgs.querySelectorAll("img"),
			    mainimg = imgitem[0].src,
			    sizeListImgs = listimgs.length, 
			    counter_ = 0;

counterimage.textContent += " of "+ sizeListImgs
goImage(goimg, backimg, listimgs, counter_, sizeListImgs, imgitem, routeimg, mainimg, counterimage);
