class Slider{
	constructor(id, width, height, array){ 
      this._box = $(`#${id}`);
      this._width = width;
      this._height = height;
      this._array = array;
      this._current = 0;
	}

	displaySlider(){
		this._box.css('width', this._width);
		this._box.css('height', this._height);
		this._box.show(1000);
		this.loadImage(0, this._array[0]);
	}

	loadImage(id, path){
        let item = document.createElement('img'); // <img class="picture">
        $(item).addClass('picture').attr({'id': id, 'src': path}) // <img ... id="0" src="">
         .appendTo(this._box).fadeIn(1000); // <img ... id="0" src="">
	}

	loadImages(index, array){
       setTimeout(() => {
       	if(index > 11){
       		return;
       	} else {
       		this._id = index;
       		this.loadImage(this._id, array[index++]);
       	    this.loadImages(index, array);
       	}
       }, 1000);
	}

	rotateArrows(){

    }

    slideLeft(){

    }

    slideRight(){

    }

    activateEvents(){
	this.rotateArrows();
	this.slideRight();
	this.slideLeft();
    }
}

