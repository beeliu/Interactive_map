/* Map hilight functions*/
$(function() {
    $('.nyc_map').maphilight();
});

$( "#manhattan_but" ).hover(function() {
     var data = $('#Manhattan').mouseout().data('maphilight') || {};
     data.alwaysOn = !data.alwaysOn;
     $('#Manhattan').data('maphilight', data).trigger('alwaysOn.maphilight');
});
$( "#bronx_but" ).hover(function() {
  var data = $('#Bronx').mouseout().data('maphilight') || {};
  data.alwaysOn = !data.alwaysOn;
  $('#Bronx').data('maphilight', data).trigger('alwaysOn.maphilight');

});
$( "#queens_but" ).hover(function() {
  var data = $('#Queens').mouseout().data('maphilight') || {};
  data.alwaysOn = !data.alwaysOn;
  $('#Queens').data('maphilight', data).trigger('alwaysOn.maphilight');

});
$( "#brooklyn_but" ).hover(function() {
  var data = $('#Brooklyn').mouseout().data('maphilight') || {};
  data.alwaysOn = !data.alwaysOn;
  $('#Brooklyn').data('maphilight', data).trigger('alwaysOn.maphilight');

});
$( "#island_but" ).hover(function() {
  var data = $('#Staten_Island').mouseout().data('maphilight') || {};
  data.alwaysOn = !data.alwaysOn;
  $('#Staten_Island').data('maphilight', data).trigger('alwaysOn.maphilight');

});
