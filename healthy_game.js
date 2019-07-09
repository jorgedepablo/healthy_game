function main() {

    var img = document.getElementById('imagesrc');
    img.width = 400;
    img.heigth = 600;

    var lifebar = document.getElementById('bar');
    var healthy = document.getElementById('healthy');
    var unhealthy = document.getElementById('unhealthy');

    healthy.onclick = () => {
      if (lifebar.value < 100){
        lifebar.value = lifebar.value + 5;
      }
    };
    unhealthy.onclick = () => {
      if (lifebar.value > 0){
        lifebar.value = lifebar.value - 10;
      }
    };

}
