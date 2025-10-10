<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CsrfToken from '~/components/CsrfToken.vue';
</script>

<template>

    <Head title="Login" />
    <div>
        <h1>Login Page</h1>
        <form method="post" enctype="multipart/form-data">
            <CsrfToken />
            <input class="border" name="email" type="email" />
            <input class="border" name="password" type="password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>
