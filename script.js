$(document).ready(function(){

$(".project").click(function(){
    window.location.href ="https://briangearty.github.io/Golden-Child-Meal-Planner/";
})

$(".quiz").click(function(){
    window.location.href ="https://briangearty.github.io/QuizHomework/";
})

$(".weather").click(function(){
    window.location.href = "https://briangearty.github.io/WeatherDashboard/";
})

$('#submit').click(function() {
    $('#contactForm').attr("action", "mailto:geartybrian@gmail.com? subject= Brian Gearty Portfolio" + $('#textarea').val() + '&body=' + $('#email').val() + '&body=');
    $('#contactForm').submit();
});




})