var Dyffi = (function() {

	var testCurrenVal, min, max, step;
	var TEST_PARAM_NAME = 'timeForNew';

	function Dyffi(paramsInfo, lastStatistics) {
		this.paramsInfo = paramsInfo;
		this.lastStatistics = lastStatistics || {};

		max = this.paramsInfo[TEST_PARAM_NAME]['max']
		min = this.paramsInfo[TEST_PARAM_NAME]['min']
		step = this.paramsInfo[TEST_PARAM_NAME]['step']

		testCurrenVal = parseFloat(this.lastStatistics[TEST_PARAM_NAME]) || max;
	}

	Dyffi.prototype.getCurrentParam = function(paramName) {
		return testCurrenVal;
	}

	Dyffi.prototype.step = function(success, currentParams) {
		if(success) {
			testCurrenVal += step;
		} else {
			testCurrenVal -= step*3;
		}

		if(testCurrenVal > max) testCurrenVal = max;
		if(testCurrenVal < min) testCurrenVal = min;
	}

	Dyffi.prototype.getStatistics = function() {
		var statistics = {};
		statistics[TEST_PARAM_NAME] = testCurrenVal;

		return statistics;
	}

	return Dyffi;

})();