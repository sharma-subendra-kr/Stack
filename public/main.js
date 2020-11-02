window.onload = function () {
	console.log("onload");

	var rawData = [1, 2, 3];

	window.stack = new Stack.ArrayStack({ data: rawData, initialSize: 3 });
};
