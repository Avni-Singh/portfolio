$(document).ready(function () {
  // ✅ Hover effect on each social stat card
  $(".web-main_sec-socials-art-card li").hover(
    function () {
      $(this).css({
        transform: "scale(1.05)",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)",
      });
    },
    function () {
      $(this).css({
        transition: "all 0.3s ease",
        transform: "scale(1)",
        boxShadow: "none",
      });
    }
  );

  // image
  $(".web-main_s-art.web-main_s-art-banner-image").hover(
    function () {
      $(this).css({
        transform: "scale(1.05)",
      });
    },
    function () {
      $(this).css({
        transition: "all 0.3s ease",
        transform: "scale(1)",
      });
    }
  );
// heading 
// heading 
$(".web-main_s-a-item-name h1").hover(function () {
  $(this)
    .css("color", "grey")
    .fadeOut(1000)
    .fadeIn(1000);
});

  // ✅ Click alert on Subscribe button
  $("button").click(function () {
    alert("Thanks for subscribing!");
  });
});
