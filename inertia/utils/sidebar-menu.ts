export type SidebarMenu = {
  menuValue: string
  route: string
  icon?: string
  active_link?: string
  alternative_active_links?: string[]
  hasSubRoute?: boolean
  hasSubRouteTwo?: boolean // TODO: WTF
  customSubmenuTwo?: boolean // TODO: WTF
  showSubRoute?: boolean
  showSubRoute1?: boolean // TODO: WTF
  subMenusTwo?: SidebarMenu[] // TODO: WTF
  subMenus?: SidebarMenu[]
}

export type SidebarSection = {
  title: string
  hasSubRoute?: boolean
  showSubRoute?: boolean
  menu: SidebarMenu[]
}

export const sidebarSections: SidebarSection[] = [
  {
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
            menuValue: "Pesan",
            route: "/chat",
          },
          {
            menuValue: "Kalender",
            route: "/chat",
          },
          {
            menuValue: "Surel",
            route: "/chat",
          },
          {
            menuValue: "Todo",
            route: "/chat",
          },
          {
            menuValue: "Catatan",
            route: "/chat",
          },
          {
            menuValue: "Kelola Dokumen",
            route: "/chat",
          },
        ],
      },
    ],
  },
  {
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
  },
  {
    title: 'AKADEMI',
    hasSubRoute: true,
    menu: [
      {
        menuValue: 'Kelas',
        route: '/kelas',
        active_link: 'active',
        icon: 'ti-school-bell',
      },
      {
        menuValue: 'Ruang Kelas',
        route: '/rkelas',
        active_link: 'active',
        icon: 'ti-building',
      },
      {
        menuValue: 'Mata Pelajaran',
        route: '/mapel',
        active_link: 'active',
        icon: 'ti-book',
      },
      {
        menuValue: 'Silabus',
        route: '/silabus',
        active_link: 'active',
        icon: 'ti-book-upload',
      },
      {
        menuValue: 'Jadwal Mapel',
        route: '/time-table',
        active_link: 'active',
        icon: 'ti-table',
      },
      {
        menuValue: 'Ujian',
        route: '/ujian',
        active_link: 'ujian',
        icon: 'ti-hexagonal-prism-plus',
        hasSubRoute: true,
        showSubRoute: false,
        subMenus: [
          {
            menuValue: 'Daftar Ujian',
            route: '/ujian/list',
            active_link: '/ujian/list',
          },
          {
            menuValue: 'Jadwal Ujian',
            route: '/ujian/jadwal',
            active_link: '/ujian/jadwal',
          },
          {
            menuValue: 'Grade Penilaian',
            route: '/ujian/grade',
            active_link: '/ujian/grade',
          },
          {
            menuValue: 'Kehadiran Ujian',
            route: '/ujian/absensi',
            active_link: '/ujian/absensi',
          },
          {
            menuValue: 'Hasil Ujian',
            route: '/ujian/hasil',
            active_link: '/ujian/hasil',
          },
        ],
      },
    ],
  },
  {
    title: 'KELOLA',
    hasSubRoute: true,
    menu: [],
  },
  {
    title: 'HRM',
    hasSubRoute: true,
    menu: [],
  },
  {
    title: 'KEUANGAN & AKUTANSI',
    hasSubRoute: true,
    menu: [],
  },
  {
    title: 'PENGUMUMAN',
    hasSubRoute: true,
    menu: [],
  },
  {
    title: 'LAPORAN',
    hasSubRoute: true,
    menu: [],
  },
  {
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
  },
  {
    title: 'LANGANAN',
    hasSubRoute: true,
    menu: [],
  },
  {
    title: 'DUKUNGAN',
    hasSubRoute: true,
    menu: [],
  },
  {
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
  },
  {
    title: 'BANTUAN',
    hasSubRoute: true,
    menu: [
      {
        menuValue: 'Dokumentasi',
        icon: 'ti-file-text',
        route: '/app/dokumentasi',
        hasSubRoute: false,
        showSubRoute: false,
      },
      {
        menuValue: 'Dukungan',
        icon: 'ti-lifebuoy',
        route: '/app/support',
        hasSubRoute: false,
        showSubRoute: false,
      },
    ],
  },
]
