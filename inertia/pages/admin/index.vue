<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CsrfToken from '~/components/CsrfToken.vue';
import Header from '~/components/Header.vue'
import Sidebar from '~/components/Sidebar.vue';
</script>

<template>

    <Head title="Dashboard" />
    <div class="main-wrapper">
        <Header />
        <Sidebar />

        <div class="page-wrapper">
            <div class="content">
                Admin Page
                <form method="post" action="/auth/logout">
                    <CsrfToken />
                    <button type="submit">Logout</button>
                </form>
            </div>
        </div>
    </div>
</template>
