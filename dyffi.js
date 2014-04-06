var Dyffi = (function(self) {

	function Dyffi(paramsInfo, lastStatistics) {
		this.paramsInfo = paramsInfo;
		this.lastStatistics = lastStatistics;
	}

	Dyffi.prototype.getValueByName = function() {
		// get current value
		return null;
	}

	Dyffi.prototype.step = function(success, currentParams) {
		// if(success) { ... } else { ... }
	}

	Dyffi.prototype.getStatistics = function() {
		return {test: "new-statistics-test"};
	}

	return Dyffi;

})();