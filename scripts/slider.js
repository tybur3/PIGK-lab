//zad11

function getTheColorTemperature(colorVal) {
  const theColor = `hsl(${60 + colorVal * 12}, 100%, 50%)`;
  // console.log(theColor);
  return theColor;
}

function refreshSwatchTemperature() {
  var coloredSlider = $('#sliderTemperature').slider('value'),
    myColor = getTheColorTemperature(coloredSlider);
  $('#sliderTemperature .ui-slider-range').css('background-color', myColor);
  $('#sliderTemperature .ui-state-default').css('background-color', myColor);
}

$(function () {
  $('#sliderTemperature').slider({
    orientation: 'vertical',
    range: 'min',
    min: 15,
    max: 25,
    value: 20,
    slide: function (event, ui) {
      $('#amountTemperature').val(ui.value);
      refreshSwatchTemperature();
    },
    change: refreshSwatchTemperature,
  });
  $('#amountTemperature').val($('#sliderTemperature').slider('value'));
});

function getTheColorHumidity(colorVal) {
  const theColor = `hsl(230, ${colorVal}%, 50%)`;
  return theColor;
}

function refreshSwatchHumidity() {
  var coloredSlider = $('#sliderHumidity').slider('value'),
    myColor = getTheColorHumidity(coloredSlider);
  $('#sliderHumidity .ui-slider-range').css('background-color', myColor);
  $('#sliderHumidity .ui-state-default').css('background-color', myColor);
}

$(function () {
  $('#sliderHumidity').slider({
    orientation: 'vertical',
    range: 'min',
    min: 0,
    max: 100,
    value: 50,
    slide: function (event, ui) {
      $('#amountHumidity').val(ui.value);
      refreshSwatchHumidity();
    },
    change: refreshSwatchHumidity,
  });
  $('#amountHumidity').val($('#sliderHumidity').slider('value'));
});

function getTheColorAIQ(colorVal) {
  let theColor = '';
  if (colorVal < 200) {
    theColor = `hsl(${120 + (360 - colorVal / 1.7)}, 100%, 50%)`;
  } else {
    theColor = `hsl(${colorVal / 7 - 70}, 100%, ${30}%)`;
  }

  console.log(theColor);
  return theColor;
}

function refreshSwatchAIQ() {
  var coloredSlider = $('#sliderAIQ').slider('value'),
    myColor = getTheColorAIQ(coloredSlider);
  $('#sliderAIQ .ui-slider-range').css('background-color', myColor);
  $('#sliderAIQ .ui-state-default').css('background-color', myColor);
}

$(function () {
  $('#sliderAIQ').slider({
    orientation: 'vertical',
    range: 'min',
    min: 0,
    max: 500,
    value: 250,
    slide: function (event, ui) {
      $('#amountAIQ').val(ui.value);
      refreshSwatchAIQ();
    },
    change: refreshSwatchAIQ,
  });
  $('#amountAIQ').val($('#sliderAIQ').slider('value'));
});
