function Client(position) {
  this.position =position;
  this.appears = false;
  this.arrival = 3000;
  this.wait = 0;
}

Client.prototype.drawClient= function (){
  $("#bar").append(this.position);
  this.appears= true;
};
