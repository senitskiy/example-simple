import freeton from "freeton";

const kington = require('../contracts/kington.json');

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
    const contract = new freeton.Contract(kington, provider);
    contract.getMessages().get().then((messages) => console.log(messages));
  }
};