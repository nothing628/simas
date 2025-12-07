import type { SidebarSection } from '../sidebar-menu'

const ManagementSection: SidebarSection = {
  title: 'KELOLA',
  hasSubRoute: true,
  menu: [
    {
      menuValue: 'SPP & Pembayaran',
      route: '/spp',
      active_link: '/spp',
      icon: 'ti-report-money',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Jenis Pembayaran',
          route: '/transport/route',
        },
        {
          menuValue: 'Grup Pembayaran',
          route: '/transport/route',
        },
        {
          menuValue: 'Master Pembayaran',
          route: '/transport/route',
        },
        {
          menuValue: 'Pembayaran Berjalan',
          route: '/transport/route',
        },
      ],
    },
    {
      menuValue: 'Perpustakaan',
      route: '/library',
      active_link: '/library',
      icon: 'ti-notebook',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Daftar Anggota',
          route: '/transport/route',
        },
        {
          menuValue: 'Daftar Buku',
          route: '/transport/route',
        },
        {
          menuValue: 'Peminjaman',
          route: '/transport/route',
        },
        {
          menuValue: 'Pengembalian',
          route: '/transport/route',
        },
      ],
    },
    {
      menuValue: 'Ekstrakurikuler',
      route: '/eskul',
      active_link: '/eskul',
      icon: 'ti-run',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Daftar Eskul',
          route: '/transport/route',
        },
      ],
    },
    {
      menuValue: 'Asrama',
      route: '/asrama',
      active_link: '/asrama',
      icon: 'ti-building-fortress',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Daftar Asrama',
          route: '/transport/route',
        },
        {
          menuValue: 'Daftar Ruang',
          route: '/transport/route',
        },
        {
          menuValue: 'Tipe Ruang',
          route: '/transport/route',
        },
      ],
    },
    {
      menuValue: 'Transportasi',
      route: '/transport',
      active_link: '/transport',
      icon: 'ti-bus',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Rute',
          route: '/transport/route',
        },
        {
          menuValue: 'Titik Jemput',
          route: '/transport/route',
        },
        {
          menuValue: 'Kendaraan',
          route: '/transport/route',
        },
        {
          menuValue: 'Pengemudi',
          route: '/transport/route',
        },
        {
          menuValue: 'Tetapkan Kendaraan',
          route: '/transport/route',
        },
      ],
    },
  ],
}

export default ManagementSection
