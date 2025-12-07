import type { SidebarSection } from '../sidebar-menu'

const AcademySection: SidebarSection = {
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
}

export default AcademySection
