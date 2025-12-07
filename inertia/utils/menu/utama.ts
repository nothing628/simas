import type { SidebarSection } from '../sidebar-menu'

const DashboardSection: SidebarSection = {
  title: 'UTAMA',
  hasSubRoute: true,
  menu: [
    {
      menuValue: 'Dashboard',
      route: '/admin',
      active_link: '/admin',
      icon: 'ti-layout-dashboard',
    },
    {
      menuValue: 'Aplikasi',
      route: '/app',
      active_link: '/app',
      icon: 'ti-layout-list',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Pesan',
          route: '/chat',
        },
        {
          menuValue: 'Kalender',
          route: '/chat',
        },
        {
          menuValue: 'Surel',
          route: '/chat',
        },
        {
          menuValue: 'Todo',
          route: '/chat',
        },
        {
          menuValue: 'Catatan',
          route: '/chat',
        },
        {
          menuValue: 'Kelola Dokumen',
          route: '/chat',
        },
      ],
    },
  ],
}

export default DashboardSection
