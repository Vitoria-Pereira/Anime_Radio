function audioPlayer()
{
    var currentSong = 0;
    $("#audioPlayer")[0].src = $("#playlist li a")[0];
    $("#audioPlayer")[0].play();
    $("#playlist li a").click(function(e){
        e.preventDefault();
        $("#audioPlayer")[0].src = this;
        $("#audioPlayer")[0].play();
        $("#playlist li").removeClass("current-song");
        currentSong = $(this).parent().index();
        $(this).parent().addClass("current-song");
    });
    $("#audioPlayer")[0].addEventListener("ended", function(){
        currentSong++;
        if(currentSong == $("#playlist li a").length)
            currentSong = 0;
        $("#playlist li").removeClass("current-song");
        $("#playlist li:eq("+currentSong+")").addClass("current-song");
        $("#audioPlayer")[0].src = $("#playlist li a")[currentSong].href;
        $("#audioPlayer")[0].play();
    });
}

var j = 0;
carousel();

function carousel()
{
  var x = document.getElementsByClassName("slides");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  j++;
  if (j > x.length) {j = 1}    
  x[j-1].style.display = "block";  
  setTimeout(carousel, 20000);
  console.log(j);
}

function openNav()
{
    document.querySelector("#playlist").style.width = "500px";
}

function closeNav()
{
    document.querySelector("#playlist").style.width = "0";
}