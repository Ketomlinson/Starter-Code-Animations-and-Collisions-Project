//Declare a variable named count and assign it a value of one.

//Pre-game Set-up
$("#level").text("Level: ");
$('.characterSection').hide();
$('#start').click(function() {
    $('#start').fadeOut();
    $('#game').show();
    $('h1').show();
    $('.characterSection').show();
    $('#level').show();
});
//Character Selection
function select(pic) {
    $("#character1").attr("src", pic);
}

function checkCollision() {
    var character1Left = $("#character1").offset().left;
    console.log(character1Left);
    var character2Left = $("#character2").offset().left;
    console.log(character2Left);
    var character1Right = character1Left + $("#character1").width();
    console.log(character1Right);
    var character2Right = character2Left + $("#character2").width();
    console.log(character2Right);
    if (character1Right > character2Left) {
        alert ("Level Cleared!");
        $("#game").css("background","url(https://www.emugifs.net/wp-content/uploads/2018/12/Super-Street-Fighter-II-Turbo-Arcade-Video-Game-1994-Capcom-Animated-Background-Stage-Ryu-Japan.gif)");
    $("#character1").css("left", "20px");
        
    }
}
$("#characterA").click(function() {
    select("http://www.sfusd.edu/en/assets/sfusd-staff/news-and-calendars/images/kristia-castrillo.png");
});
$("#characterb").click(function() {
    select("https://miro.medium.com/max/640/1*gyD7e8jWxufaEeqOS-w5jg.jpeg");
});
//Check Collison Function
//Character 1 Movement
$("body").keydown(function(event) {
    if (event.which === 37) {
        $("#character1").css("left", $("#character1").offset().left - 20);
    } else if (event.which === 39) {
        $("#character1").css("left", $("#character1").offset().left + 20);
        
    }else if (event.which === "ArrowUp" )
    {$("#character1").css("top",$("#character1").offset().top - 10);
    } else if (event.which === "ArrowDown")
    {$("#character1").css("top",$("#character1").offset().top + 10);
    } else {
    checkCollision();
    }
});
//Next Level if Needed