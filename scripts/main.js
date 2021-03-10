$(function () {
  $('#accordion').accordion();
});

$(function () {
  $('#tabs').tabs();
});

//zad7
$(function () {
  var dialog,
    form,
    // From http://www.whatwg.org/specs/web-apps/current-work/multipage/states-of-the-type-attribute.html#e-mail-state-%28type=year%29
    // yearRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    yearRegex = /^[1900-2022]*$/,
    name = $('#name'),
    year = $('#year'),
    password = $('#password'),
    allFields = $([]).add(name).add(year).add(password),
    tips = $('.validateTips');

  function updateTips(t) {
    tips.text(t).addClass('ui-state-highlight');
    setTimeout(function () {
      tips.removeClass('ui-state-highlight', 1500);
    }, 500);
  }

  function checkLength(o, n, min, max) {
    if (o.val().length > max || o.val().length < min) {
      o.addClass('ui-state-error');
      updateTips(
        'Długość ' + n + ' must be between ' + min + ' and ' + max + '.'
      );
      return false;
    } else {
      return true;
    }
  }

  function checkRegexp(o, regexp, n) {
    if (!regexp.test(o.val())) {
      o.addClass('ui-state-error');
      updateTips(n);
      return false;
    } else {
      return true;
    }
  }

  function addUser() {
    var valid = true;
    allFields.removeClass('ui-state-error');

    // valid = valid && checkLength(name, 'username', 1, 16);
    valid = valid && checkLength(name, 'model', 1, 80);
    valid = valid && checkLength(year, 'year', 4, 4);

    valid =
      valid &&
      checkRegexp(
        name,
        /^[a-z]([0-9a-z_\s])+$/i,
        'Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter.'
      );
    valid = valid && checkRegexp(year, yearRegex, 'np. 2004');
    valid =
      valid &&
      checkRegexp(
        password,
        /^([0-9a-zA-Z])+$/,
        'Password field only allow : a-z 0-9'
      );

    if (valid) {
      $('#users tbody').append(
        '<tr>' +
          '<td>' +
          name.val() +
          '</td>' +
          '<td>' +
          year.val() +
          '</td>' +
          '<td>' +
          password.val() +
          '</td>' +
          '</tr>'
      );
      dialog.dialog('close');
    }
    return valid;
  }

  dialog = $('#dialog-form').dialog({
    autoOpen: false,
    height: 400,
    width: 350,
    modal: true,
    buttons: {
      Dodaj: addUser,
      Anuluj: function () {
        dialog.dialog('close');
      },
    },
    close: function () {
      form[0].reset();
      allFields.removeClass('ui-state-error');
    },
  });

  form = dialog.find('form').on('submit', function (event) {
    event.preventDefault();
    addUser();
  });

  $('#create-car')
    .button()
    .on('click', function () {
      dialog.dialog('open');
    });
});

//zad8

$(function () {
  $('.controlgroup').controlgroup();
  $('.controlgroup-vertical').controlgroup({
    direction: 'vertical',
  });
});

//zad9

$(function () {
  $('#dialog-form').dialog({
    autoOpen: false,
    show: {
      effect: 'size',
      duration: 200,
    },
    hide: {
      effect: 'puff',
      duration: 200,
    },
  });

  $('#create-car').on('click', function () {
    $('#dialog-form').dialog('open');
  });
});

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
    // slide: refreshSwatch,
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
  // console.log(theColor);
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
    // slide: refreshSwatch,
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
  // const theColor = `hsl(${colorVal / 5}, 100%, 50%)`;

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
    // slide: refreshSwatch,
    slide: function (event, ui) {
      $('#amountAIQ').val(ui.value);
      refreshSwatchAIQ();
    },
    change: refreshSwatchAIQ,
  });
  $('#amountAIQ').val($('#sliderAIQ').slider('value'));
});
