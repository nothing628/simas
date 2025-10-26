<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Simplebar from '~/components/simplebar'
</script>

<template>
    <div class="sidebar">
        <!-- Slimscroll here -->
        <div class="sidebar-inner slimscroll w-full">
            <Simplebar data-simplebar-auto-hide="false">
                <div class="sidebar-menu p-[15px]">
                    <ul></ul>
                    <ul>
                        <li class="mb-[5px]">
                            <h6 class="submenu-hdr"><span>MAIN</span></h6>
                            <ul class="block mb-[15px]">
                                <li class="submenu overflow-hidden mb-[5px] rounded-md">
                                    <a class="subdrop active">
                                        <FontAwesomeIcon icon="fa-regular fa-calendar"></FontAwesomeIcon>
                                        <span>Dashboard</span>
                                        <span class="menu-arrow"></span>
                                    </a>
                                    <ul class="block py-0 mt-2.5">
                                        <li><a class="active">Main Dashboard</a></li>
                                        <li><a>Absent Dashboard</a></li>
                                    </ul>
                                </li>
                                <li class="submenu overflow-hidden mb-[5px] rounded-md"></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </Simplebar>
        </div>
    </div>
</template>
