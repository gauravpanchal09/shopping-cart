import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard Statistics',
    icon: 'shopping-cart-outline',
    link: '/dashboard',
    home: true,
  },
  {
    title: 'User profile management',
    icon: 'layout-outline',
    link: '/layout/userprofile',
  },
  {
    title: 'Category management',
    icon: 'layout-outline',
    link: '/layout/categorymanagement',
  },
  {
    title: 'Product',
    icon: 'layout-outline',
    link: '/layout/product',
  },
  {
    title: 'Order Listing',
    icon: 'layout-outline',
    link: '/layout/orderlisting',
  },
  {
    title: 'CMS ',
    icon: 'keypad-outline',
    link: '/layout/cms',
    children: [
      {
        title: 'About-us',
        link: '/ui-features/grid',
      },
      {
        title: 'Privacy Policy',
        link: '/ui-features/icons',
      },
      {
        title: 'Home page text',
        link: '/ui-features/typography',
      },
      {
        title: 'Terms & Condition',
        link: '/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Banner management',
    icon: 'layout-outline',
    link: '/layout/bannermanagement',
  },
];
