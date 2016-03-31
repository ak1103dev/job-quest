var Trip = require('./models/trip');
module.exports = function(app){
	// app.get('/', function(req, res){
	// 	res.send("Hello world");
	// });


	app.get('/trips', function(req, res){
		console.log("list all trips");
		Trip.find({}, '_id trip.name', function(err, trips) {
			if(err)
				console.log(err);
			if(trips)
				res.send(trips);
			else {
				res.send("no any trip");
			}
		});
	});

	app.post('/trips', function(req, res){
		var newTrip = new Trip();
		newTrip.trip.name = req.body.name;
		newTrip.trip.price = req.body.price;
		newTrip.trip.description = req.body.description;
		console.log("create new trip");
		newTrip.save(function(err){
			if(err)
				throw err;
		});
		res.send("create new trip");
	});

	app.get('/trips/:id', function(req, res){
		console.log('get one trip');
		Trip.findOne({ '_id': req.params.id }, function(err, trip) {
			if(err)
				console.log(err);
			if(trip)
				res.send(trip);
			else {
				res.send("no data");
			}
		});
	});

	app.put('/trips/:id', function(req, res){
		console.log("update trip")
	});

	app.delete('/trips/:id', function(req, res){
		console.log("delete trip");
		Trip.remove({ '_id': req.params.id }, function(err, trip) {
			if(err)
				console.log(err);
			if(trip) {
				res.send(trip);
			}
			else {
				res.send("no data");
			}
		});
	});
};