<template>
    <input type="hidden" name="_csrf" :value="csrf" />
</template>

<script setup lang="ts">
import { useCsrf } from '~/utils/csrf';

const { csrf } = useCsrf()
</script>