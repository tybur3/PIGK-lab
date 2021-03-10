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
    yearRegex = /^[1900-2021]*$/,
    model = $('#model'),
    year = $('#year'),
    // marka = $('.ui-selectmenu-text'),
    marka = $('#marka'),
    allFields = $([]).add(model).add(year).add(marka),
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
        'Długość ' + n + ' musi być pomiędzy ' + min + ' a ' + max + '.'
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

    valid = valid && checkLength(model, 'modelu', 1, 80);
    valid = valid && checkLength(year, 'year', 4, 4);

    valid =
      valid &&
      checkRegexp(
        model,
        /^([0-9a-zA-Z])+$/,
        'Nazwa modelu może składać się ze znaków a-z oraz 0-9.'
      );
    valid =
      valid &&
      checkRegexp(
        year,
        yearRegex,
        'Rocznik samochodu musi być z przedziału 1900-2021 np. 2004'
      );

    if (valid) {
      $('#users tbody').append(
        '<tr>' +
          '<td>' +
          marka.val() +
          '</td>' +
          '<td>' +
          model.val() +
          '</td>' +
          '<td>' +
          year.val() +
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
