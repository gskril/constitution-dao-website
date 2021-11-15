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
