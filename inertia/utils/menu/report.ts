import type { SidebarSection } from '../sidebar-menu'

const ReportSection: SidebarSection = {
  title: 'LAPORAN',
  hasSubRoute: true,
  menu: [
    {
      menuValue: 'Laporan Kehadiran',
      route: '/report/attendance',
      active_link: '/report/attendance',
      icon: 'ti-calendar-due',
    },
    {
      menuValue: 'Laporan Kelas',
      route: '/report/class',
      active_link: '/report/class',
      icon: 'ti-graph',
    },
    {
      menuValue: 'Laporan Murid',
      route: '/report/student',
      active_link: '/report/student',
      icon: 'ti-chart-infographic',
    },
    {
      menuValue: 'Rapor Murid',
      route: '/report/grade',
      active_link: '/report/grade',
      icon: 'ti-calendar-x',
    },
    {
      menuValue: 'Laporan Cuti',
      route: '/report/leave',
      active_link: '/report/leave',
      icon: 'ti-line',
    },
    {
      menuValue: 'Laporan Pembayaran',
      route: '/report/fees',
      active_link: '/report/fees',
      icon: 'ti-mask',
    },
  ],
}

export default ReportSection
