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
    menu: [
      {
        menuValue: 'SPP & Pembayaran',
        route: '/spp',
        active_link: '/spp',
        icon: 'ti-report-money',
        hasSubRoute: true,
        subMenus: [
          {
            menuValue: "Jenis Pembayaran",
            route: "/transport/route",
          },
          {
            menuValue: "Grup Pembayaran",
            route: "/transport/route",
          },
          {
            menuValue: "Master Pembayaran",
            route: "/transport/route",
          },
          {
            menuValue: "Pembayaran Berjalan",
            route: "/transport/route",
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
            menuValue: "Daftar Anggota",
            route: "/transport/route",
          },
          {
            menuValue: "Daftar Buku",
            route: "/transport/route",
          },
          {
            menuValue: "Peminjaman",
            route: "/transport/route",
          },
          {
            menuValue: "Pengembalian",
            route: "/transport/route",
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
            menuValue: "Daftar Eskul",
            route: "/transport/route",
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
            menuValue: "Daftar Asrama",
            route: "/transport/route",
          },
          {
            menuValue: "Daftar Ruang",
            route: "/transport/route",
          },
          {
            menuValue: "Tipe Ruang",
            route: "/transport/route",
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
            menuValue: "Rute",
            route: "/transport/route",
          },
          {
            menuValue: "Titik Jemput",
            route: "/transport/route",
          },
          {
            menuValue: "Kendaraan",
            route: "/transport/route",
          },
          {
            menuValue: "Pengemudi",
            route: "/transport/route",
          },
          {
            menuValue: "Tetapkan Kendaraan",
            route: "/transport/route",
          }
        ],
      },
    ],
  },
  {
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
            menuValue: "Kehadiran Murid",
            route: "/attendance/murid",
          },
          {
            menuValue: "Kehadiran Guru",
            route: "/attendance/guru",
          },
          {
            menuValue: "Kehadiran Staff",
            route: "/attendance/staff",
          },
        ]
      },
      {
        menuValue: 'Cuti',
        route: '/leaves',
        active_link: '/leaves',
        icon: 'ti-calendar-stats',
        hasSubRoute: true,
        subMenus: [
          {
            menuValue: "Pengajuan Cuti",
            route: "/leaves/list"
          },
          {
            menuValue: "Persetujuan Cuti",
            route: "/leaves/approve"
          }
        ]
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
  },
  {
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
            menuValue: "Jenis Transaksi",
            route: "/transaction/type"
          },
          {
            menuValue: "Pengeluaran",
            route: "/transaction/type"
          },
          {
            menuValue: "Pendapatan",
            route: "/transaction/type"
          },
          {
            menuValue: "Tagihan",
            route: "/transaction/type"
          },
          {
            menuValue: "Transaksi",
            route: "/transaction/type"
          },
        ],
      },
    ],
  },
  {
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
  },
  {
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
    title: "KONTEN",
    hasSubRoute: true,
    menu: [
      {
        menuValue: 'Halaman',
        route: '/content/pages',
        active_link: '/content/pages',
        icon: 'ti-page-break',
      },
      {
        menuValue: 'Berita',
        route: '/content/blog',
        active_link: '/content/blog',
        icon: 'ti-brand-blogger',
        hasSubRoute: true,
        subMenus: [
          {
            menuValue: "Daftar Berita",
            route: "/blog/list"
          },
          {
            menuValue: "Kategori",
            route: "/blog/list"
          },
          {
            menuValue: "Tag",
            route: "/blog/list"
          },
          {
            menuValue: "Komentar",
            route: "/blog/list"
          },
        ],
      },
      {
        menuValue: 'Lokasi',
        route: '/content/location',
        active_link: '/content/location',
        icon: 'ti-map-pin-search',
      },
      {
        menuValue: 'Testimoni',
        route: '/content/testimonials',
        active_link: '/content/testimonials',
        icon: 'ti-quote',
      },
      {
        menuValue: 'FAQ',
        route: '/content/faq',
        active_link: '/content/faq',
        icon: 'ti-question-mark',
      },
    ]
  },
  {
    title: 'LANGANAN',
    hasSubRoute: true,
    menu: [
      {
        menuValue: 'Plan',
        route: '/membership/plans',
        active_link: '/membership/plans',
        icon: 'ti-user-plus',
      },
      {
        menuValue: 'Addons',
        route: '/membership/addons',
        active_link: '/membership/addons',
        icon: 'ti-cone-plus',
      },
    ],
  },
  {
    title: 'DUKUNGAN',
    hasSubRoute: true,
    menu: [
      {
        menuValue: 'Pesan Laporan',
        route: '/support/messages',
        active_link: '/support/messages',
        icon: 'ti-message',
      },
      {
        menuValue: 'Tiket',
        route: '/support/ticket',
        active_link: '/support/ticket',
        icon: 'ti-ticket',
      },
    ],
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
