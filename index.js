let Web3 = require("web3");

// console.log(Web3);

let web3 = new Web3(new Web3.providers.HttpProvider("HTTP://127.0.0.1:7545"));

// console.log(web3);

// let balance =  web3.eth.getBalance("0xEDF793C5815e63DA69501C4a5a2B5215b84B8a79").then((res) => {
//     console.log(res);
// });

// let balance =  web3.eth.getBalance("0xEDF793C5815e63DA69501C4a5a2B5215b84B8a79").then((res) => {
//     console.log(web3.utils.fromWei(res,"ether"));
// });
/* 
let transferEther = web3.eth.sendTransaction({
        from:"0xEDF793C5815e63DA69501C4a5a2B5215b84B8a79",
        to:"0x7cB197D8DCcd472F9159EcfE60C2361df958bfcE",
        value: web3.utils.toWei("5","ether")
    }).then((res) => {
        console.log(res);
    });
 */
// ABI,address
let contract = new web3.eth.Contract([
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_x",
				"type": "uint256"
			}
		],
		"name": "set",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "x",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
],"0x0d1d04677150273B762c72B5610050Ae70bdD844");

console.log(contract.methods.x().call().then(console.log))
contract.methods.set(90).send({from:"0xEDF793C5815e63DA69501C4a5a2B5215b84B8a79"});
