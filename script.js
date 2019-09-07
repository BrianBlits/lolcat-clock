var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var partyEvent = function() {

   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
      partyTimeButton.innerText = "PARTY TIME!";
      partyTimeButton.style.backgroundColor = "#222";
      console.log("#222");
   } else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "PARTY OVER";
      partyTimeButton.style.backgroundColor = "#0A8DAB";
      console.log("#0A8DAB");
   }
};

partyTimeButton.addEventListener('click', partyEvent);
var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");

var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
	console.log("wakeup");
};
var napEvent = function()
{
    napTime = napTimeSelector.value;
	console.log("nap");
};
var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
	console.log("Lunch");
};

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
napTimeSelector.addEventListener('change', napEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
