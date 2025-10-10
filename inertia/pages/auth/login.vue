<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CsrfToken from '~/components/CsrfToken.vue';
</script>

<template>

    <Head title="Login" />
    <div>
        <div>
            <div class="block w-full h-screen relative overflow-hidden">
                <div class="row">
                    <div class="px-3 mt-0 max-w-full w-full shrink-0 lg:w-1/2 lg:basis-auto lg:grow-0">
                        <div
                            class="hidden lg:flex flex-wrap items-center justify-center h-screen bg-[#F8FAFC] bg-no-repeat bg-bottom-left bg-size-[100%] bg-[url(/img/auth/authentication-bg.svg)]">
                            <div>
                                <img class="h-auto max-w-full" :src="'/img/auth/authentication-06.svg'" />
                            </div>
                        </div>
                    </div>
                    <div class="px-3 mt-0 max-w-full w-full shrink-0 basis-auto grow-0 lg:w-1/2">
                        <div class="row overflow-auto h-screen justify-center items-center">
                            <div class="mx-auto p-3 mt-0 max-w-full md:grow-0 md:shrink-0 md:basis-auto md:w-2/3">
                                <form method="post" enctype="multipart/form-data">
                                    <div>
                                        <div class="mx-auto mb-12 text-center">
                                            <h1>Login Page</h1>
                                        </div>
                                        
                                        <div class="mb-6 bg-white border border-[#E9EDF4] rounded-md relative">
                                            <CsrfToken />
                                            <input class="border" name="email" type="email" />
                                            <input class="border" name="password" type="password" />
                                            <button type="submit">Login</button>
                                        </div>

                                        <div class="mt-12 text-center">
                                            <p class="mb-0">Copyright © ???? - a</p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
