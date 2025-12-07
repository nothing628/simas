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
