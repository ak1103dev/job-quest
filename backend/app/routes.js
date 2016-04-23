let Trip = require('./models/trip');
module.exports = function(app){
	// app.get('/', function(req, res){
	// 	res.send("Hello world");
	// });

	app.get('/trips', function(req, res){
		console.log("list all trips");
		Trip.find({}, '_id trip.name')
			.then(function(trips) {
				if(trips)
					res.send(trips);
				else
					res.send("no any trip");
			})
			.catch(function(err) {
				res.send(err);
			});
		});

	app.post('/trips', function(req, res){
		console.log("create new trip");
		let newTrip = new Trip();
		newTrip.trip.name = req.body.name;
		newTrip.trip.price = req.body.price;
		newTrip.trip.description = req.body.description;
		newTrip.save(function(err){
			if(err)
				throw err;
		});
		res.send("create new trip");
	});

	app.get('/trips/:id', function(req, res){
		console.log('get one trip');
		Trip.findOne({ '_id': req.params.id })
			.then(function(trip) {
				if(trip)
					res.send(trip);
				else
					res.send("no this trip");
			})
			.catch(function(err) {
				res.send(err);
			});
		});

	app.put('/trips/:id', function(req, res){
		console.log("update trip")
		let update = {
			'trip.name': req.body.name,
			'trip.price': req.body.price,
			'trip.description': req.body.description
		};
		Trip.update({ '_id': req.params.id }, update)
			.then(function(err) {
				if(err)
					throw err;
			});
			res.send('updated');
		});

	app.delete('/trips/:id', function(req, res){
		console.log("delete trip");
		Trip.remove({ '_id': req.params.id })
			.then(function(trip) {
				if(trip)
					res.send(trip);
				else
					res.send("can not delete");
			})
			.catch(function(err) {
				res.send(err);
			});
		});
};