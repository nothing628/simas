<template>
    <div class="mr-auto">
        <div>
            <a href="javascript:void(0);" class="block lg:hidden text-white text-xl leading-[60px] h-[60px] py-0 px-[15px]">
                <FontAwesomeIcon icon="fa-search" />
            </a>
            <form action="#" class="relative">
                <div class="hidden xl:block relative p-0" id="dropdownMenuClickable">
                    <input type="text" placeholder="Search" class="w-[170px] xl:w-[284px] h-[42px] text-gray-900 bg-white border border-light-900 py-[5px] px-2.5 pr-[45px] rounded-sm" />
                    <div>
                        <button type="submit" class="flex items-center justify-center w-6 h-6 cursor-pointer bg-white text-gray-900 absolute p-0 top-1/2 right-4 -translate-y-1/2 border-0 rounded-sm z-10 shadow-xs"><i class="ti ti-command"></i></button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
</script>
