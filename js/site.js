/*function download(file)
{
 window.location=file;
}*/

//Javascript for making the images a slideshow
/*slideshow();
function slideshow() {
  var index = 0;
  var i = 0;
  var x = document.getElementsByClassName("imgslide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  index++;
  if (index > x.length) {
    index = 1;
  }
  x[index-1].style.display = "block";
  setTimeout(slideshow, 5000);  //change every 5 seconds
}*/

$(document).ready(function(){
  $("#fileRequest").click(function() {
    ///window.location = 'Tyler_Tomasello_Resume.pdf';
    window.download = 'Tyler_Tomasello_Resume.pdf';
      //window.location = '/resume/Tyler_Tomasello_Resume.pdf';
  });
});
