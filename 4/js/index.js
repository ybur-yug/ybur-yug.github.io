$('body')
.on('click', '.vimeo-launch', function () {
  var videoID = '121500937',
      $video = '<div id="vimeo-pop-container"><div><span class="vimeo-close"></span><iframe src="http://player.vimeo.com/external/121500937.hd.mp4?s=a1752b2764736d105c298cdd1ac47f5b&profile_id=119&autoplay=1" width="90%" height="90%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe></div></div>';
  $('body').append($video);
} )

.on('click', '.vimeo-close', function () {
  $(this).addClass('closing');

  $('#vimeo-pop-container').delay(700).animate({
    height: 0,
    top: '50%'
  }, 'fast', function () {
    $('#vimeo-pop-container').remove();
  });
} );
