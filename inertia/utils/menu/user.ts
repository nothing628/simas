import type { SidebarSection } from '../sidebar-menu'

const UserSection: SidebarSection = {
  title: 'PENGELOLAAN PENGGUNA',
  hasSubRoute: true,
  menu: [
    {
      menuValue: 'Pengguna',
      icon: 'ti-users-minus',
      route: '/user/user-list',
      active_link: '/user/user-list',
    },
    {
      menuValue: 'Roles & Permissions',
      icon: 'ti-shield-plus',
      route: '/user/user-list',
      active_link: '/user/user-list',
    },
    {
      menuValue: 'Permintaan Hapus Akun',
      icon: 'ti-user-question',
      route: '/user/user-list',
      active_link: '/user/user-list',
    },
  ],
}

export default UserSection
