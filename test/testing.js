var BigNumber = require('bignumber.js');

const TexTrace = artifacts.require("TexTrace");
const name = "TexTrace";
const symbol = "TT";
const powered = 18+9;
const initialSupply = new BigNumber ( Math.pow(10, powered) );

contract('TexTrace', accounts =>{
    const contractOwner = accounts[0];
    const contractUser1 = accounts[1];
    const transferAmount = new BigNumber ( initialSupply/4 );
    const form = 0;
    const certificate = 0;
    const ref = "Zara Order";


    describe('Test Cotton', function () {
        beforeEach(async function f() {
            this.contract = await TexTrace.new({from:contractOwner});
        });
        afterEach(async function f() {

        });

        it('Get the balance of cotton', async function () {
            await this.contract.balanceOf(contractOwner,0).then(function (res) {
                console.log(Number(res));
                assert.equal(res, 10**27,'The minted amount of cotton is not correct.');
            });
        });

        it('Get URI', async function () {
            await this.contract.uri(0, {from:contractOwner}).then(function (res) {
                console.log(res);
                //assert.equal(res, 10**27,'The minted amount of cotton is not correct.');
            });
        });

        //safeTransferFrom
        it('Transfer cotton', async function () {
            await this.contract.safeTransferFrom(contractOwner, contractUser1, 0, 1000, "0x00", {from:contractOwner}).then(function (res) {
                //console.log(res);
                //assert.equal(res, 10**27,'The minted amount of cotton is not correct.');
            });
            await this.contract.balanceOf(contractUser1,0).then(function (res) {
                console.log(Number(res));
                assert.equal(res, 1000,'The balance of second account is not correct after the transfer.');
            });
        });


    })


});