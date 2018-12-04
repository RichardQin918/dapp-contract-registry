function get(contract = '', network = '') {
  contract = contract.toLowerCase()
  network  = network.toLowerCase()
  try {
    let res = require(`./contracts/${contract}.json`)
    return res[network]
  }
  catch (error) {
    throw new Error(`Cannot locate contract ${contract} on ${network}: ` + JSON.stringify(error))
  }
}

module.exports = { get }