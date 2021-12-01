App = {
  web3Provider: null,
  contracts: {},

  init: async function() {
    // Load cars.
    $.getJSON('../auto.json', function(data) {
      var autoRow = $('#autoRow');
      var autoTemplate = $('#autoTemplate');

      for (i = 0; i < data.length; i ++) {
        autoTemplate.find('.panel-title').text(data[i].carname);
        autoTemplate.find('img').attr('src', data[i].picture);
        autoTemplate.find('.car-model').text(data[i].carmodel);
        autoTemplate.find('.car-year').text(data[i].year);
        autoTemplate.find('.car-mileage').text(data[i].mileage);
        autoTemplate.find('.car-engine').text(data[i].engine);
        autoTemplate.find('.car-color').text(data[i].color);
        autoTemplate.find('.car-price').text(data[i].price);
        autoTemplate.find('.btn-reserve').attr('data-id', data[i].id);

        autoRow.append(autoTemplate.html());
      }
    });

    return await App.initWeb3();
  },

  initWeb3: async function() {
  // Modern dapp browsers...
if (window.ethereum) {
  App.web3Provider = window.ethereum;
  try {
    // Request account access
    await window.ethereum.request({ method: "eth_requestAccounts" });;
  } catch (error) {
    // User denied account access...
    console.error("User denied account access")
  }
}
// Legacy dapp browsers...
else if (window.web3) {
  App.web3Provider = window.web3.currentProvider;
}
// If no injected web3 instance is detected, fall back to Ganache
else {
  window.alert("MetaMask is not detected ! Please install Metamask!")
  App.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}
web3 = new Web3(App.web3Provider);
    return App.initContract();
  },

  initContract: function() {
   $.getJSON('AutoSales.json', function(data) {
  // Get the necessary contract artifact file and instantiate it with @truffle/contract
  var AutoSalesArtifact = data;
  App.contracts.AutoSales = TruffleContract(AutoSalesArtifact);

  // Set the provider for the contract
  App.contracts.AutoSales.setProvider(App.web3Provider);

  // Use the smart contract to retrieve and mark the reserved cars
  return App.markReserved();
});
    return App.bindEvents();
  },

  bindEvents: function() {
    $(document).on('click', '.btn-reserve', App.handleReserve);
  },

  markReserved: function() {
   var reserveInstance;

App.contracts.AutoSales.deployed().then(function(instance) {
  reserveInstance = instance;

  return reserveInstance.getCars.call();
}).then(function(cars) {
  for (i = 0; i < cars.length; i++) {
    if (cars[i] !== '0x0000000000000000000000000000000000000000') {
      $('.panel-car').eq(i).find('button').text('Success').attr('disabled', true);
    }
  }
}).catch(function(err) {
  console.log(err.message);
});
  },

  handleReserve: function(event) {
    event.preventDefault();

    var carId = parseInt($(event.target).data('id'));

    var reserveInstance;

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  var account = accounts[0];

  App.contracts.AutoSales.deployed().then(function(instance) {
    reserveInstance = instance;

    // Execute a reservation of a car as a transaction by sending account
    return reserveInstance.reserve(carId, {from: account});
  }).then(function(result) {
    return App.markReserved();
  }).catch(function(err) {
    console.log(err.message);
  });
});
  }

};

$(function() {
  $(window).load(function() {
    App.init();
  });
});
