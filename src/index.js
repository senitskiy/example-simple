import freeton from "../freeton_dev/src/index";
import ContractFactory from "../freeton_dev/src/contract/ContractFactory";

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
  requestNetwork() {
    _.checkExtensionAvailability();
    const provider = _.getProvider();
    provider.getNetwork().then((network) => console.log(network));
  },
  getMessages() {
    _.checkExtensionAvailability();
    const provider = _.getProvider();
    const contract = new freeton.Contract(Kington.networks['2'].address, Kington.abi, provider);
    contract.functions.getMessages().then((messages) => console.log(messages));
  },
  async deploy() {
    _.checkExtensionAvailability();
    const provider = _.getProvider();
    const signer = provider.getSigner();
    const options = {initAmount: '1000022000', initParams: {}};
    const contractFactory = new ContractFactory(KingtonOrder.abi, KingtonOrder.imageBase64, signer, options);
    const constructorParams = {
      destinationAddress: Kington.networks['2'].address,
      message: freeton.utils.stringToHex('London is the capital of Great Britain.'),
    };
    const contract = await contractFactory.deploy(constructorParams);
    contract
      .getDeployProcessing()
      .wait()
      .then(() => console.log(`Deployed. TxId: ${contract.getDeployProcessing().txid}`));
  }
};
