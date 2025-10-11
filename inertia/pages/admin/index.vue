<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CsrfToken from '~/components/CsrfToken.vue';
import Header from '~/components/Header.vue'
</script>

<template>

    <Head title="Dashboard" />
    <div>
        <Header />
        Admin Page
        <form method="post" action="/auth/logout">
            <CsrfToken />
            <button type="submit">Logout</button>
        </form>
    </div>
</template>
