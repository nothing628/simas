<template>

    <Head title="Dashboard" />
    <div class="main-wrapper">
        <Header />
        <Sidebar />

        <div class="page-wrapper">
            <div class="content">
                Kelas List
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue';
</script>