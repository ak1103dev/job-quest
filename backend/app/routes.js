var Trip = require('./models/trip');
module.exports = function(app){
	// app.get('/', function(req, res){
	// 	res.send("Hello world");
	// });


	app.get('/trips', function(req, res){
		Trip.find({}, function(err, trips) {
			if(err)
				console.log(err);
			if(trips)
				res.send(trips);
			else {
				res.send("no data");
			}
		});
	});

	app.post('/trips', function(req, res){
		var newTrip = new Trip();
		newTrip.trip.name = req.params.name;
		newTrip.trip.price = req.params.price;
		newTrip.trip.description = req.params.description;
		console.log("create new trip");
		newTrip.save(function(err){
			if(err)
				throw err;
		});
		res.send("create new trip");
	});

	app.get('/trips/:id', function(req, res){
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
		
	});

	app.delete('/trips/:id', function(req, res){
		Trip.remove({ '_id': req.params.id }, function(err, trip) {
			if(err)
				console.log(err);
			if(trip)
				res.send(trip);
			else {
				res.send("no data");
			}
		});
	});
};