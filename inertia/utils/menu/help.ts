import type { SidebarSection } from '../sidebar-menu'

const HelpSection: SidebarSection = {
  title: 'BANTUAN',
  hasSubRoute: true,
  menu: [
    {
      menuValue: 'Dokumentasi',
      icon: 'ti-file-text',
      route: '/app/dokumentasi',
      hasSubRoute: false,
      showSubRoute: false,
    },
    {
      menuValue: 'Dukungan',
      icon: 'ti-lifebuoy',
      route: '/app/support',
      hasSubRoute: false,
      showSubRoute: false,
    },
  ],
}

export default HelpSection
