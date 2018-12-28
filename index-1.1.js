vhCheck();

particlesJS.load('eatabeat', 'assets/particles-eatabeat.json', function() {});
particlesJS.load('particles-bg', 'assets/particles-dots.json', function() {});

$("#menu").click(e => {
    e.preventDefault();
    $("#menu").toggleClass("open");
    $("#shapeDivider").toggle();
    $("#welcome").toggle();
    $("#content").toggle();
    $(".menu-overlay").toggleClass("open");
});

window.onresize = () => {
  if (window.innerWidth > 400) {
    $("#menu").removeClass("open");
    $("#shapeDivider").show();
    $("#welcome").show();
    $("#content").show();
    $(".menu-overlay").removeClass("open");
  }
}
