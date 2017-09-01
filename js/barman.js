function Barman (position){
  this.y = position;
  this.size = 75;
  this.service = false;
  this.catchBeer = [];
}

Barman.prototype.movUp = function () {
  if (this.y > 0) {this.y -= 75;}
  $('#barman').css('top', this.y + 'px');
};

Barman.prototype.movDown = function () {
  if (this.y < 375) {this.y += 75;}
  $('#barman').css('top', this.y + 'px');
};

Barman.prototype.collect = function (position){
  var positionLeft = parseInt($(position.identifier).css('left'));
  if (positionLeft > 300) {
    positionLeft = positionLeft -75;
  }
  $(position.identifier).css('left', positionLeft);
  this.service= true;
  this.catchBeer.unshift(position);
  console.log(this.catchBeer);
};

// Barman.prototype.throw = function (){
//   console.log(this.catchBeer);
//
//   positionT = parseInt($(this.catchBeer[0].identifier).css('left'));
//   console.log(positionT);
//   positionT = positionT - 10;
//   $(this.catchBeer[0].identifier).css('left', positionT);
//   this.service= false;
// };
