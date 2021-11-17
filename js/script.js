async function fetchData() {
	const rawResponse = await fetch('https://api.constitutiondao.com/raised')
	const content = await rawResponse.json()

	return content
}

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}


(async function () {
	const raised = await fetchData()
	const raiedEth = raised.eth.split('.')[0]
	const raisedUsd = raised.dollars.split('.')[0]

	document.getElementById('usd').textContent = `$${numberWithCommas(
		raisedUsd
	)}`
	document.getElementById('eth').textContent = `${raiedEth}`
})()

setInterval(function(){ 
    (async function () {
		const raised = await fetchData()
		const raiedEth = raised.eth.split('.')[0]
		const raisedUsd = raised.dollars.split('.')[0]
	
		document.getElementById('usd').textContent = `$${numberWithCommas(
			raisedUsd
		)}`
		document.getElementById('eth').textContent = `${raiedEth}`
	})()
}, 10000);

var countDownDate = new Date("Nov 18, 2021 18:00:00").getTime();

setInterval(function() {
	var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var daysLabel = days !== 1 ? " days, " : " day, ";
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var hoursLabel = hours !== 1 ? " hours, " : " hour, ";
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var minutesLabel = minutes !== 1 ? " minutes " : " minute ";
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // If the count down is finished, write some text
  if (distance < 0) {
	  document.getElementById("countdown").innerHTML = "It's auction time!!";
  } else {
	  // Display the result in the element with id="demo"
	  document.getElementById("countdown").innerHTML = days + daysLabel + hours + hoursLabel
	  + minutes + minutesLabel + " until auction";
  }
}, 1000)
