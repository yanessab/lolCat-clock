var time = new Date().getHours();

var noon = 12;
var evening = 19;
var partyTime = 18;
var napTime = 16;
var lunchTime = 13;
var wakeupTime = 9;

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var lolcat = document.getElementById("lolcat");
var timeEventJS = document.getElementById("timeEvent");

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

var updateClock = function()
{

  var messageText;
  var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

  if (time == wakeupTime)
{
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
  messageText = "Despierta, despierta, es hora de levantarse!";
}

  else if (time <= noon)
{
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
  messageText = "Buenos d\xEDas!";
}

  else if (time == lunchTime)
{
  image = "https://c.o0bg.com/rf/image_960w/Boston/2011-2020/2016/04/27/BostonGlobe.com/Metro/Images/160425dixfield0256A.jpg";
  messageText = "Lleg\xF3 la hora de comer!";
}

  else if (time == napTime)
{
  image = "http://i.dailymail.co.uk/i/pix/2012/06/12/article-2158361-13940DBB000005DC-50_634x356.jpg";
  messageText = "Es hora para la siesta!";
}

  else if (time == partyTime)
{
  image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
  messageText = "Lleg\xF3 la hora feliz!";
}

  else if (time >= evening)
{
  image = "http://images.huffingtonpost.com/2015-11-27-1448621966-2272308-PunnyandFunnyNamesforCats-thumb.jpg";
  messageText = "Buenas Noches!";
}

  else
{
  image = "https://s.yimg.com/bt/api/res/1.2/kBFfkqqgCgmvwVPNudg57w--/YXBwaWQ9eW5ld3NfbGVnbztxPTg1O3c9NjMw/http://l.yimg.com/os/publish-images/news/2014-12-22/f8bbb970-89ac-11e4-80c4-d9de90433192_000_DV1930506.jpg";
  messageText = "Buenas tardes!";
}

console.log(messageText);

timeEventJS.innerText = messageText;

lolcat.src = image;

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');

    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    // Set hours
    if (hours >= noon)
    {
        meridian = "PM";
    }
    if (hours > noon)
    {
        hours = hours - 12;
    }

    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }

    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }

    // put together the string that displays the time
    var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";

    clock.innerText = clockTime;
};

showCurrentTime();
};

updateClock();

var oneSecond = 1000;

setInterval( updateClock, oneSecond);

var partyEvent = function()
{

   if (isPartyTime == false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "A empezar la fiesta!";
      partyTimeButton.style.backgroundColor = "#222";
      // text in the button should read "Party Over"
      // color of the button should be "#0A8DAB" (bonus!)
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "La fiesta termin\xF3";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
      // text in the button should read "PARTY TIME!"
      // color of the button should be "#222" (bonus!)
   }
};

partyTimeButton.addEventListener("click", partyEvent);

var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function ()
{
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function ()
{
    napTime = napTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);
lunchTimeSelector.addEventListener("change", lunchEvent);
napTimeSelector.addEventListener ("change", napEvent);
