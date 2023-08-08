var num_correct = 0;
//var drag_num;
$(init); 

function init() {

    $('.img-wrap').hide();
    $('.drag-wrap').show();
    $('.dropp').show();
    //  dragArray();


    // Drag Array  
    var draggy = new Array();
    draggy[0] = "covid-molecule.png";
    draggy[1] = "covid-molecule-1.png";
    // Create molecule drag
    // for (var i = 0; i < draggy.length; i++) {
    var size = draggy.length;
    var x = Math.floor(size * Math.random())
    $('.drag-wrap').html('<div class="b4-pickup"> <img src="' + draggy[x] + '" draggable="false" class="draggy-1"></div>');

    $('.b4-pickup').draggable({
        stack: '.drag-wrap div',
        cursor: 'pointer',
        revert: true
    });



    // drop Array

    var hotSpotz = [
        []
    ];

    $.each(hotSpotz, function() {

        $('.dropp').html('<div class="earth"></div>');

        $('.earth').droppable({
            accept: '.drag-wrap div',
            hoverClass: 'hovered',
            over: lessOpac,
            out: fullOpac,
            drop: land
        });

    });

    function lessOpac() {
        $('.b4-pickup img').css("opacity", "0.6");
    }

    function fullOpac() {
        $('.b4-pickup img').css("opacity", "1");
    }

    function land(event, ui) {


        $('.img-wrap').show();
        $('.am-container').removeClass('bg-first');
        $('.drag-wrap').hide();
        $('.dropp').hide();

        //  return true;
        console.log('is visible');
        var number = 0;

        for (var i = 0; i < 15; i++) {
            number++;
            console.log(number);
            $('<img src="covid-molecule.png" class="cube-side-1 cm' + number + '"alt="covid molecule" draggable="false" />').delay(1000).appendTo(".am-cube").hide();
            $('<img src="covid-molecule-1.png" class="cube-side-1 c2m' + number + '"alt="covid molecule" draggable="false" />').delay(1000).appendTo(".am-cube").hide();
        }



        $('img').each(function(index) {

            $(this).delay(1 * index).fadeIn(200);

            $('img').delay(10 * index).addClass('thought');
        });
    }
    $('.am-cube img').hide();

    // new code
    var Slice = function() {
      var sliceDiv = document.getElementById('slice');
      var gridX = 4;
      var gridY = 2;
      var w = sliceDiv.offsetWidth;
      var h = sliceDiv.offsetHeight;
      var img = document.querySelectorAll('#slice img')[0].src;
      var delay = 0.05;
  
      console.log(w, h, img);
  
      this.create = function() {
          for (x = 0; x < gridX; x++) {
  
              var width = x * w / gridX + "px";
              var div = document.createElement("div");
              document.getElementById('slice').appendChild(div);
              div.style.left = width;
              div.style.top = 0; 
              div.style.width = w / gridX + "px";
              div.style.height = h + "px";
              div.style.backgroundImage = "url(" + img + ")";
              div.style.backgroundPosition = "-" + width;
              div.style.backgroundSize = w + "px";
              div.style.transitionDelay = x * delay + "s";
              sliceDiv.classList.remove('active');
          } 
    
      }
  
      this.create();
  
      document.getElementById("slice").onmouseover = function() {mouseOver()};
      document.getElementById("slice").onmouseout = function() {mouseOut()};
     
      function mouseOver() {
          sliceDiv.classList.add('active');  
      }
  
      function mouseOut() {
          sliceDiv.classList.remove('active'); 
      }
  
  }
  
  window.onload = function() {
      var slice = new Slice();
  };
}