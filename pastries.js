$(function(){

$("#drpdwnbtn").click(function(){
$("#drpdwnbtn").toggleClass("change");
$("#myDropdown").toggleClass("show");
$(".dropdownMenu").toggleClass("slide");
});

$(".menu_dropdown1").click(function(){
$(".menu_item_list1").slideToggle(100);
});

$(".menu_dropdown2").click(function(){
$(".menu_item_list2").slideToggle(100);
});

});