<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { ref } from 'vue';
import { useFloating, autoUpdate, offset } from '@floating-ui/vue';

const reference = ref(null);
const floating = ref(null);
const isShow = ref(false)
const { floatingStyles } = useFloating(reference, floating, {
    placement: 'bottom',
    whileElementsMounted: autoUpdate,
    middleware: [offset(2)]
});
</script>

<template>
    <div class="contents py-[15px] px-6">
        <div class="nav user-menu">
            <div class="nav-item mr-auto"></div>
            <div class="flex items-center">
                <div class="dropdown mr-2">
                    <a class="btn btn-outline-light font-normal bg-white flex items-center p-2 hover:bg-[#E9EDF4]"
                        href="#" ref="reference" @click="isShow = !isShow">
                        <FontAwesomeIcon icon="fa-regular fa-calendar" class="mr-1" />
                        Tahun Ajar : 2024 / 2025
                    </a>
                    <div class="dropdown-menu dropdown-menu-right" :class="{ 'show': isShow }" :style="floatingStyles"
                        ref="floating">
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
                        <a
                            class="btn btn-outline-light btn-icon bg-white flex items-center mr-1 p-2 hover:bg-[#E9EDF4]">
                            <img class="h-auto max-w-full rounded-full" :src="'/img/flags/us.png'" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>