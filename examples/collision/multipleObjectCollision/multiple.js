//Bad
objects.forEach(function (objectA, i) {
	for (var j = 0; j < objects.length; j++) {
		var objectB = objects[j];
		if (hitTestObject(objectA, objectB)) {
			//do something
		}
	}
});
/*
Result:
For 6 objects - 36
*/

//Better
objects.forEach(function (objectA, i) {
	for (var j = 0; j < objects.length; j++) {
		var objectB = objects[j];
		if (i !== j && hitTestObject(objectA, objectB)) {
			//do something
		}
	}
});
/*
Result:
For 6 objects - 30
*/



//The best
objects.forEach(function (objectA, i) {
	for (var j = i + 1; j < objects.length; j++) {
		var objectB = objects[j];
		if (hitTestObject(objectA, objectB) {
			//do whatever
		}
	}
});

/*
Result:
For 6 objects - 15
*/
