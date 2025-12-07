import type { SidebarSection } from '../sidebar-menu'

const FinanceSection: SidebarSection = {
  title: 'KEUANGAN & AKUTANSI',
  hasSubRoute: true,
  menu: [
    {
      menuValue: 'Akutansi',
      route: '/accountant',
      active_link: '/accountant',
      icon: 'ti-swipe',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Jenis Transaksi',
          route: '/transaction/type',
        },
        {
          menuValue: 'Pengeluaran',
          route: '/transaction/type',
        },
        {
          menuValue: 'Pendapatan',
          route: '/transaction/type',
        },
        {
          menuValue: 'Tagihan',
          route: '/transaction/type',
        },
        {
          menuValue: 'Transaksi',
          route: '/transaction/type',
        },
      ],
    },
  ],
}

export default FinanceSection
