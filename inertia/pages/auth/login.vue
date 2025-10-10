<script setup lang="ts">
import { Head, usePage } from '@inertiajs/vue3'
import { onMounted, ref } from 'vue';

const csrf = ref('')

onMounted(() => {
    const elem = document.querySelector("meta[name=csrf_token]")
    if (elem) {
        const meta = elem as HTMLMetaElement;

        console.log(meta.content)
        csrf.value = meta.content
    }
    
})
</script>

<template>

    <Head title="Login" />
    <div>
        <h1>Login Page</h1>
        <form method="post" enctype="multipart/form-data">
            <input type="hidden" name="_csrf" :value="csrf" />
            <input class="border" name="email" type="email" />
            <input class="border" name="password" type="password" />
            <button type="submit">Login</button>
        </form>
    </div>
</template>
