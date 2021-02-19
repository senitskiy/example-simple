//
// This file was generated using TON Labs developer tools.
//

const abi = {
    "ABI version": 2,
    "header": [
      "pubkey",
      "time",
      "expire"
    ],
    "functions": [
    {
      "name": "constructor",
      "inputs": [
      { "name":"name", "type":"bytes" },
      { "name":"symbol", "type":"bytes" },
      { "name":"decimals", "type":"uint8" },
      { "name":"root_public_key", "type":"uint256" },
      { "name":"wallet_public_key", "type":"uint256" },
      { "name":"root_address", "type":"address" },
      { "name":"code", "type":"cell" }
      ],
      "outputs": [
      ],
      "id": "0xb"
    },
    {
      "name": "transfer",
      "inputs": [
      { "name":"dest", "type":"address" },
      { "name":"tokens", "type":"uint128" },
      { "name":"grams", "type":"uint128" }
      ],
      "outputs": [
      ],
      "id": "0xc"
    },
    {
      "name": "getBalance_InternalOwner",
      "inputs": [
      { "name":"_answer_id", "type":"uint32" }
      ],
      "outputs": [
      { "name":"value0", "type":"uint128" }
      ],
      "id": "0xd"
    },
    {
      "name": "accept",
      "inputs": [
      { "name":"tokens", "type":"uint128" }
      ],
      "outputs": [
      ],
      "id": "0xe"
    },
    {
      "name": "internalTransfer",
      "inputs": [
      { "name":"tokens", "type":"uint128" },
      { "name":"pubkey", "type":"uint256" },
      { "name":"my_owner_addr", "type":"uint256" }
      ],
      "outputs": [
      ],
      "id": "0xf"
    },
    {
      "name": "destroy",
      "inputs": [
      { "name":"dest", "type":"address" }
      ],
      "outputs": [
      ],
      "id": "0x10"
    },
    {
      "name": "getName",
      "inputs": [
      ],
      "outputs": [
      { "name":"value0", "type":"bytes" }
      ],
      "id": "0x11"
    },
    {
      "name": "getSymbol",
      "inputs": [
      ],
      "outputs": [
      { "name":"value0", "type":"bytes" }
      ],
      "id": "0x12"
    },
    {
      "name": "getDecimals",
      "inputs": [
      ],
      "outputs": [
      { "name":"value0", "type":"uint8" }
      ],
      "id": "0x13"
    },
    {
      "name": "getBalance",
      "inputs": [
      ],
      "outputs": [
      { "name":"value0", "type":"uint128" }
      ],
      "id": "0x14"
    },
    {
      "name": "getWalletKey",
      "inputs": [
      ],
      "outputs": [
      { "name":"value0", "type":"uint256" }
      ],
      "id": "0x15"
    },
    {
      "name": "getRootAddress",
      "inputs": [
      ],
      "outputs": [
      { "name":"value0", "type":"address" }
      ],
      "id": "0x16"
    },
    {
      "name": "getOwnerAddress",
      "inputs": [
      ],
      "outputs": [
      { "name":"value0", "type":"address" }
      ],
      "id": "0x17"
    },
    {
      "name": "allowance",
      "inputs": [
      ],
      "outputs": [
      { "name":"spender", "type":"address" },
      { "name":"remainingTokens", "type":"uint128" }
      ],
      "id": "0x18"
    },
    {
      "name": "approve",
      "inputs": [
      { "name":"spender", "type":"address" },
      { "name":"remainingTokens", "type":"uint128" },
      { "name":"tokens", "type":"uint128" }
      ],
      "outputs": [
      ],
      "id": "0x19"
    },
    {
      "name": "transferFrom",
      "inputs": [
      { "name":"dest", "type":"address" },
      { "name":"to", "type":"address" },
      { "name":"tokens", "type":"uint128" },
      { "name":"grams", "type":"uint128" }
      ],
      "outputs": [
      ],
      "id": "0x1a"
    },
    {
      "name": "internalTransferFrom",
      "inputs": [
      { "name":"to", "type":"address" },
      { "name":"tokens", "type":"uint128" }
      ],
      "outputs": [
      ],
      "id": "0x1b"
    },
    {
      "name": "disapprove",
      "inputs": [
      ],
      "outputs": [
      ],
      "id": "0x1c"
    }
    ],
    "events": [
    ]
};
      

