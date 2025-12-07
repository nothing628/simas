import type { SidebarSection } from '../sidebar-menu'

const ContentSection: SidebarSection = {
  title: 'KONTEN',
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
          menuValue: 'Daftar Berita',
          route: '/blog/list',
        },
        {
          menuValue: 'Kategori',
          route: '/blog/list',
        },
        {
          menuValue: 'Tag',
          route: '/blog/list',
        },
        {
          menuValue: 'Komentar',
          route: '/blog/list',
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
  ],
}

export default ContentSection
