<template>
    <h3 class="text-xl text-dark font-semibold page-title mb-1">{{ title }}</h3>
    <nav>
        <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item" v-for="(item, i) in items" :class="{ 'active': i == items.length - 1 }">
                <template v-if="item.link">
                    <a :href="item.link">{{ item.title
                    }}</a>
                </template>
                <template v-else>
                    {{ item.title }}
                </template>
            </li>
        </ol>
    </nav>
</template>
<script setup lang="ts">
const props = defineProps({
    title: {
        type: String,
        default: ""
    },
    items: {
        type: Array<any>,
        default: () => ([])
    }
})
</script>