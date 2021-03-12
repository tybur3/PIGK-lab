// $(function () {
//   $('#accordion').accordion();
// });

// $(function () {
//   $('#tabs').tabs();
// });

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

//Lab3

//zad1

$(document).ready(() => {
  $('#accordion').accordion({
    animate: {
      // duration: 500,
      // easing: 'easeOutBounce',
      down: {
        easing: 'easeOutBounce',
        duration: 1000,
      },
    },
  });
});

//zad2

$(function () {
  $('#tabs').tabs({
    event: 'mouseover',
    show: { effect: 'drop', duration: 200 },
    // hide: { effect: 'explode', duration: 1000 },
  });
});

// $('#add_tab')
//   .button()
//   .on('click', function () {
//     dialog.dialog('open');
//   });

$(function () {
  var tabTitle = $('#tab_title'),
    tabContent = $('#tab_content'),
    tabTemplate =
      //"<li><a href='#{href}'>#{label}</a> <span class='ui-icon ui-icon-close' role='presentation'>Remove Tab</span></li>",
      `<li><a href='#{href}'>#{label}</a></li>`,
    tabCounter = 3;

  var tabs = $('#tabs').tabs();

  // Modal dialog init: custom buttons and a "close" callback resetting the form inside
  var dialog = $('#dialog-tab').dialog({
    autoOpen: false,
    modal: true,
    buttons: {
      Add: function () {
        addTab();
        $(this).dialog('close');
      },
      Cancel: function () {
        $(this).dialog('close');
      },
    },
    close: function () {
      form[0].reset();
    },
  });

  // AddTab form: calls addTab function on submit and closes the dialog
  var form = dialog.find('form').on('submit', function (event) {
    addTab();
    dialog.dialog('close');
    event.preventDefault();
  });

  // Actual addTab function: adds new tab using the input from the form above
  function addTab() {
    var label = tabTitle.val() || 'Tab ' + tabCounter,
      id = 'tabs-' + tabCounter,
      li = $(
        tabTemplate
          .replace(/#\{href\}/g, '#' + id)
          .replace(/#\{label\}/g, label)
      ),
      tabContentHtml = tabContent.val() || 'Tab ' + tabCounter + ' content.';

    tabs.find('.ui-tabs-nav').append(li);
    tabs.append("<div id='" + id + "'><p>" + tabContentHtml + '</p></div>');
    tabs.tabs('refresh');
    tabCounter++;
  }

  // AddTab button: just opens the dialog
  $('#add_tab')
    .button()
    .on('click', function () {
      dialog.dialog('open');
    });

  // Close icon: removing the tab on click
  // tabs.on('click', 'span.ui-icon-close', function () {
  //   var panelId = $(this).closest('li').remove().attr('aria-controls');
  //   $('#' + panelId).remove();
  //   tabs.tabs('refresh');
  // });

  // tabs.on('keyup', function (event) {
  //   if (event.altKey && event.keyCode === $.ui.keyCode.BACKSPACE) {
  //     var panelId = tabs.find('.ui-tabs-active').remove().attr('aria-controls');
  //     $('#' + panelId).remove();
  //     tabs.tabs('refresh');
  //   }
  // });
});

//zad4

$(function () {
  var tabs = $('#tabs').tabs();
  tabs.find('.ui-tabs-nav').sortable({
    axis: 'x',
    stop: function () {
      tabs.tabs('refresh');
    },
  });
});

//zad5
