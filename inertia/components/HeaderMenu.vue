<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useDropdown } from '~/utils/dropdown'
import VDropdown from '~/components/floating-vue/components/Dropdown'

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

                <VDropdown :distance="6" class="pr-1">
                    <!-- This will be the popover reference (for the events and position) -->
                    <a class="btn btn-outline-light bg-white btn-icon relative mr-1">
                        <font-awesome-icon icon="fa-regular fa-bell" />
                        <span class="notification-status-dot"></span>
                    </a>

                    <!-- This will be the content of the popover -->
                    <template #popper>
                        <div class="p-6 bg-white text-[#1F2B4A] text-sm min-w-[450px] max-w-full">
                            <div class="flex justify-between items-center mb-4 pb-4 border-b border-b-[#E9EDF4]">
                                <h4 class="text-lg font-semibold text-[#202C4B]">Notifications (2)</h4>
                                <div class="flex items-center">
                                    <a class="text-[#3D5EE1] text-[15px] leading-none mr-4">Mark all as read</a>
                                    <VDropdown class="relative">
                                        <a><font-awesome-icon icon="fa-regular fa-calendar" />Today</a>

                                        <template #popper>
                                            <ul class="p-4 mt-2 bg-white text-[#1F2B4A] text-sm lg:min-w-[200px] lg:block">
                                                <li><a class="block cursor-pointer w-full clear-both whitespace-nowrap bg-transparent text-sm text-[#202C4B] px-[15px] py-2.5 transition-all duration-300 ease-in-out hover:bg-[#F4F6FA]">This Week</a></li>
                                                <li><a class="block cursor-pointer w-full clear-both whitespace-nowrap bg-transparent text-sm text-[#202C4B] px-[15px] py-2.5 transition-all duration-300 ease-in-out hover:bg-[#F4F6FA]">Last Week</a></li>
                                                <li><a class="block cursor-pointer w-full clear-both whitespace-nowrap bg-transparent text-sm text-[#202C4B] px-[15px] py-2.5 transition-all duration-300 ease-in-out hover:bg-[#F4F6FA]">Last Month</a></li>
                                            </ul>
                                        </template>
                                    </VDropdown>
                                </div>
                            </div>
                            <div class="h-[270px] overflow-y-auto relative">
                                <div class="flex flex-col">
                                    <div class="border-b border-b-[#E9EDF4] mb-4 pb-4 last:pb-0 last:border-b-0">
                                        <a>
                                            <div class="flex">
                                                <span class="inline-flex items-center justify-center relative rounded-sm w-[45px] h-[45px] leading-[45px] text-white mr-2 shrink-0">
                                                    <img class="w-full h-full rounded-sm" :src="'/img/avatar.jpg'" />
                                                </span>
                                                <div class="grow">
                                                    <p class="mb-1">
                                                        <span class="text-[#202C4B] font-semibold">Shawn</span> performance in Math is below the threshold.
                                                    </p>
                                                    <span>Just Now</span>
                                                    <div class="flex justify-start items-center mt-1">
                                                        <span class="btn btn-light btn-sm mr-2">Deny</span>
                                                        <span class="btn btn-primary btn-sm">Allow</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="flex p-0">
                                <a class="btn btn-light w-full mr-2">Cancel</a>
                                <a class="btn btn-primary w-full">View All</a>
                            </div>
                        </div>
                    </template>
                </VDropdown>

                <VDropdown :distance="6" class="ml-1">
                    <a class="dropdown-toggle flex items-center cursor-pointer">
                        <span class="avatar avatar-md rounded">
                            <img class="w-full h-full rounded max-w-full" :src="'/img/avatar.jpg'" />
                        </span>
                    </a>

                    <template #popper>
                        <div class="block min-w-[200px] mt-2">
                            <div class="block">
                                <div class="flex items-center p-2">
                                    <span class="w-8 h-8 leading-8 text-sm rounded-full relative inline-flex items-center justify-center text-white font-medium mr-2 before:content-[''] before:bg-[#1ABE17] before:absolute before:rounded-full before:w-3 before:h-3 before:border-2 before:border-white before:right-0 before:bottom-0 before:box-border">
                                        <img class="w-full h-full rounded-full" :src="'/img/avatar.jpg'" />
                                    </span>
                                    <div>
                                        <h6 class="text-[#202C4B] text-[15px] font-medium">Kevin Larry</h6>
                                        <p class="text-primary mb-0">Administrator</p>
                                    </div>
                                </div>
                                <hr class="m-0 border-[#E9EDF4]"></hr>
                                <a class="inline-flex items-center p-2 w-full text-[#202C4B] text-sm cursor-pointer whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-[#F4F6FA]">My Profile</a>
                                <a class="inline-flex items-center p-2 w-full text-[#202C4B] text-sm cursor-pointer whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-[#F4F6FA]">Settings</a>
                                <hr class="m-0 border-[#E9EDF4]"></hr>
                                <a class="inline-flex items-center p-2 w-full text-[#202C4B] text-sm cursor-pointer whitespace-nowrap transition-all duration-300 ease-in-out hover:bg-[#F4F6FA]">Logout</a>
                            </div>
                        </div>
                    </template>
                </VDropdown>
            </div>
        </div>
    </div>
</template>