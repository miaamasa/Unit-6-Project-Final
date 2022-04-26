$(".Ending-yes").hide();
$(".No-part-two").hide(); 
$(".Part-two-yes").hide();
$(".Part-three-yes").hide();
$(".Part-four-yes").hide();
$(".Part-five-yes").hide();
  
$(".yes-button").click(function() {
$(".Part-two-yes").show();
$(".title").hide();
$(".firstpart").hide();
$(".button").hide();
});

$(".no-button").click(function() {
$(".No-part-two").show();
$(".title").hide();
$(".firstpart").hide();
$(".button").hide();
});

$(".potionsBook").dblclick(function() {
    $(".Part-two-yes").hide();
    $(".Part-three-yes").show();
});

$(".potionsBook").dblclick(function() {
    $(".Part-two-yes").hide();
    $(".Part-three-yes").show();
});

$(".Part-three-yes").dblclick(function() {
    $(".Part-three-yes").hide();
    $(".Part-four-yes").show();
});

$(".Part-four-yes").dblclick(function() {
    $(".Part-four-yes").hide();
    $(".Part-five-yes").show();
});

