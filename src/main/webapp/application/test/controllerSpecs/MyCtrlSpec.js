describe("my module", function () {
    beforeEach(module("myModule"));

    describe("MyCtrl", function () {
        var scope, controller;

        beforeEach(inject(function ($rootScope, $controller) {
            scope = $rootScope.$new();
            controller = $controller;
        }));

        it("should assign message to From My Controller", function () {
            controller("MyCtrl", {$scope: scope});
            expect(scope.message).toBe("From My Controller");
        });
    });
});