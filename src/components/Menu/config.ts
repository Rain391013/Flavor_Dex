import { MenuEntry, menuStatus } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Flavors.Tools',
    icon: 'InfoIcon',
    href: '/',
  },
  {
    label: 'FlavorsBSC.com',
    icon: 'HomeIcon',
    href: 'https://flavorsBSC.com'
  },
  {
    label: 'Presales',
    icon: 'MoonIcon',
    href: '/presales'
  },
  {
    label: 'Drips',
    icon: 'MoonIcon',
    href: '/drips'
  },
  /*
  {
    label: 'Buy',
    icon: 'TradeIcon',
    href: '/swap'
  },
  */
  {
    label: 'Merch',
    icon: 'NftIcon',
    href: 'https://flavorsbsc.com/#shop',
  },
  {
    label: 'Community Links',
    icon: 'GroupsIcon',
    items: [ 
      {
        label: 'Twitter',
        href: 'https://twitter.com/FlavorsBSC',
      },
      {
        label: 'Telegram',
        // icon: 'TelegramIcon',
        href: 'https://t.me/flavorsBSC',
      },
      {
        label: 'Discord',
        href: 'https://discord.gg/6QnCxUQv8V',
      },
      {
        label: 'Youtube',
        href: 'https://www.youtube.com/channel/UCSgHGLH-IkUbBIQYfSjVoFA',
      },
      {
        label: 'Facebook',
        href: 'https://www.facebook.com/groups/475542200437397',
      },
      {
        label: 'Instagram',
        href: 'https://www.instagram.com/flavorsbsc/',
      }, 
      {
        label: 'Github',
        href: 'https://github.com/FlavorsDeFi',
      },
    ],
  }
      /*
    ],
  },
  
  
  /*
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Pools',
    icon: 'PoolIcon',
    href: '/pools',
  },
  {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
  },
  {
    label: 'Collectibles',
    icon: 'NftIcon',
    href: '/collectibles',
  },
  {
    label: 'Team Battle',
    icon: 'TeamBattleIcon',
    href: '/competition',
    status: menuStatus.LIVE,
  },
  {
    label: 'Teams & Profile',
    icon: 'GroupsIcon',
    items: [
      {
        label: 'Leaderboard',
        href: '/teams',
      },
      {
        label: 'Task Center',
        href: '/profile/tasks',
      },
      {
        label: 'Your Profile',
        href: '/profile',
      },
    ],
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://pancakeswap.info',
      },
      {
        label: 'Tokens',
        href: 'https://pancakeswap.info/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://pancakeswap.info/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://pancakeswap.info/accounts',
      },
    ],
  },/*
  {
    label: 'IFO',
    icon: 'IfoIcon',
    href: '/ifo',
  }, 
  {
    label: 'Github',
    icon: 'IfoIcon',
    href: 'https://github.com/FlavorsDeFi',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [ 
      {
        label: 'Contact',
        href: 'https://docs.localhost:30819/contact-us',
      },
      {
        label: 'Voting',
        href: 'https://voting.localhost:30819',
      }, 
      {
        label: 'Github',
        href: 'https://github.com/FlavorsDeFi',
      }, 
      {
        label: 'Docs',
        href: 'https://docs.localhost:30819',
      },
      {
        label: 'Blog',
        href: 'https://pancakeswap.medium.com',
      },
      {
        label: 'Merch',
        href: 'https://flavorsbsc.com/#shop',
      }, 
    ],
  }, */
]

export default config