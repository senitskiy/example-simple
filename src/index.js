// import freeton from "../freeton_dev/src/index";
import freeton from "freeton";

const Kington = require('../contracts/Kington.json');
const KingtonOrder = require('../contracts/KingtonOrder.json');
const SetcodeMultisigWallet = require('../contracts/SetcodeMultisigWallet.json');

const _ = {
  checkExtensionAvailability() {
    if (window.freeton === undefined) {
      throw 'Extension not available.';
    }
  },
  getProvider() {
    return new freeton.providers.ExtensionProvider(window.freeton);
  }
};

window.app = {
  async requestVersion() {
    const button = document.getElementById('buttonRequestVersion');
    button.disabled = true;
    try {
      _.checkExtensionAvailability();
      const provider = _.getProvider();
      const version = await provider.getVersion();
      console.log(version);
    } finally {
      button.disabled = false;
    }
  },
  async requestNetwork() {
    const button = document.getElementById('buttonRequestNetwork');
    button.disabled = true;
    try {
      _.checkExtensionAvailability();
      const provider = _.getProvider();
      const network = await provider.getNetwork();
      console.log(network);
    } finally {
      button.disabled = false;
    }
  },
  async getMessages() {
    const button = document.getElementById('buttonGetMessages');
    button.disabled = true;
    try {
      _.checkExtensionAvailability();
      const provider = _.getProvider();
      const contract = new freeton.Contract(provider, Kington.abi, Kington.networks['2'].address);
      const messages = await contract.functions.getMessages.runGet();
      console.log(messages);
    } finally {
      button.disabled = false;
    }
  },
  async deploy() {
    const button = document.getElementById('buttonDeploy');
    button.disabled = true;
    try {
      _.checkExtensionAvailability();
      const provider = _.getProvider();
      const signer = provider.getSigner();
      const contractBuilder = new freeton.ContractBuilder(signer, KingtonOrder.abi, KingtonOrder.imageBase64);
      contractBuilder.setInitialAmount('1000022000');
      const constructorParams = {
        destinationAddress: Kington.networks['2'].address,
        message: freeton.utils.stringToHex('London is the capital of Great Britain.'),
      };
      const contract = await contractBuilder.deploy(constructorParams);
      await contract.getDeployProcessing().wait();
      console.log(`Deployed. TxId: ${contract.getDeployProcessing().txid}`)
    } finally {
      button.disabled = false;
    }
  },
  // async run() {
  //   const button = document.getElementById('buttonRun');
  //   button.disabled = true;
  //   try {
  //     _.checkExtensionAvailability();
  //     const provider = _.getProvider();
  //     const signer = provider.getSigner();
  //     const contract = new freeton.Contract(signer, SetcodeMultisigWallet.abi, '0:1ec56ec6f6e510f2e3843663d3e400ceda743a1ad2dcadbd347b0234338795db');
  //     const input = {
  //       dest: '0:11684118bc3062a07126191bf17a650dbb101aff809eb79a9c64b061f4b9b97b',
  //       value: '500000000',
  //       bounce: false,
  //       allBalance: false,
  //       payload: '',
  //     };
  //     const result = await contract.functions.submitTransaction.run(input);
  //     console.log(result);
  //   } finally {
  //     button.disabled = false;
  //   }
  // }
};
