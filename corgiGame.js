jQuery.get('https://raw.githubusercontent.com/johnlk/corgiGame/master/images.txt', function(data){
    
    var imageLinks = data.split('\n'); //[]
  
    var maxWidth = Math.floor($(window).width()/160) * 33;
      
    var picArea = document.getElementById('picArea');
    var randomNum = Math.floor( (Math.random()*imageLinks.length) + 1 );
      
    var link;
      
    for (var i = 0; i < imageLinks.length; i++) {
        link = imageLinks[i];
        if(link.length > 0){
            picArea.innerHTML += "<img class=\"pics\" src=" + link + " style=\"max-width: " + maxWidth + "px;\">";
        }
    }
      
    var index;
  
    $('#picArea img').click(function (e){
          
        index = $(this).index() + 1;
          
        if (index == randomNum) {
          
            $('.pics').css("visibility", "hidden");
            $(this).css("visibility", "visible");
                  
            alert("You won!!!");
                  
        }else{
                  
            if (index > randomNum) {
                alert("You're below it");
            }else{
                alert("You're above it");
            }
                  
            $(this).css("visibility", "hidden");
                  
        }
              
      });
    
});