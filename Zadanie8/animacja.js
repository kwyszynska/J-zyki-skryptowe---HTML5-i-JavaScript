$('#pierwszy')
.css({ background : 'blue',color: 'white'  })
.delay(2000)
.slideUp()
.delay(1000) 
.fadeIn(1000); 


$("#1").on('click', function(){
    $(this).animate({
        width: "500px",
        opacity: 0.4,
        fontSize: "3em",
        borderWidth: "10px"
    }, 1500);
});


$("#2").on({ 
    'mouseover' : function() { 
        $(this).stop().animate({
            width:300}, 500); }, 
            'mouseout' : function() { 
                $(this).stop().animate({width:200}, 500); } 
            }); 


$("#3").on('click', function(){ 
    $(this).animate({ 
        width: "+=" + 50, 
        height: "+=" + 10, 
        opacity: "-=" + 0.15, 
        duration : 100}); 
});


$("#4").on('click', function(){ 
    $(this).animate({ 
        width:1000,
        height:100,  
        opacity: 0.5 }, 
        { 
            duration: 1000, 
            ease: 'linear', 
          
    }); 
});   

    const apiUrl = "https://jsonplaceholder.typicode.com";
    const $list = $(".user-list");

      $("#lista").on("click", function () {
        const $btn = $(this);

        $.ajax({
          url: apiUrl + "/users",
          dataType: "json",
        })
          .done((res) => {
            $list.empty();

            res.forEach((el) => {
              $list.append(
                `<li>${el.address.geo.lat} : ${el.address.geo.lng}</li>`
              );
            });
          })
          .always(() => {
            $btn.removeClass("loading");
            $btn.prop("disabled", false);
          });
      });
