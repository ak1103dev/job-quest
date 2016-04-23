let mongoose = require('mongoose');

let tripSchema = mongoose.Schema({
	trip: {
		name: String,
		price: Number,
		description: String
	}
});

module.exports = mongoose.model('Trip', tripSchema);