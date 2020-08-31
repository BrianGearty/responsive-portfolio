$(document).ready(function(){
// Button to Deployed Meal Planner App
$(".project").click(function(){
    window.location.href ="https://briangearty.github.io/Golden-Child-Meal-Planner/";
})
// Button to Github Repo
$('.github-project').click(function(){
    window.location.href = "https://github.com/BrianGearty/Golden-Child-Meal-Planner";
})
// Button to Deployed Quiz App
$(".quiz").click(function(){
    window.location.href ="https://briangearty.github.io/QuizHomework/";
})
// Button to Github Repo
$('.github-quiz').click(function(){
    window.location.href = "https://github.com/BrianGearty/QuizHomework";
})
// Button to Deployed Weather App
$(".weather").click(function(){
    window.location.href = "https://briangearty.github.io/WeatherDashboard/";
})
// Button to Github Repo
$('.github-quiz').click(function(){
    window.location.href = "https://github.com/BrianGearty/WeatherDashboard";
})

$('#submit').click(function() {
    $('#contactForm').attr("action", "mailto:geartybrian@gmail.com? subject= Brian Gearty Portfolio" + $('#textarea').val() + '&body=' + $('#email').val() + '&body=');
    $('#contactForm').submit();
});






})