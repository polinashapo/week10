function sayLearnJavaScript() {
    console.log("Я учу JavaScript!");
  }

  sayLearnJavaScript();

  function drawCats(howManyTimes) {
    for (var i = 0; i < howManyTimes; i++) {
        console.log(i + " =^.^=");
   }
 };

 drawCats(7);


 //карусель

  function showFirst() {
    img.src = 'cat1.jpg';
    img.width = 500;
    img.height = 350;
    img.alt = котик1;
  }

  showFirst();

  function showSecond() {
    img.src = 'cat2.jpg';
    img.width = 500;
    img.height = 350;
    img.alt = котик2;
  }

  showSecond();