
import { Drip } from './types'



// gets the block number form the starting timestamp
//   (await web3.eth.getBlockNumber())+ ((1634954400-(now()._timestamp))/3)


const drips: Drip[] = [
  {
    id: '0',
    isActive: true,
    address: '0x98631c69602083d04f83934576a53e2a133d482f',
    lpAddress: '0x4Bc16CbAaBdE5878Cf637429bA13AeaA669030DD',
    name: 'xMooney',
    tokenSymbol: 'xM',
    logo: '../.../images/drips/xMooney.svg',
    subTitle: 'xMooney Decentralized Mining',
    description: 'The xMooney Mining Network is outward-focused, leveraging rewards from multiple cryptocurrencies such as Ethereum, Bitcoin, Monero, and Ravencoin  bringing value back to create resiliency and long-term sustainability in the project.',
    tokenDecimals: 9,
    projectSiteURL: 'https://www.xmooneytoken.com/',
    dripStartBlock: 12011339
  },
  {
    id: '1',
    isActive: true,
    address: '0x099f551eA3cb85707cAc6ac507cBc36C96eC64Ff',
    lpAddress: '0xd9E38dD052BB997d3c983bf9B49D30fa133F7cF9',
    name: 'SafeEarn',
    tokenSymbol: 'SAFEEARN',
    logo: '../.../images/drips/SafeEarn.svg',
    subTitle: 'Safely back to the Moon',
    description: 'SafeEarn is a risk-free passive income platform. Earn popular high-yield tokens seamlessly through staking. No risk, no effort.',
    tokenDecimals: 9,
    projectSiteURL: 'https://www.safearn.money/',
    dripStartBlock: 12011339
  },



]

export default drips
