//============================================================
// Settings
//============================================================

PSD.backView.visible = false;
PSD.frontView.visible = false;
PSD.frontView.opacity = 0;
PSD.frontView.scale = 0.5;
PSD.backView.rotationY = -180;
PSD.zing.opacity = 0;
PSD.weeeeee.opacity = 0;
PSD.lookingGood.opacity = 0;
PSD.letsGo.opacity = 0;
PSD.againAgain.opacity = 0;

// ==========================================================================
// Defining each animation revolution of the spinner and some other things
// ==========================================================================

theSpin = function() { 
PSD.frontView.visible=true;
PSD["frontView"].animate({properties:{opacity:1, scale:1}, curve: "spring(2000,30,100)"});
spin1 = new Animation({ view:PSD["spinner"], properties:{rotationZ:360},  curve: "linear", time:50*10});
spin2 = new Animation({ view:PSD["spinner"], properties:{rotationZ:360*2}, curve: "linear", time:50*9});
spin3 = new Animation({ view:PSD["spinner"], properties:{rotationZ:360*3}, curve: "linear", time:50*8});
spin4 = new Animation({ view:PSD["spinner"], properties:{rotationZ:360*4}, curve: "linear", time:50*7});
spin5 = new Animation({ view:PSD["spinner"], properties:{rotationZ:360*5}, curve: "linear", time:50*6});
spin6 = new Animation({ view:PSD["spinner"], properties:{rotationZ:360*6}, curve: "linear", time:50*5});
spin7 = new Animation({ view:PSD["spinner"], properties:{rotationZ:360*7}, curve: "linear", time:50*4});
spin8 = new Animation({ view:PSD["spinner"], properties:{rotationZ:360*8}, curve: "linear", time:50*3});
spin9 = new Animation({ view:PSD["spinner"], properties:{rotationZ:360*9}, curve: "linear", time:50*2});
spin10 = new Animation({ view:PSD["spinner"], properties:{rotationZ:360*2000}, curve: "linear", time:50*80});

// Step through the spinner animation
  spin1.on("end", spin2.start);
  spin2.on("end", spin3.start);
  spin3.on("end", spin4.start);
  spin4.on("end", spin5.start);
  spin5.on("end", spin6.start);
  spin6.on("end", spin7.start);
  spin7.on("end", spin8.start);
  spin8.on("end", spin9.start);
  spin9.on("end", spin10.start);
  spin1.start();  
};

theFlip = function() { 
  PSD.backView.visible=true;
  // PSD.frontView.animate({ properties: {rotationY: 180}, curve: "spring(300,20,350)"});
  PSD.backView.animate({ properties: {rotationY: 0}, curve: "spring(300,20,350)"});
  PSD.frontView.visible=false;
};


text1 = function () {
PSD["press"].animate({properties:{y:100, opacity:0}, curve: "ease-in", time: 200})
PSD["letsGo"].animate({properties:{y:30, opacity:1}, curve: "spring(500,20,250)"});
};

texta = function () {
PSD["againAgain"].animate({properties:{y:100, opacity:0}, curve: "ease-in", time: 200})
PSD["letsGo"].animate({properties:{y:30, opacity:1}, curve: "spring(500,20,250)"});
};

text2 = function () {
PSD["letsGo"].animate({properties:{y:100, opacity:0}, curve: "ease-in", time: 200})
PSD["lookingGood"].animate({properties:{y:30, opacity:1}, curve: "spring(500,20,250)"});
};

text3 = function () {
PSD["lookingGood"].animate({properties:{y:100, opacity:0}, curve: "ease-in", time: 200})
PSD["weeeeee"].animate({properties:{y:30, opacity:1}, curve: "spring(500,20,250)"});
};

text4 = function () {
PSD["weeeeee"].animate({properties:{y:100, opacity:0}, curve: "ease-in", time: 200})
PSD["zing"].animate({properties:{y:30, opacity:1}, curve: "spring(500,20,250)"});
};

text5 = function () {
PSD["zing"].animate({properties:{y:100, opacity:0}, curve: "ease-in", time: 200})
PSD["againAgain"].animate({properties:{y:30, opacity:1}, curve: "spring(500,20,250)"});
};

theReset = function () {
PSD.frontView.visible = true;
PSD.backView.visible = false;
PSD.frontView.opacity = 0;
PSD.frontView.scale = 0.5;
PSD.backView.rotationY = -180;
PSD.zing.opacity = 0;
PSD.weeeeee.opacity = 0;
PSD.lookingGood.opacity = 0;
PSD.letsGo.opacity = 0;
PSD.zing.y = 0;
PSD.weeeeee.opacity = 0;
PSD.weeeeee.y = 0;
PSD.lookingGood.y = 0;
PSD.letsGo.y = 0;
};


//================================================================
// onClick Functions
//================================================================

// Play the functions on Press
PSD.press.on("click", function() {
	theSpin();
  utils.delay(0, text1);
  utils.delay(1400, text2);
  utils.delay(2900, text3);
  utils.delay(6700, text4);
  utils.delay(6700, theFlip);
  utils.delay(9000, text5);
})


// Play the functions on "Again, Again"
PSD.againAgain.on("click", function() {
  theReset();
  theSpin();
  utils.delay(0, texta);
  utils.delay(1400, text2);
  utils.delay(2900, text3);
  utils.delay(6700, text4);
  utils.delay(6700, theFlip);
  utils.delay(9000, text5);
})






