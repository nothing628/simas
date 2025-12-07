import type { SidebarSection } from '../sidebar-menu'

const AnnouncementSection: SidebarSection = {
  title: 'PENGUMUMAN',
  hasSubRoute: true,
  menu: [
    {
      menuValue: 'Papan Pengumuman',
      route: '/announcements',
      active_link: '/announcements',
      icon: 'ti-clipboard-data',
    },
    {
      menuValue: 'Acara',
      route: '/event',
      active_link: '/event',
      icon: 'ti-calendar-question',
    },
  ],
}

export default AnnouncementSection
