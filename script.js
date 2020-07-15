$(document).ready(function(){

// 1 -> Создаём массив пуей к картинкам
  const collection = [];
  for(let i = 1; i <= 12; i++){
    collection.push(`img/collection-1/p${i}.jpg`);
  }
  console.log(collection);

  // 2 -> Создаём экземпляр слайдера
  const slider = new Slider('slider_id', '1000px', '500px', collection);

  slider.displaySlider();
  slider.loadImages(1, collection);

});