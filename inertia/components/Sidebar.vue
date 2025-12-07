<script setup lang="ts">
import Simplebar from '~/components/simplebar'
import VerticalSidebar from './VerticalSidebar.vue';
</script>

<template>
    <div class="sidebar">
        <!-- Slimscroll here -->
        <div class="sidebar-inner slimscroll w-full">
            <Simplebar class="h-full">
                <div id="sidebar-menu" class="sidebar-menu p-[15px]">
                    <ul>
                        <li class="mb-[5px]">
                            <a href="javascript:void(0);"
                                class="flex items-center border border-light-900 bg-white rounded p-2 mb-6">
                                <img :src="'/img/logo.svg'" class="avatar avatar-md max-w-full rounded"
                                    alt="Profile" />
                                <span class="text-dark ml-2 font-normal group-[.mini-sidebar]/body:lg:hidden group-[.mini-sidebar.expand-menu]/body:lg:inline-block">Global International</span>
                            </a>
                        </li>
                    </ul>
                    <VerticalSidebar />
                </div>
            </Simplebar>
        </div>
    </div>
</template>
