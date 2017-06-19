// Get the modal
var modal = document.getElementById('myModal');

// create an array for the Pictures
var illustrations = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i'
  
];

// run thru all the illustrations
for (var i = 0; i < illustrations.length; i++) {
  var illustration = illustrations[i];

  // create all the <img> tags from illustrations
  var imgTag = document.createElement('img');
  imgTag.src = 'assets/images/' + illustration + '.jpg';
  imgTag.id = 'myImg_' + illustration + '_' + i;
  imgTag.className = 'illustration';

  // // add the onclick event
  // imgTag.onclick = function(){
  //     modal.style.display = "block";
  //     var modalImg = document.getElementById('modalImage');
  //     modalImg.src = this.src;
  // }

  // append it to pops
  document.getElementById('pops').appendChild(imgTag);
}


// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }
