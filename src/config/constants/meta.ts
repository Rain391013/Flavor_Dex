import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Flavors.Tools',
  description:
    'Tools & dApps to interact with the Flavors Defi ecosystem.',
  image: `${window.location.host}/images/flavors/flavorsBSC.svg`,
}

export const customMeta: { [key: string]: PageMeta } = {
  '/': {
    title: '',
    description: '',
    image: '',
  },
}
