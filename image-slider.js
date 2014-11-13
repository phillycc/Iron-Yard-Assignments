;(function(){ // CLOSURE
  var images = [
    { src: 'grumpy-1.jpg' },
    { src: 'grumpy-2.jpg' },
    { src: 'grumpy-3.jpg' },
    { src: 'grumpy-4.jpg' },
    { src: 'grumpy-5.jpg' }
  ];
  _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
  var $slides = $('.slides'),
      $slide = $($slides.find('template').prop('content').children),
      slideTpl = _.template($slide.html()),
      $buttons = $('.buttons'),
      $bullets = $('.bullets'),
      $bullet = $($('template', $bullets).prop('content').children);
  /**
   * Dynamically create images / bullets...
   */
  _.each(images, function(image, index){
    $slide.clone()
      .html(slideTpl({ image: image }))
      .data('slideIndex', index)
    .appendTo($slides);
    $bullet.clone()
      .attr('href', '#image-' + index)
      .data('slideIndex', index)
    .appendTo($bullets);
  }); // END each(images)
  /**
   * @event next
   * @element .slider
   */
  $('.slider').on('next', function(event){
    var $li = $('li:not(.exit):first', $slides).trigger('exit');
    $bullets.trigger('activate', $li.data('slideIndex') + 1);
  });
  /**
   * @event prev
   * @element .slider
   */
  $('.slider').on('prev', function(event){
    var $li = $('li.exit:last', $slides).trigger('enter');
    $bullets.trigger('activate', $li.data('slideIndex'));
  });
  /**
   * @event exit
   * @element .slider .slides > li
   */
  $('.slider').on('exit', '.slides > li', function(event){
    $(this).addClass('exit');
    return false;
  });
  /**
   * @event enter
   * @element .slider .slides > li
   */
  $('.slider').on('enter', '.slides > li', function(event){
    // TODO: What goes here?
    return false;
  });
  /**
   * @event activate
   * @element .bullets
   */
  $bullets.on('activate', function(event, index){
      $($(this).children()
        .removeClass('active')
        .get(index)
      ).addClass('active');
  });
  /**
   * @event click
   * @element .buttons > a.next
   */
  $buttons.find('a.next').click(function(event){
    $(this).trigger('next');
    return false;
  }); // END click($buttons a)
  /**
   * @event click
   * @element .buttons > a.prev
   */
  $buttons.find('a.prev').click(function(event){
    $(this).trigger('prev');
    return false;
  });
})(); // END CLOSURE
