const {TonClient} = require("@tonclient/core");
const {libNode} = require("@tonclient/lib-node");

const fs = require('fs');
const hex2ascii = require('hex2ascii')

let currentContract = process.argv[2]||'0:6ec91ce8f9f14f4d757003c9e673b7cda605774ca64128d8f4667169430165e5';

// const storage =  require('./client999999/client999999.Contract.js');    //require('./TestStorageContract.js'); //specify the path to the .js file
// const storagePath = './client999999/client999999Contract.json'; //'./TestStorageContract.json';

const storage = require('./Contract.js'); //specify the path to the .js file
const storagePath = './Contract1.json';

const abi = {
  type: 'Contract',
  value: storage.package.abi
};

// let gasFeeALL = 0;

function toHex(input) {
  let output = '';
  for (i = 0; i < input.length; i ++){output += hex(input[i]).toString(16)}
  return String(output);
}

async function main(client) {
  try{

    const storageJson = fs.readFileSync(storagePath,{encoding: "utf8"});
    const storageData = JSON.parse(storageJson);
    const storageAddress = storageData.address;

        let resultQC = await client.net.query_collection({
          collection: 'accounts',
          filter: { id: { eq: currentContract } },
          result: 'boc'
        });

        const  paramsOfEncodeMessage = {
          abi: abi,
          address: currentContract, // storageAddress,
          call_set: {
            function_name: 'getName',  //getBalance getRootAddress allowance 

            // ./tonos-cli run <wallet_address> getName {} --abi TONTokenWallet.abi
            // ./tonos-cli run <wallet_address> getSymbol {} --abi TONTokenWallet.abi
            // ./tonos-cli run <wallet_address> getDecimals {} --abi TONTokenWallet.abi
            // ./tonos-cli run <wallet_address> getBalance {} --abi TONTokenWallet.abi
            // ./tonos-cli run <wallet_address> getWalletKey {} --abi TONTokenWallet.abi
            // ./tonos-cli run <wallet_address> getRootAddress {} --abi TONTokenWallet.abi
            // ./tonos-cli run <wallet_address> allowance {} --abi TONTokenWallet.abi            
            input: {}

            // input: {
            //   storageAddress: storageAddress,
            //   tokenId: tokenId,
            // }            
          },
          signer: { type: 'None' },

          // signer: {
          //   type: 'Keys',
          //   keys: contractKeys }
          // }
        };

        let resultEM = await client.abi.encode_message(paramsOfEncodeMessage);
        
        const paramsOfRunTvm = {
          message: resultEM.message,
          account: resultQC.result[0].boc,
          abi: abi,
        };

        let responseGetOranges = await client.tvm.run_tvm(paramsOfRunTvm);
        console.log('Contract Balance:', responseGetOranges.decoded.output);
        const fds = parseInt(responseGetOranges.decoded.output.value0, 16);//responseGetOranges.decoded.output.
        console.log('Contract Balance:', hex2ascii(responseGetOranges.decoded.output.value0,));

      }catch(err){
        console.log(err);
      }
    }

    (async () => {
      try {
        TonClient.useBinaryLibrary(libNode);
        const client = new TonClient({
          network: {
            server_address: 'frhb52973ds.ikexpress.com'//'net.ton.dev'
          }
        });
        console.log("frhb52973ds.ikexpress.com'");
        await main(client);
        process.exit(0);
      } catch (error) {
        console.error(error);
      }
    })();
