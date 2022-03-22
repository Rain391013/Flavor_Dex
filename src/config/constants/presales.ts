import tokens from './tokens'
import { Presale } from './types'



// gets the block number form the starting timestamp
//   (await web3.eth.getBlockNumber())+ ((1634954400-(now()._timestamp))/3)


const presales: Presale[] = [
  {
    id: '0',
    isActive: true,
    presaleAddress: '0x78fDf2F1985118943FF8fc7d4d9702D9820d7C9D',
    name: 'Flavors',
    symbol: 'FLV',
    decimals: 9,
    subTitle: 'Private Invite Whitelisted Presale',
    description: '',
    hardCap:  625,
    softCap:  300,
    minimumContribution: .01,
    maximumContribution: 8,
    totalContributions: 625,
    presaleStartTimestamp: 1634169600,
    presaleEndTimestamp: 1634342400,
    tokenLaunchTimestamp: 1634954400,
    claimsEnabledOnBlockNumber: 12011339,
    globalTotal_contributions: 0,
    globalTotal_claims: 0,
    tokensPerNativeCoin: 105000,
    claimsEnabled: false,
    contributionsEnabled: false,
  },
  {
    id: '0',
    isActive: true,
    presaleAddress: '0xF1A45556a43451E0B23d70b913FdaEd862165cAA',
    name: 'Flavors',
    symbol: 'FLV',
    decimals: 9,
    subTitle: 'Public Whitelist Competition Presale',
    description: '',
    hardCap:  650,
    softCap:  325,
    minimumContribution: .01,
    maximumContribution: 2,
    totalContributions: 0,
    presaleStartTimestamp: 1634698800,
    presaleEndTimestamp: 1634700600,
    tokenLaunchTimestamp: 1634954400,
    claimsEnabledOnBlockNumber: 12011339,
    globalTotal_contributions: 0,
    globalTotal_claims: 0,
    tokensPerNativeCoin: 100000,
    claimsEnabled: false,
    contributionsEnabled: false,
  },
]


export default presales
