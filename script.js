$(document).ready(function () {
  // ✅ Hover effect on each social stat card
  $('.web-main_sec-socials-art-card li').hover(
    function () {
      $(this).css({
        transform: 'scale(1.05)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)'
      });
    },
    function () {
      $(this).css({
        transform: 'scale(1)',
        boxShadow: 'none'
      });
    }
  );

  // ✅ Click alert on Subscribe button
  $('button').click(function () {
    alert('Thanks for subscribing!');
  });
});
