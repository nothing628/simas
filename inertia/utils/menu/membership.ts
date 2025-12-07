import type { SidebarSection } from '../sidebar-menu'

const MembershipSection: SidebarSection = {
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
}

export default MembershipSection
