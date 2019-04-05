/* EXERCISE 3

create an empty property named playInterval
A play() function that moves to the next photo ever 2000ms until the end.
Tip - use playInterval = setInterval(fn,ms).
A pause() function that stops the slideshow 
Tip - use clearInterval(playInterval)
Automatically pause the slideshow if it gets to the end of the photolist while playing.

*/
const slideshow = {
	photoList : ['photo1','photo2','photo3','photo4'],
	currentPhotoIndex: -1,
	nextPhoto() {
			if(this.currentPhotoIndex<3){
				this.currentPhotoIndex++
				console.log(this.photoList[this.currentPhotoIndex])
		} //end if
		else {
			this.pause(),
			console.log("End of slideshow");
		}  // end else	
	}, //end nextPhoto
	prevPhoto() {
		if(this.currentPhotoIndex>0) {
			this.currentPhotoIndex--
			console.log(this.photoList[this.currentPhotoIndex])
		} //end if
		else {
			console.log("Beginning of Slideshow");
		} //end else 
	}, //end prevPhoto
	getCurrentPhoto() {
		console.log(this.photoList[this.currentPhotoIndex]);
		}, //end getCurrentPhoto
        
    playInterval:null, 
		play: function () { 
			this.playInterval = setInterval(this.nextPhoto.bind(this), 2000)
		}, //end play function
		pause() {
			clearInterval(this.playInterval)
		} //end pause function
	} //end slideshow

slideshow.play();