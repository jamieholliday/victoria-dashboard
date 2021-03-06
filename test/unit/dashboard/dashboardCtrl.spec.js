describe('accountLoginCtrl', function() {
	'use strict';

    var createController, 
        $rootScope, 
        deferred,
        vm,
        scope,
        dataService,
        fakeData;

    beforeEach(module('dashboard'));

    beforeEach(inject(function($controller, _$rootScope_, $q) {
        $rootScope = _$rootScope_;
        scope = $rootScope.$new();
        deferred = $q.defer();

        dataService = {
            getData: function(){}
        };

        createController = function() {
            return $controller('dashboardCtrl', {
                dataService: dataService
            });
        };

        fakeData =  {
            data: true
        };

        //Spys
        spyOn(dataService, 'getData').and.returnValue(fakeData);

        vm = createController();

    }));

    it('should get data for burndown chart', function() {
        expect(dataService.getData).toHaveBeenCalledWith('burndown', 'object');
        expect(dataService.getData).toHaveBeenCalledWith('todo', 'array');
        expect(dataService.getData).toHaveBeenCalledWith('nps', 'object');
        expect(dataService.getData).toHaveBeenCalledWith('satisfaction', 'object');
        expect(dataService.getData).toHaveBeenCalledWith('velocity', 'object');
    });
});