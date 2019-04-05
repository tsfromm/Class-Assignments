/* Exercise: This

Create a single object named `slideshow` that represents the data and functionality of a picture slideshow. There should be NO VARIABLES OUTSIDE THE OBJECT. The object should have properties for:

1. An array called `photoList` that contains the names of the photos as strings
2. An integer `currentPhotoIndex` that represents which photo in the `photoList` is currently displayed
3. A `nextPhoto()` function that moves `currentPhotoIndex` to the next index `if `there is one, and:
	- logs the current photo name.
	- Otherwise, log "End of slideshow";
4. A `prevPhoto()` function that does the same thing, but backwards.
5. A function `getCurrentPhoto()` that returns the current photo from the list.

Exercise Answer*/

const slideshow = {
	photoList : ['photo1','photo2','photo3','photo4'],
	currentPhotoIndex: 0,
	nextPhoto() {
			if(this.currentPhotoIndex<3){
				this.currentPhotoIndex++
				console.log(this.photoList[this.currentPhotoIndex])
		} //end if
		else {
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
		} //end getCurrentPhoto
} //end slideshow

slideshow.getCurrentPhoto(); //photo1
slideshow.nextPhoto();  //photo2
slideshow.nextPhoto(); //photo3
slideshow.nextPhoto(); //photo4
slideshow.nextPhoto(); //End of slideshow
slideshow.prevPhoto(); //photo3
slideshow.prevPhoto(); //photo2
slideshow.prevPhoto(); //photo1
slideshow.prevPhoto(); //Beginning of Slideshow