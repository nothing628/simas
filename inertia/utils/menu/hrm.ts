import type { SidebarSection } from '../sidebar-menu'

const HRMSection: SidebarSection = {
  title: 'HRM',
  hasSubRoute: true,
  menu: [
    {
      menuValue: 'Staff',
      route: '/staff',
      active_link: '/staff',
      icon: 'ti-users-group',
    },
    {
      menuValue: 'Departemen',
      route: '/department',
      active_link: '/department',
      icon: 'ti-layout-distribute-horizontal',
    },
    {
      menuValue: 'Penempatan',
      route: '/penempatan',
      active_link: '/penempatan',
      icon: 'ti-user-exclamation',
    },
    {
      menuValue: 'Kehadiran',
      route: '/attendance',
      active_link: '/attendance',
      icon: 'ti-calendar-share',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Kehadiran Murid',
          route: '/attendance/murid',
        },
        {
          menuValue: 'Kehadiran Guru',
          route: '/attendance/guru',
        },
        {
          menuValue: 'Kehadiran Staff',
          route: '/attendance/staff',
        },
      ],
    },
    {
      menuValue: 'Cuti',
      route: '/leaves',
      active_link: '/leaves',
      icon: 'ti-calendar-stats',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Pengajuan Cuti',
          route: '/leaves/list',
        },
        {
          menuValue: 'Persetujuan Cuti',
          route: '/leaves/approve',
        },
      ],
    },
    {
      menuValue: 'Hari Libur',
      route: '/holiday',
      active_link: '/holiday',
      icon: 'ti-briefcase',
    },
    {
      menuValue: 'Payroll',
      route: '/payroll',
      active_link: '/payroll',
      icon: 'ti-moneybag',
    },
  ],
}

export default HRMSection
