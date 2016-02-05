
$(window).load(function() {
	//menu

	var $iconThreeBars = $(".icon-bars");
	
	$iconThreeBars.on("click", function(){
        var $this = $(this);

        $this.parent().toggleClass("open");
      
    });

    //slider
   var $window = $(window);
    var $flexslider = $('.flexslider');
  function getGridSize() {
    return  (window.innerWidth < 400) ? 1 :
            (window.innerWidth < 600) ? 2 :
            (window.innerWidth < 900) ? 3 : 4;
  }

    $flexslider.flexslider({
      animation: "slide",
      animationLoop: false,
      itemWidth: 210,
      itemMargin: 5,
      minItems: getGridSize(),
      maxItems: getGridSize() 
    });

 
  // check grid size on resize event
  $window.resize(function() {
    var gridSize = getGridSize();
 
    $flexslider.data("flexslider").vars.minItems = gridSize;
    $flexslider.data("flexslider").vars.maxItems = gridSize;
  });
});