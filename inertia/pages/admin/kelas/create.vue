<template>
    <Head title="Dashboard - Tambah kelas" />
    <div class="main-wrapper">
        <Header />
        <Sidebar />

        <div class="page-wrapper">
            <div class="content">
                <ContentHead>
                    <template #left>
                        <Breadcrumb title="Buat Kelas"
                            :items="[{ title: 'Dashboard', link: '/admin' }, { title: 'Kelas', link: '/admin/kelas/list' }, { title: 'Buat Kelas' }]" />
                    </template>
                    <template #right>
                        <div class="mb-2"><a href="/admin/kelas/list"
                                class="btn btn-danger flex items-center">
                                <i class="ti ti-arrow-left me-2"></i>
                                Kembali</a></div>
                    </template>
                </ContentHead>

                <div class="card">
                    <div class="card-header flex items-center justify-between flex-wrap pb-0">
                        <h4 class="mb-4 font-semibold text-lg text-dark">Buat Kelas</h4>
                    </div>
                    Buat kelas
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue';
import ContentHead from '~/components/ContentHead.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
</script>
