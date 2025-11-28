<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import CsrfToken from '~/components/CsrfToken.vue';
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue';
import ContentHead from '~/components/ContentHead.vue';
import Breadcrumb from '~/components/Breadcrumb.vue';
import VDropdown from '~/components/floating-vue/components/Dropdown'
</script>

<template>

    <Head title="Dashboard" />
    <div class="main-wrapper">
        <Header />
        <Sidebar />

        <div class="page-wrapper">
            <div class="content">
                <ContentHead>
                    <template #left>
                        <Breadcrumb />
                    </template>
                    <template #right>
                        <div class="pr-1 mb-2"><a class="btn btn-outline-light bg-white btn-icon mr-1"
                                aria-label="Refresh"><font-awesome-icon icon="fa-solid fa-rotate-right" size="xs" /></a>
                        </div>
                        <div class="pr-1 mb-2"><button type="button"
                                class="btn btn-outline-light bg-white btn-icon mr-1"
                                aria-label="Print"><font-awesome-icon icon="fa-solid fa-print" size="xs" /></button>
                        </div>

                        <VDropdown :distance="6" placement="bottom-end" class="mr-2 mb-2">
                            <a href="javascript:void(0);"
                                class="btn btn-light font-medium inline-flex items-center"><font-awesome-icon
                                    icon="fa-solid fa-file-export" class="mr-2" />Export </a>

                            <template #popper>
                                <ul class="p-3">
                                    <li><a href="javascript:void(0);" class="dropdown-item rounded"><font-awesome-icon
                                                icon="fa-regular fa-file-pdf" class="mr-2" />Export as PDF</a></li>
                                    <li><a href="javascript:void(0);" class="dropdown-item rounded"><font-awesome-icon
                                                icon="fa-regular fa-file-excel" class="mr-2" />Export as Excel </a></li>
                                </ul>
                            </template>
                        </VDropdown>
                        <div class="mb-2"><a href="/vue/template/students/add-student"
                                class="btn btn-primary flex items-center">
                                <font-awesome-icon icon="fa-solid fa-square-plus" class="mr-2" />
                                Add
                                Student</a></div>
                    </template>
                </ContentHead>

                Admin Page
                <form method="post" action="/auth/logout">
                    <CsrfToken />
                    <button type="submit">Logout</button>
                </form>
            </div>
        </div>
    </div>
</template>
