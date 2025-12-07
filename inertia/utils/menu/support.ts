import type { SidebarSection } from '../sidebar-menu'

const SupportSection: SidebarSection = {
    title: 'DUKUNGAN',
    hasSubRoute: true,
    menu: [
      {
        menuValue: 'Pesan Laporan',
        route: '/support/messages',
        active_link: '/support/messages',
        icon: 'ti-message',
      },
      {
        menuValue: 'Tiket',
        route: '/support/ticket',
        active_link: '/support/ticket',
        icon: 'ti-ticket',
      },
    ],
  }

export default SupportSection
