<template>
    <h3 class="text-xl text-semidark font-semibold page-title mb-1">Students</h3>
    <nav>
        <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="/" class="">Dashboard</a></li>
            <li class="breadcrumb-item">Students</li>
            <li class="breadcrumb-item active" aria-current="page">Students Grid</li>
        </ol>
    </nav>
</template>
<script setup lang="ts">
const props = defineProps({
    headTitle: {
        type: String,
        default: ""
    },
    items: {
        type: Array,
        default: () => ([])
    }
})
</script>