var mongoose = require('mongoose');

var tripSchema = mongoose.Schema({
	trip: {
		name: String,
		price: Number,
		description: String
	}
});

module.exports = mongoose.model('Trip', tripSchema);