describe('paycheckFilter', function() {

	beforeEach(module('AngularPaycheck'));

	it('should ...', inject(function($filter) {

        var filter = $filter('paycheckFilter');

		expect(filter('input')).toEqual('output');

	}));

});