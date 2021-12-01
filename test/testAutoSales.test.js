const AutoSales = artifacts.require("AutoSales");

contract("AutoSales", (accounts) => {
 let autoSales;
 let expectedBuyer;

 before(async () => {
     autoSales = await AutoSales.deployed();
 });

 describe("Reserving a test drive and retrieving account addresses", async () => {
   before("Make a reservation using accounts[0]", async () => {
     await autoSales.reserve(8, { from: accounts[0] });
     expectedBuyer = accounts[0];
   });


it("can fetch the address of an customer by car id", async () => {
    const car = await autoSales.cars(8);
    assert.equal(car, expectedBuyer, "The buyer of the first reservation should be the first account.");
  });
   

  it("First buyer should be expected buyer", async () => {
    const cars = await autoSales.getCars();
    assert.equal(cars[8], expectedBuyer, "The first buyer should be in the addresses array.");
   });

  });


  describe("Subsuquent accounts should be able to make a reservation. ", async () => {
    before("Make a reservation using accounts[1]", async () => {
      await autoSales.reserve(3, { from: accounts[1] });
      expectedBuyer = accounts[1];
    });
 
 
 it("Retrieve customer by car id", async () => {
     const car = await autoSales.cars(3);
     assert.equal(car, expectedBuyer, "The buyer of the first reservation should be the first account.");
   });
    
 
   it("retrieve buyer addresses", async () => {
     const cars = await autoSales.getCars();
     assert.equal(cars[3], expectedBuyer, "Secoond buyer should be inclueded in array.");
    });
 
   });


   describe("Reservation of the third buyer should be the third account", async () => {
    before("Make a reservation using accounts[2]", async () => {
      await autoSales.reserve(7, { from: accounts[2] });
      expectedBuyer = accounts[2];
    });

   
 
    it("Fetch the address of an owner by car id by third account", async () => {
     const cars = await autoSales.cars(7);
     assert.equal(cars, expectedBuyer, "The expected buyer should be the third account.");
   });

  });

});

  