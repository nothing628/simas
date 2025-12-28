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

                            <a-table class="w-full m-0 text-gray-600 border-gray-400 datatable thead-light" :columns="columns" :data-source="data"
                                :row-selection="rowSelection">
                                <template #bodyCell="{ column, record }">
                                    <template v-if="column.key === 'ID'">
                                        <div>
                                            <a href="javascript:void(0);" class="link-primary">{{ record.ID }}</a>
                                        </div>
                                    </template>
                                    <template v-if="column.key === 'Status'">
                                        <span :class="record.StatusClass" class="inline-flex items-center"><i
                                                class="ti ti-circle-filled text-[5px] mr-1"></i>{{ record.Status }}</span>
                                    </template>
                                    <template v-if="column.key === 'action'">
                                        <div class="d-flex align-items-center">
                                            <VDropdown placement="bottom-end" class="relative">
                                                <a href="javascript:void(0);"
                                                    class="btn btn-white btn-icon btn-sm flex items-center justify-center rounded-full p-0"
                                                    data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i class="ti ti-dots-vertical fs-14"></i>
                                                </a>
                                                <template #popper>
                                                    <ul class="dropdown-menu dropdown-menu-right p-3">
                                                        <li>
                                                            <a class="dropdown-item rounded-1"
                                                                href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#edit_class"><i
                                                                    class="ti ti-edit-circle me-2"></i>Edit</a>
                                                        </li>
                                                        <li>
                                                            <a class="dropdown-item rounded-1"
                                                                href="javascript:void(0);" data-bs-toggle="modal"
                                                                data-bs-target="#delete-modal"><i
                                                                    class="ti ti-trash-x me-2"></i>Delete</a>
                                                        </li>
                                                    </ul>
                                                </template>
                                            </VDropdown>
                                        </div>
                                    </template>
                                </template>
                            </a-table>
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
import { Dropdown as VDropdown } from '~/components/floating-vue'

const columns = [
    {
        sorter: false,
    },
    {
        title: "ID",
        dataIndex: "ID",
        key: "ID",
        sorter: {
            compare: (a: any, b: any) => {
                a = a.ID.toLowerCase();
                b = b.ID.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Class",
        dataIndex: "Class",
        sorter: {
            compare: (a: any, b: any) => {
                a = a.Class.toLowerCase();
                b = b.Class.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Section",
        dataIndex: "Section",
        sorter: {
            compare: (a: any, b: any) => {
                a = a.Section.toLowerCase();
                b = b.Section.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "No of Students",
        dataIndex: "NoofStudents",
        sorter: {
            compare: (a: any, b: any) => {
                a = a.NoofStudents.toLowerCase();
                b = b.NoofStudents.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "No of Subjects",
        dataIndex: "NoofSubjects",
        sorter: {
            compare: (a: any, b: any) => {
                a = a.NoofSubjects.toLowerCase();
                b = b.NoofSubjects.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Status",
        dataIndex: "Status",
        key: "Status",
        sorter: {
            compare: (a: any, b: any) => {
                a = a.Status.toLowerCase();
                b = b.Status.toLowerCase();
                return a > b ? -1 : b > a ? 1 : 0;
            },
        },
    },
    {
        title: "Action",
        key: "action",
        sorter: true,
    },
];
const data = [
    {
        key: "1",
        ID: "C138038",
        Class: "I",
        Section: "A",
        NoofStudents: "30",
        NoofSubjects: "3",
        StatusClass: "badge badge-soft-success",
        Status: "Active",
    },
    {
        key: "2",
        ID: "C138037",
        Class: "I",
        Section: "B",
        NoofStudents: "25",
        NoofSubjects: "3",
        StatusClass: "badge badge-soft-success",
        Status: "Active",
    },
    {
        key: "3",
        ID: "C138036",
        Class: "II",
        Section: "A",
        NoofStudents: "40",
        NoofSubjects: "3",
        StatusClass: "badge badge-soft-success",
        Status: "Active",
    },
    {
        key: "4",
        ID: "C138035",
        Class: "II",
        Section: "B",
        NoofStudents: "35",
        NoofSubjects: "3",
        StatusClass: "badge badge-soft-success",
        Status: "Active",
    },
    {
        key: "5",
        ID: "C138034",
        Class: "II",
        Section: "C",
        NoofStudents: "25",
        NoofSubjects: "3",
        StatusClass: "badge badge-soft-danger",
        Status: "Inactive",
    },
    {
        key: "6",
        ID: "C138033",
        Class: "III",
        Section: "A",
        NoofStudents: "30",
        NoofSubjects: "3",
        StatusClass: "badge badge-soft-success",
        Status: "Active",
    },
    {
        key: "7",
        ID: "C138032",
        Class: "III",
        Section: "B",
        NoofStudents: "25",
        NoofSubjects: "5",
        StatusClass: "badge badge-soft-success",
        Status: "Active",
    },
    {
        key: "8",
        ID: "C138031",
        Class: "IV",
        Section: "A",
        NoofStudents: "20",
        NoofSubjects: "5",
        StatusClass: "badge badge-soft-success",
        Status: "Active",
    },
    {
        key: "9",
        ID: "C138030",
        Class: "IV",
        Section: "B",
        NoofStudents: "30",
        NoofSubjects: "5",
        StatusClass: "badge badge-soft-danger",
        Status: "Inactive",
    },
    {
        key: "10",
        ID: "C138029",
        Class: "V",
        Section: "A",
        NoofStudents: "35",
        NoofSubjects: "5",
        StatusClass: "badge badge-soft-success",
        Status: "Active",
    },
];
const rowSelection = {
    onChange: () => { },
    onSelect: () => { },
    onSelectAll: () => { },
};
</script>