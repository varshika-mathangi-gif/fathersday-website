function enableSwipe(images) {
  let currentIndex = 0;
  const imgElement = document.getElementById("slideshow");

  function showImage(index) {
    imgElement.src = images[index];
  }

  showImage(currentIndex);

  let startX = 0;

  imgElement.addEventListener("touchstart", function (e) {
    startX = e.touches[0].clientX;
  });

  imgElement.addEventListener("touchend", function (e) {
    let endX = e.changedTouches[0].clientX;
    let diffX = startX - endX;

    if (Math.abs(diffX) > 50) {
      if (diffX > 0) {
        currentIndex = (currentIndex + 1) % images.length;
      } else {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
      }
      showImage(currentIndex);
    }
  });
}
