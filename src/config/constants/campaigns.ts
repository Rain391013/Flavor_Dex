import { Campaign } from './types'

/**
 * id: The campaign id (required)
 * type: The type of the achievement
 * title: A string or an object to be translated.
 * Note: If the value is a string it is likely used as data in a translation object
 *
 * badge: Achievement avatar
 */

const campaigns: Campaign[] = [
  {
    id: '0',
    type: 'ifo',
    title: 'Flavors',
    badge: 'ifo-flavors.svg',
  },
  {
    id: '1',
    type: 'ifo',
    title: 'Mooney',
    badge: 'ifo-mooney.svg',
  },{
    id: '2',
    type: 'ifo',
    title: 'SafeEarn',
    badge: 'ifo-safeEarn.svg',
  },
]



/**
 * Transform the campaign config into a map. Keeps the config the same
 * as the others and allows easy access to a campaign by id
 */
export const campaignMap = new Map<string, Campaign>()

campaigns.forEach((campaign) => {
  campaignMap.set(campaign.id, campaign)
})

export default campaigns
