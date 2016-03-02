$('.thumbnail').click(function(){
  /* copy loaded thumbnails into carousel */
  $('.row .thumbnail').on('load', function() {
    
  }).each(function(i) {
    if(this.complete) {
    	var item = $('<div class="item"></div>');
      var itemDiv = $(this).parents('div');
      var title = $(this).parent('a').attr("title");
      
      item.attr("title",title);
    	$(itemDiv.html()).appendTo(item);
    	item.appendTo('.carousel-inner'); 
      if (i==0){ // set first item active
       item.addClass('active');
      }
    }
  });
  /* activate the carousel */
  $('#modalCarousel').carousel({interval:false});

  /* change modal title when slide changes */
  $('#modalCarousel').on('slid.bs.carousel', function () {
    $('.modal-title').html($(this).find('.active').attr("title"));
  })

  /* when clicking a thumbnail */
  $('.row .thumbnail').click(function(){
      var idx = $(this).parents('div').index();
    	var id = parseInt(idx);
    	$('#myModal').modal('show'); // show the modal
      $('#modalCarousel').carousel(id); // slide carousel to selected
	});
});

// main-picture function
$('.main-picture').click(function(){
  $('.row .thumbnail').on('load', function() {

  }).each(function(e) {
    if(this.complete) {
      var item = $('<div class="item"></div>');
      var itemDiv = $(this).parents('div');
      var title = $(this).parent('a').attr("title");
      
      item.attr("title",title);
      $(itemDiv.html()).appendTo(item);
      item.appendTo('.carousel-inner'); 
      if (e==0){ // set first item active
       item.addClass('active');
      }
    }
  });

  $('#modalCarousel').carousel({interval:false});

  $('#modalCarousel').on('slid.bs.carousel', function () {
    $('.modal-title').html($(this).find('.active').attr("title"));
  })

  var idx = $(this).parents('div').index();
  var id = parseInt(idx);
  $('#myModal').modal('show'); // show the modal
  $('#modalCarousel').carousel(id); // slide carousel to selected
});


// ------------
$('.main-picture').click(function(){
  $('.modal-content').children('.thumbnail-holder').remove('.thumbnail-holder');
  $('.thumbnail-holder').clone().insertAfter('.modal-body');
  $('.modal-content').children('.thumbnail-holder').removeClass("col-lg-6 col-md-6").addClass("col-lg-12 col-md-12");
});

$('.thumbnail').click(function(){
  // $(this).attr('title');
  var titleBank = $(this).attr('title');
  console.log(titleBank);
});

$('.thumbnail').click(function(){
  $('.modal-content').children('.thumbnail-holder').remove('.thumbnail-holder');
  $('.thumbnail-holder').clone().insertAfter('.modal-body');
  $('.modal-content').children('.thumbnail-holder').removeClass("col-lg-6 col-md-6").addClass("col-lg-12 col-md-12");
});



