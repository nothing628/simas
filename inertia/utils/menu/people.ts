import type { SidebarSection } from '../sidebar-menu'

const PeopleSection: SidebarSection = {
  title: 'ANGGOTA',
  hasSubRoute: true,
  menu: [
    {
      menuValue: 'Murid',
      route: '/murid',
      active_link: '/murid',
      icon: 'ti-school',
    },
    {
      menuValue: 'Orang Tua',
      route: '/ortu',
      active_link: '/ortu',
      icon: 'ti-user-bolt',
    },
    {
      menuValue: 'Wali Murid',
      route: '/guardians',
      active_link: '/guardians',
      icon: 'ti-user-shield',
    },
    {
      menuValue: 'Guru',
      route: '/teacher',
      active_link: '/teacher',
      icon: 'ti-users',
    },
  ],
}

export default PeopleSection
