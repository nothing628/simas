<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useDropdown } from '~/utils/dropdown'

const { floatingStyles: thnAjarStyle, isShow: thnAjarShow, toggleShow: thnAjarToggle, floating: thnAjarFlo, reference: thnAjarRef } = useDropdown()
const { floatingStyles: langStyle, isShow: langShow, toggleShow: langToggle, floating: langFlo, reference: langRef } = useDropdown()
</script>

<template>
    <div class="contents py-[15px] px-6">
        <div class="nav user-menu">
            <div class="nav-item mr-auto"></div>
            <div class="flex items-center">
                <div class="dropdown mr-2">
                    <a class="btn btn-outline-light font-normal bg-white flex items-center p-2 hover:bg-[#E9EDF4]"
                        href="#" ref="thnAjarRef" @click="thnAjarToggle">
                        <FontAwesomeIcon icon="fa-regular fa-calendar" class="mr-1" />
                        Tahun Ajar : 2024 / 2025
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" :class="{ 'show': thnAjarShow }"
                        :style="thnAjarStyle" ref="thnAjarFlo">
                        <a class="dropdown-item flex items-center">
                            Tahun Ajar : 2024 / 2025
                        </a>
                        <a class="dropdown-item flex items-center">
                            Tahun Ajar : 2023 / 2024
                        </a>
                        <a class="dropdown-item flex items-center">
                            Tahun Ajar : 2022 / 2023
                        </a>
                    </div>
                </div>

                <div class="ml-1 pr-1">
                    <div class="dropdown">
                        <a ref="langRef" @click="langToggle"
                            class="btn btn-outline-light btn-icon bg-white flex items-center mr-1 p-2 hover:bg-[#E9EDF4]">
                            <img class="h-auto max-w-full rounded-full" :src="'/img/flags/us.png'" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-right" :style="langStyle" ref="langFlo"
                            :class="{ 'show': langShow }">
                            <a class="dropdown-item active flex items-center">
                                <img class="h-auto max-w-full rounded-full mr-2 w-[22px]" :src="'/img/flags/us.png'" />
                                English
                            </a>
                            <a class="dropdown-item flex items-center">
                                <img class="h-auto max-w-full rounded-full mr-2 w-[22px]" :src="'/img/flags/us.png'" />
                                Indonesia
                            </a>
                        </div>
                    </div>
                </div>

                <div class="pr-1">
                    <a class="dark-mode-toggle btn btn-outline-light bg-white btn-icon mr-1">
                        <font-awesome-icon icon="fa-regular fa-moon" />
                    </a>
                </div>

                <div class="pr-1">
                    <a class="btn btn-outline-light bg-white btn-icon relative mr-1">
                        <font-awesome-icon icon="fa-regular fa-bell" />
                        <span class="notification-status-dot"></span>
                    </a>
                </div>

                <div class="dropdown ml-1">
                    <a class="dropdown-toggle flex items-center">
                        <span class="avatar avatar-md rounded">
                            <img class="w-full h-full rounded max-w-full" :src="'/img/avatar.jpg'" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>