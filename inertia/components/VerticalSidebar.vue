<template>
    <ul>
        <li v-for="item in side_bar_data" :key="item.title" class="mb-[5px]">
            <h6 class="submenu-hdr">
                <span>{{ item.title }}</span>
            </h6>
            <ul class="block mb-[15px]">
                <template v-for="menu in item.menu" :key="menu.menuValue">
                    <li v-if="!menu.hasSubRoute" :class="{ active: isMenuActive(menu) }" :style="{
                        display:
                            menu.menuValue === 'Authentication' || menu.menuValue === 'Forms'
                                ? 'none'
                                : 'block',
                    }">
                        <a v-if="menu.route" :href="menu.route"
                            class="flex items-center text-sm text-semiabu font-normal w-full relative p-2 group hover:text-primary"
                            @click="expandSubMenus(menu)">
                            <i class="flex items-center justify-center w-6 h-6 text-gray-700 bg-light-400 text-lg rounded-sm"
                                :class="'ti ' + menu.icon"></i>
                            <span
                                class="ml-2.5 text-dark whitespace-nowrap text-sm font-normal group-hover:text-primary">{{
                                    menu.menuValue }}</span>
                        </a>
                        <template v-else>
                            <span>{{ menu.menuValue }}</span>
                            <!-- Handle non-link menu item display -->
                        </template>
                    </li>
                    <li v-else-if="menu.hasSubRouteTwo" class="submenu">
                        <a href="javascript:void(0);" @click="openMenu(menu)" :class="{
                            subdrop:
                                menu.menuValue === 'Application' ||
                                (menu.menuValue === 'Forms' && isMenuActive(menu)),
                            active: isMenuActive(menu),
                        }">
                            <i :class="'ti ' + menu.icon"></i>
                            <span>{{ menu.menuValue }}</span>
                            <span class="menu-arrow"></span>
                        </a>

                        <ul :class="{
                            'block': openMenuItem === menu,
                            'hidden': openMenuItem !== menu,
                        }">
                            <template v-for="subMenus in menu.subMenus" :key="subMenus.menuValue">
                                <li v-if="!subMenus.customSubmenuTwo">
                                    <a :href="subMenus.route" @click="expandSubMenus(subMenus)">{{
                                        subMenus.menuValue
                                    }}</a>
                                </li>
                                <template v-else-if="subMenus.customSubmenuTwo">
                                    <li class="submenu">
                                        <a href="javascript:void(0);" @click="openSubmenuOne(subMenus)" :class="{
                                            subdrop: showSubRoute === subMenus,
                                            active: route_array[1] === subMenus.active_link,
                                        }">
                                            {{ subMenus.menuValue }}
                                            <span class="menu-arrow"></span>
                                        </a>
                                        <ul :class="{
                                            'block': showSubRoute === subMenus,
                                            'hidden': showSubRoute !== subMenus,
                                        }">
                                            <li v-for="subMenuTwo in subMenus.subMenusTwo" :key="subMenuTwo.menuValue">
                                                <a :href="subMenuTwo.route">{{
                                                    subMenuTwo.menuValue
                                                }}</a>
                                            </li>
                                        </ul>
                                    </li>
                                </template>
                            </template>
                        </ul>
                    </li>
                    <li v-else class="submenu">
                        <a href="javascript:void(0)" @click="expandSubMenus(menu)" class="flex" :class="{
                            subdrop: menu.showSubRoute,
                            active: route_array[1] === menu.active_link,
                        }">
                            <i :class="'ti ' + menu.icon"></i>
                            <span>{{ menu.menuValue }}</span>
                            <span class="menu-arrow"></span>
                        </a>
                        <ul :class="{ 'block': menu.showSubRoute, 'hidden': !menu.showSubRoute }">
                            <li v-for="subMenu in menu.subMenus" :key="subMenu.menuValue">
                                <a v-if="subMenu.route" :to="subMenu.route" :class="{
                                    active:
                                        currentPath === subMenu.active_link ||
                                        subMenu.alternative_active_links && subMenu.alternative_active_links.includes(currentPath)
                                }">
                                    {{ subMenu.menuValue }}
                                </a>
                                <template v-else>
                                    <span>{{ subMenu.menuValue }}</span>
                                    <!-- Handle non-link submenu item display -->
                                </template>
                                <ul v-if="subMenu.subMenusTwo" :class="{
                                    'block': subMenu.showSubRoute,
                                    'hidden': !subMenu.showSubRoute,
                                }">
                                    <li v-for="subSubMenu in subMenu.subMenusTwo" :key="subSubMenu.menuValue">
                                        <a v-if="subSubMenu.route" :href="subSubMenu.route"
                                            :class="{ active: currentPath === subSubMenu.active_link }">
                                            {{ subSubMenu.menuValue }}
                                        </a>
                                        <template v-else>
                                            <span>{{ subSubMenu.menuValue }}</span>
                                            <!-- Handle non-link submenu item display -->
                                        </template>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </template>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">
import { sidebarSections, SidebarMenu } from '~/utils/sidebar-menu'
import { computed, onMounted, ref } from 'vue'

const side_bar_data = ref(sidebarSections)
const openMenuItem = ref()
const showSubRoute = ref()
const route_array = ref<any>([])

const expandSubMenus = (menu: SidebarMenu) => {
    side_bar_data.value.forEach((item) => {
        if (item.menu && Array.isArray(item.menu)) {
            item.menu.forEach((subMenu) => {
                if (subMenu !== menu) {
                    subMenu.showSubRoute = false;
                    subMenu.showSubRoute1 = false;
                }
            });
        }
    });
    menu.showSubRoute = !menu.showSubRoute;
    // Save the state to localStorage
    localStorage.setItem("openSubMenu", JSON.stringify(side_bar_data));
}

const openMenu = (menu: SidebarMenu) => {
    openMenuItem.value = openMenuItem.value === menu ? null : menu;
    // Save the state to localStorage
    localStorage.setItem(
        "openMenuItem",
        openMenuItem.value ? openMenuItem.value.menuValue : null
    );
}

const openSubmenuOne = (subMenus: SidebarMenu) => {
    showSubRoute.value = showSubRoute.value === subMenus ? null : subMenus;
    // Save the state to localStorage
    localStorage.setItem(
        "showSubRoute",
        showSubRoute.value ? showSubRoute.value.menuValue : null
    );
}

const restoreMenuState = () => {
    // Restore the state from localStorage
    const openMenuItemLocal = localStorage.getItem("openMenuItem");
    const openSubMenu = localStorage.getItem("openSubMenu");

    if (openSubMenu) {
        side_bar_data.value = JSON.parse(openSubMenu);
    }

    if (openMenuItemLocal) {
        openMenuItem.value = side_bar_data.value.find(
            (item) => item.menu && item.menu.some((menu) => menu.menuValue === openMenuItemLocal)
        );
    }
}

const getCurrentPath = () => {
    if (window && window.location) {
        const currentPath = window.location.pathname
        route_array.value = currentPath.split('/')
    }

    return route_array.value
}

const currentPath = computed(() => {
    return getCurrentPath();
})

const isMenuActive = (_menu: SidebarMenu) => {
    return false;
}

onMounted(restoreMenuState)
</script>
