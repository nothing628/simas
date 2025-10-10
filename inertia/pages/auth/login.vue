<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
import CsrfToken from '~/components/CsrfToken.vue';

const getCurrentYear = () => {
    return new Date().getFullYear()
}
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
                                            <img class="h-10 max-w-full inline" :src="'/img/logo.svg'" />
                                        </div>

                                        <div class="card">
                                            <CsrfToken />
                                            <div class="card-body p-6">
                                                <div class="mb-6">
                                                    <h2 class="mb-2 font-bold text-2xl">Selamat Datang</h2>
                                                    <p class="mb-0">Harap masukkan data untuk masuk</p>
                                                </div>
                                                <div class="mb-4">
                                                    <label class="form-label">Alamat Email</label>
                                                    <div class="relative mb-4">
                                                        <span></span>
                                                        <input class="form-control" name="email" type="email" />
                                                    </div>
                                                    <label class="form-label">Kata Sandi</label>
                                                    <div class="relative mb-4">
                                                        <span></span>
                                                        <input class="form-control" name="password" type="password" />
                                                    </div>
                                                </div>
                                                <div class="flex relative items-center justify-between mb-4">
                                                    <div class="flex items-center">
                                                        <div class="form-check form-check-md mb-0">
                                                            <input class="form-check-input mt-0" type="checkbox">
                                                        </div>
                                                        <p class="mb-0 ml-1">Ingat saya</p>
                                                    </div>
                                                    <div class="text-right">
                                                        <a class="text-[#E82646] cursor-pointer transition-all duration-500">Lupa sandi?</a>
                                                    </div>
                                                </div>
                                                <div class="mb-4">
                                                    <button class="btn btn-primary w-full" type="submit">Masuk</button>
                                                </div>
                                                <div class="text-center">
                                                    <h6 class="text-[#202C4B] mb-0 text-[15px]">Belum memiliki akun?
                                                        <a
                                                            class="relative text-[#3D5EE1] cursor-pointer transition-all duration-500">Buat Akun</a>
                                                    </h6>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="mt-12 text-center">
                                            <p class="mb-0">Copyright © {{getCurrentYear()}} - a</p>
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
