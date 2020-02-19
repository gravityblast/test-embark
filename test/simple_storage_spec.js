/*global artifacts, contract, config, it, assert, web3*/
// const SimpleStorage = artifacts.require('SimpleStorage');
// const Foo = artifacts.require('Foo');

const SimpleStorage = require('Embark/contracts/SimpleStorage');
const Foo = require('Embark/contracts/Foo');

let accounts;

// For documentation please see https://framework.embarklabs.io/docs/contracts_testing.html
config({
  //blockchain: {
  //  accounts: [
  //    // you can configure custom accounts with a custom balance
  //    // see https://framework.embarklabs.io/docs/contracts_testing.html#Configuring-accounts
  //  ]
  //},
  contracts: {
    deploy: {
      "SimpleStorage": {
        args: [100]
      },
      // "Foo": {
      //   args: [101]
      // }
    }
  }
}, (_err, web3_accounts) => {
  accounts = web3_accounts;
});

contract("SimpleStorage", function () {
  this.timeout(0);

  it("should deploy", async function() {
    const instance = await Foo.deploy([150])
    console.log(instance.methods)
  })
});
