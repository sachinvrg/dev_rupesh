function SearchPhotos() {
	let clientId = ""
	let query=getElementById("search").value;
	let url = ""

	// make a request to the api

	fetch(url)
	.then(function (data){
		return data.json();
	})
	.then(function (data){
		console.log(data);
	
	data.result.forEach(photo => {
		var reault = `
			<img src="${photo.urls.regular}">
			<a href="${photo.links.download}">
			`;
			$("#result").html(result);
	})	
})