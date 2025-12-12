<template>

    <Head title="Dashboard" />
    <div class="main-wrapper">
        <Header />
        <Sidebar />

        <div class="page-wrapper">
            <div class="content">
                <ContentHead>
                    <template #left>
                        <Breadcrumb title="Daftar Kelas"
                            :items="[{ title: 'Dashboard', link: '/admin' }, { title: 'Kelas' }, { title: 'Daftar Kelas' }]" />
                    </template>
                    <template #right>
                        <div class="pr-1 mb-2"><a class="btn btn-outline-light bg-white btn-icon mr-1"
                                aria-label="Refresh"><i class="ti ti-refresh"></i></a>
                        </div>
                        <div class="pr-1 mb-2"><button type="button"
                                class="btn btn-outline-light bg-white btn-icon mr-1" aria-label="Cetak"><i
                                    class="ti ti-printer"></i></button>
                        </div>

                        <VDropdown :distance="6" placement="bottom-end" class="mr-2 mb-2">
                            <a href="javascript:void(0);" class="btn btn-light font-medium inline-flex items-center"><i
                                    class="ti ti-file-export me-2"></i>Export </a>

                            <template #popper>
                                <ul class="p-3">
                                    <li><a href="javascript:void(0);" class="dropdown-item rounded"><i
                                                class="ti ti-file-type-pdf me-2"></i>Export as PDF</a></li>
                                    <li><a href="javascript:void(0);" class="dropdown-item rounded"><i
                                                class="ti ti-file-type-xls me-2"></i>Export as Excel </a></li>
                                </ul>
                            </template>
                        </VDropdown>
                        <div class="mb-2"><a href="/vue/template/students/add-student"
                                class="btn btn-primary flex items-center">
                                <i class="ti ti-square-rounded-plus-filled me-2"></i>
                                Tambah Kelas</a></div>
                    </template>
                </ContentHead>

                <div class="card">
                    <FilterKelas />

                    <div class="card-body p-0 py-4">
                        <div class="overflow-x-auto">
                            <div class="row">
                                <div class="px-4 flex-none w-full md:w-1/2">
                                    <PaginationCount />
                                </div>
                                <div class="px-4 flex-none w-full md:w-1/2">
                                    <FilterSearch />
                                </div>
                            </div>
                            Kelas List
                        </div>
                    </div>
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
import FilterKelas from '~/components/kelas/FilterKelas.vue';
import FilterSearch from '~/components/kelas/FilterSearch.vue';
import PaginationCount from '~/components/kelas/PaginationCount.vue';
</script>