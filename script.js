$(".Part-Two-Yes").hide();
$(".Part-Two-No").hide();
$(".Story-Ending-Yes").hide();
$(".Story-Ending-No").hide();

$(".yes-button").dblclick(function() {
    $(".Part-Two-Yes").fadeIn();
    $(".image").hide();
    $(".title").hide();
    $(".button").hide();

});

$(".no-button").dblclick(function() {
    $(".Part-Two-No").fadeIn();
    $(".image").hide();
    $(".title").hide();
    $(".button").hide();
});
$(".Mg").hover(function() {
    $(".Story-Ending-No").fadeIn();
    $(".image").hide();
    $(".title").hide();
    $(".button").hide();
    $(".Part-Two-No").hide();
});
$(".TAEL").click(function() {
    $(".Part-Two-Yes").hide();
    $(".Part-Two-No").hide();
    $(".Story-Ending-Yes").hide();
    $(".Story-Ending-No").hide();
    $(".image").show();
    $(".title").show();
    $(".button").show();

});
$(".tree").dblclick(function() {
    $(".Story-Ending-Yes").fadeIn();
    $(".image").hide();
    $(".title").hide();
    $(".button").hide();
    $(".Part-Two-Yes").hide();
});