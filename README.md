# dapp-contract-registry

## Usage

```
const {address, abi} = registy.get('[CONTRACT]', '[NETWORK]')
```


## Example 

- `npm install yesbit/dapp-contract-registry`
- Add the following to your JS code:

```
import registy from 'dapp-contract-registry'
const {address, abi} = registy.get('market', 'ropsten')
```