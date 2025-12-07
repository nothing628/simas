import type { SidebarSection } from '../sidebar-menu'

const SettingSection: SidebarSection = {
  title: 'PENGATURAN',
  hasSubRoute: true,
  menu: [
    {
      menuValue: 'Pengaturan Umum',
      route: '/setting/general',
      active_link: '/setting/general',
      icon: 'ti-shield-cog',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Profil',
          route: '/setting/general/profile',
        },
        {
          menuValue: 'Keamanan',
          route: '/setting/general/security',
        },
        {
          menuValue: 'Notifikasi',
          route: '/setting/general/security',
        },
        {
          menuValue: 'Aplikasi Terhubung',
          route: '/setting/general/security',
        },
      ],
    },
    {
      menuValue: 'Pengaturan Website',
      route: '/setting/website',
      active_link: '/setting/website',
      icon: 'ti-device-laptop',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Info Sekolah',
          route: '/setting/website/localization',
        },
        {
          menuValue: 'Prefixes',
          route: '/setting/website/localization',
        },
        {
          menuValue: 'Preferensi',
          route: '/setting/website/localization',
        },
        {
          menuValue: 'Bahasa',
          route: '/setting/website/localization',
        },
        {
          menuValue: 'Format Lokal',
          route: '/setting/website/localization',
        },
        {
          menuValue: 'Otentikasi Media Sosial',
          route: '/setting/website/localization',
        },
      ],
    },
    {
      menuValue: 'Pengaturan Aplikasi',
      route: '/setting/app',
      active_link: '/setting/app',
      icon: 'ti-apps',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Pengaturan Tagihan',
          route: '/setting/general/profile',
        },
        {
          menuValue: 'Kustomisasi Kolom',
          route: '/setting/general/profile',
        },
      ],
    },
    {
      menuValue: 'Pengaturan Sistem',
      route: '/setting/system',
      active_link: '/setting/system',
      icon: 'ti-file-symlink',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Pengaturan Email',
          route: '/setting/general/profile',
        },
        {
          menuValue: 'Template Email',
          route: '/setting/general/profile',
        },
        {
          menuValue: 'Pengaturan SMS',
          route: '/setting/general/profile',
        },
        {
          menuValue: 'OTP',
          route: '/setting/general/profile',
        },
        {
          menuValue: 'GDPR Cookies',
          route: '/setting/general/profile',
        },
      ],
    },
    {
      menuValue: 'Pengaturan Pembayaran',
      route: '/setting/payment',
      active_link: '/setting/payment',
      icon: 'ti-zoom-money',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Gerbang Pembayaran',
          route: '/setting/general/profile',
        },
        {
          menuValue: 'Pajak',
          route: '/setting/general/profile',
        },
      ],
    },
    {
      menuValue: 'Pengaturan Akademis',
      route: '/setting/academy',
      active_link: '/setting/academy',
      icon: 'ti-calendar-repeat',
    },
    {
      menuValue: 'Pengaturan Lainnya',
      route: '/setting/other',
      active_link: '/setting/other',
      icon: 'ti-flag-cog',
      hasSubRoute: true,
      subMenus: [
        {
          menuValue: 'Penyimpanan',
          route: '/setting/general/profile',
        },
        {
          menuValue: 'Blokir IP',
          route: '/setting/general/profile',
        },
      ],
    },
  ],
}

export default SettingSection
