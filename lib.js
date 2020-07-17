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
       		$('#left_arrow').fadeIn(1000);
       		$('#right_arrow').fadeIn(1000);
       		return;
       	} else {
       		this._current = index;
       		this.loadImage(index, array[index++]);
       		$('progress').val(index);
       	    this.loadImages(index, array);
       	}
       }, 1000);
	}

	rotateArrows(){
       $('.arrow').hover(
       	function(){
          $(this).css('transform', 'rotate(360deg)');
       	},
       	function(){
          $(this).css('transform', 'rotate(0deg)');
       	}
       );
    }

    slideLeft(){
      $('#left_arrow').on('click', ()=>{
      	if(this._current > 0){
          $(`#${this._current--}`).fadeOut(1000);
      	  $('progress').val(this._current);
      	}
      });
    }

    slideRight(){
      $('#right_arrow').on('click', ()=>{
      	if(this._current < 11){
          $(`#${++this._current}`).fadeIn(1000);
      	  $('progress').val(this._current + 1);
      	}
      });
    }

    activateEvents(){
	this.rotateArrows();
	this.slideRight();
	this.slideLeft();
    }
}

