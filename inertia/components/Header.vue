<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { onMounted, ref } from 'vue'
import HeaderMenu from './HeaderMenu.vue'

const dropdownToogle = ref(true)
const toggleSidebarMobile = () => {
    const body = document.body;
    body.classList.toggle("slide-nav");
}

const toggleMiniSidebar = () => {
    const body = document.body;
    body.classList.toggle("mini-sidebar");
}

const isElementVisible = (element: HTMLElement | null): boolean => {
    if (element)
        return element.offsetWidth > 0 || element.offsetHeight > 0;
    return false
}

const slideDownSubmenu = () => {
    const subdropPlusUl = document.getElementsByClassName("subdrop");
    for (let i = 0; i < subdropPlusUl.length; i++) {
        const submenu = subdropPlusUl[i].nextElementSibling;
        if (submenu && submenu.tagName.toLowerCase() === "ul") {
            (submenu as HTMLElement).style.display = "block";
        }
    }
}
const slideUpSubmenu = () => {
    const subdropPlusUl = document.getElementsByClassName("subdrop");
    for (let i = 0; i < subdropPlusUl.length; i++) {
        const submenu = subdropPlusUl[i].nextElementSibling;
        if (submenu && submenu.tagName.toLowerCase() === "ul") {
            (submenu as HTMLElement).style.display = "none";
        }
    }
}

const handleMouseover = (e: MouseEvent) => {
    e.stopPropagation()

    const body = document.body;
    const toggleBtn = document.getElementById("toggle_btn");

    if (body.classList.contains("mini-sidebar") && isElementVisible(toggleBtn)) {
        const target = e.target;
        let currentTarget

        if (target) {
            currentTarget = (target as HTMLElement).closest(".sidebar, .header-left")
        }

        if (currentTarget) {
            body.classList.add("expand-menu");
            slideDownSubmenu();
        } else {
            body.classList.remove("expand-menu");
            slideUpSubmenu();
        }

        e.preventDefault();
    }
}

onMounted(() => {
    document.addEventListener("mouseover", handleMouseover);
    return () => {
        document.removeEventListener("mouseover", handleMouseover);
    }
})
</script>

<template>
    <div class="header">
        <div class="header-left">
            <a class="logo logo-normal group-[.mini-sidebar]/body:lg:hidden group-[.mini-sidebar.expand-menu]/body:lg:block">
                <img class="inline-block h-auto max-w-full w-[80px]" :src="'/img/logo.svg'" alt="logo" />
            </a>
            <a class="logo-small hidden group-[.mini-sidebar]/body:lg:block group-[.mini-sidebar.expand-menu]/body:lg:hidden group-[.mini-sidebar]/body:pt-2.5">
                <img class="inline-block h-auto max-w-full w-[40px]" :src="'/img/logo-small.svg'" alt="logo" />
            </a>
            <a id="toggle_btn"
                class="toggle_btn"
                @click="toggleMiniSidebar">
                <i class="ti ti-menu-deep"></i>
            </a>
        </div>

        <a class="mobile-btn" @click="toggleSidebarMobile">
            <span class="w-[30px] mt-5 inline-block">
                <span class="bg-primary block float-left h-[3px] mb-[7px] w-[30px] rounded-xs"></span>
                <span class="bg-primary block float-left h-[3px] mb-[7px] w-[15px] rounded-xs"></span>
                <span class="bg-primary block float-left h-[3px] mb-[7px] w-[30px] rounded-xs"></span>
            </span>
        </a>

        <HeaderMenu />

        <div class="mobile-user-menu">
            <a class="text-primary p-0 block transition-colors duration-150 ease-in-out" href="#"
                @click="dropdownToogle = !dropdownToogle">
                <FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" />
            </a>
            <div class="dropdown-menu" style="transform:translate3d(-20px, 62px, 0px)" v-show="dropdownToogle">
                <a class="dropdown-item">My Profile</a>
                <a class="dropdown-item">Settings</a>
                <a class="dropdown-item">Logout</a>
            </div>
        </div>
    </div>
</template>
