<template>
    <div class="block md:flex items-center justify-between mb-4">
        <div class="my-auto mb-2">
            <slot name="left"></slot>
        </div>
        <div class="flex xl:my-auto items-center flex-wrap">
            <slot name="right"></slot>
        </div>
    </div>
</template>
