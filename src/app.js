function Calendar(id, year, month) {
  var Dlast = new Date(year,month+1,0).getDate();
  var D = new Date(year,month,Dlast);
  var DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay();
  var calendar = document.createElement('div');
  const mnth = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  calendar.id = 'my-calendar';
  document.querySelector('#calendar-container').appendChild(calendar);
  if (DNfirst != 0) {
    for(var  i = 1; i < DNfirst; i++) calendar.innerHTML += '<div class="item empty"></div>';
  }
  // else{
  //   for(var  i = 0; i < 6; i++) calendar.innerHTML += '<div class="item empty"></div>';
  // }
  for(var  i = 1; i <= Dlast; i++) {
    if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
      calendar.innerHTML += '<div class="item today"><p class="day">' + i + '</p></div>';
    }else{
      calendar.innerHTML += '<div class="item"><p class="day">' + i + '</p></div>';
    }
    // if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {
    //   calendar.innerHTML += '<br>';
    // }
  }
  document.querySelector(id).innerHTML = mnth[D.getMonth()] +' '+ D.getFullYear();
  document.querySelector(id).dataset.month = D.getMonth();
  document.querySelector(id).dataset.year = D.getFullYear();

  console.log(D)

}
Calendar("h2", new Date().getFullYear(), new Date().getMonth());
document.querySelector('#left').onclick = function() {
  document.querySelector('#calendar-container').removeChild(document.querySelector('#my-calendar'));
  Calendar("h2", document.querySelector('h2').dataset.year, parseFloat(document.querySelector('h2').dataset.month)-1);
};
document.querySelector('#right').onclick = function() {
  document.querySelector('#calendar-container').removeChild(document.querySelector('#my-calendar'));
  Calendar("h2", document.querySelector('h2').dataset.year, parseFloat(document.querySelector('h2').dataset.month)+1);
};
