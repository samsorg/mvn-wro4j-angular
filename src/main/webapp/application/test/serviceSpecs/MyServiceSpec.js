describe("MyService", function(){

    beforeEach(module("myModule"));

    var service;

    beforeEach(inject(function(MyService){
       service = MyService;
    }));

    describe("getData", function(){
        it("should return an array of items", function(){
        	expect(service.getData()).toBeArray();
        });
    });
});