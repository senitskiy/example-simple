// import freeton from "../freeton_dev/src/index";
import freeton from "freeton";

const Kington = require('../contracts/Kington.json');
const KingtonOrder = require('../contracts/KingtonOrder.json');

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
  }
};
