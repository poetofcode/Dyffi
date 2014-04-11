var express = require('express');
var http = require('http');
var path = require('path');
var monk = require('monk');

var app = express();

// all environments
app.set('port', 3033);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.methodOverride());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static(process.cwd() + '/public'));

// development only
if ('development' == app.get('env')) {
	app.use(express.errorHandler());
}

// db connection
var db = monk('localhost:27017/gamecoins');
var collection = db.get('statistics');

app.post('/save-statistics', function(req, res) {
	var newStatistics = req.param('statistics', {});

	collection.findOne({}, function(err, found) {
		if(err) {
			return res.end("Saving statistics error");
		}
		if(!found) {
			return collection.insert(newStatistics, function() { res.end(); });
		}

		collection.update({_id: found._id}, newStatistics, function() { res.end(); });
	});
});

app.get('/get-statistics', function(req, res) {
	collection.findOne({}, function(err, found) {
		if(err) {
			return res.json({error: 'Fetching statistics error'});
		}

		res.json(found);
	});
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('Express server listening on port ' + app.get('port'));
});
