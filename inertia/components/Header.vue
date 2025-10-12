<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue'
import HeaderMenu from './HeaderMenu.vue'

const dropdownToogle = ref(true)
</script>

<template>
    <div class="header">
        <div class="header-left">
            <a class="logo logo-normal">
                <img class="inline-block h-auto max-w-full w-[140px]" :src="'/img/logo.svg'" />
            </a>
            <a class="rounded-md p-1 text-lg hidden lg:flex lg:items-center lg:justify-center">
                <FontAwesomeIcon icon="fa-solid fa-bars-staggered" />
            </a>
        </div>

        <a class="mobile-btn">
            <span class="w-[30px] mt-5 inline-block">
                <span class="bg-[#3D5EE1] block float-left h-[3px] mb-[7px] w-[30px] rounded-xs"></span>
                <span class="bg-[#3D5EE1] block float-left h-[3px] mb-[7px] w-[15px] rounded-xs"></span>
                <span class="bg-[#3D5EE1] block float-left h-[3px] mb-[7px] w-[30px] rounded-xs"></span>
            </span>
        </a>

        <HeaderMenu />

        <div class="mobile-user-menu">
            <a class="text-[#3D5EE1] p-0 block transition-colors duration-150 ease-in-out" href="#"
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