const pkg = {
    abi,
    imageBase64: 'te6ccgECEAEAAiAAAgE0AwEBAcACAEPQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAib/APSkICLAAZL0oOGK7VNYMPShCAQBCvSkIPShBQIJnwAAAAMHBgAnO1E0NP/0z/TANF/+GH4Zvhj+GKAAJT4QsjL//hDzws/+EbPCwDJ7VSACASALCQH+/38h7UTQINdJwgGOENP/0z/TANF/+GH4Zvhj+GKOGPQFcAGAQPQO8r3XC//4YnD4Y3D4Zn/4YeLTAAGOEoECANcYIPkBWPhCIPhl+RDyqN7TPwGOHvhDIbkgnzAg+COBA+iogggbd0Cgud6S+GPggDTyNNjTHwH4I7zyudMfIQoANsEDIoIQ/////byxk1vyPOAB8AH4R26TMPI83gIBIA0MAMe9Rar5/8ILdHGvaiaBBrpOEAxwhp/+mf6YBov/ww/DN8MfwxRwx6ArgAwCB6B3le64X//DE4fDG4fDM//DDxb3wjeTm4/DNo/CFhgHlwMvwikDdJGDhvfCFdeXAzfAB4AT/8M8AgEgDw4Ar7sV75NfhBbpLwA976QNcNf5XU0dDTf9/XDACV1NHQ0gDf0fhFIG6SMHDe+EK68uBk+AAhIyLIz4WAygBzz0DOAfoCgGnPQM+Bz4HJcPsAXwOS8ALef/hngAYN1wItDXCwOpOADcIccA3CHTHyHdIcEDIoIQ/////byxk1vyPOAB8AH4R26TMPI83g==',
};

class Contract {
    /**
    * @param {TONClient} client
    * @param {string} address can be null if contract will be deployed
    * @param {TONKeyPairData} keys
    */
    constructor(client, address, keys) {
        this.client = client;
        this.address = address;
        this.keys = keys;
        this.package = pkg;
        this.abi = abi;
    }

    /**
     */
    async deploy() {
        if (!this.keys) {
            this.keys = await this.client.crypto.ed25519Keypair();
        }
        this.address = (await this.client.contracts.deploy({
            package: pkg,
            constructorParams: {},
            initParams: {},
            keyPair: this.keys,
        })).address;
    }

    /**
    * @param {string} functionName
    * @param {object} input
    * @return {Promise.<object>}
    */
    async run(functionName, input) {
        const result = await this.client.contracts.run({
            address: this.address,
            functionName,
            abi,
            input,
            keyPair: this.keys,
        });
        return result.output;
    }

   /**
    * @param {string} functionName
    * @param {object} input
    * @return {Promise.<object>}
    */
    async runLocal(functionName, input) {
        const result = await this.client.contracts.runLocal({
            address: this.address,
            functionName,
            abi,
            input,
            keyPair: this.keys,
        });
        return result.output;
    }

    /**
     * @param {object} params
     * @param {string} params.dest (address)
     * @param {uint128} params.value
     * @param {bool} params.bounce
     */
    sendTransaction(params) {
        return this.run('sendTransaction', params);
    }

    getBalance() {
        return this.run('getBalance', {});
    }
    /**
     * @param {object} params
     * @param {string} params.dest (address)
     * @param {uint128} params.value
     * @param {bool} params.bounce
     */
    sendTransactionLocal(params) {
        return this.runLocal('sendTransaction', params);
    }

}

Contract.package = pkg;

module.exports = Contract;
