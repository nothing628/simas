<script setup lang="ts">
  import { Head } from '@inertiajs/vue3'
</script>

<template>
  <Head title="Homepage" />

  <div class="fixed xl:absolute left-8 right-8 top-0 bottom-0 xl:inset-0 max-w-screen-xl mx-auto before:content-[''] before:[background:repeating-linear-gradient(0deg,var(--sand-5)_0_4px,transparent_0_8px)] before:absolute before:top-0 before:left-0 before:h-full before:w-px after:content-[''] after:[background:repeating-linear-gradient(0deg,var(--sand-5)_0_4px,transparent_0_8px)] after:absolute after:top-0 after:right-0 after:h-full after:w-px"></div>

  <div class="pt-4 h-full flex flex-col">
    <!-- Header -->
    <div class="grow pb-4 bg-gradient-to-b from-sand-1 to-sand-2 flex justify-center items-center">
      <a href="https://adonisjs.com" target="_blank" class="isolate">
        
      </a>
    </div>

    <!-- Bento with documentation, Adocasts, packages and Discord -->
    <div class="isolate mt-10 max-w-screen-xl mx-auto px-16 xl:px-8 grid grid-cols-1 xl:grid-cols-2 xl:grid-rows-3 gap-8">
      <article class="row-span-3 relative p-6 shadow-sm hover:shadow border border-sand-7 hover:border-sand-8 rounded-2xl transition ease-in-out duration-700 group flex flex-col gap-8">
        <div class="relative opacity-80">

          <div class="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-b from-white/0 to-white"></div>
        </div>

        <div class="flex flex-row gap-4">
          <div class="shrink-0 w-10 h-10 bg-primary/20 rounded-md flex justify-center items-center">
            
          </div>

          <div class="space-y-1">
            <h2 class="text-lg font-semibold">
              <a href="https://docs.adonisjs.com" target="_blank">
                <span class="text-red-500">Documentation</span>
                <span class=""></span>
              </a>
            </h2>

            <p class="text-sm text-sand-11 group-hover:text-sand-12 transition ease-in-out duration-700">
              Dive into the official documentation to learn AdonisJS. Read carefully to discover
              an unmatched set of features, best practices and developer experience. Through
              examples, guides and API references, you'll find everything you need to build your
              next project. From installation to deployment, we've got you covered.
            </p>
          </div>
        </div>
      </article>

      <article class="relative p-6 shadow-sm hover:shadow border border-sand-7 hover:border-sand-8 rounded-2xl transition ease-in-out duration-700 group flex flex-row gap-4">
        <div class="shrink-0 w-10 h-10 bg-primary/20 rounded-md flex justify-center items-center">
          
        </div>

        <div class="space-y-1">
          <h2 class="text-lg font-semibold">
            <a href="https://adocasts.com" target="_blank">
              <span>Adocasts</span>
              <span class="absolute inset-0"></span>
            </a>
          </h2>

          <p class="text-sm text-sand-11 group-hover:text-sand-12 transition ease-in-out duration-700">
            Level up your development and Adonis skills with hours of video content, from
            beginner to advanced, through databases, testing, and more.
          </p>
        </div>
      </article>

      <article class="relative p-6 shadow-sm hover:shadow border border-sand-7 hover:border-sand-8 rounded-2xl transition ease-in-out duration-700 group flex flex-row gap-4">
        <div class="shrink-0 w-10 h-10 bg-primary/20 rounded-md flex justify-center items-center">
          
        </div>

        <div class="space-y-1">
          <h2 class="text-lg font-semibold">
            <a href="https://packages.adonisjs.com" target="_blank">
              <span>Packages</span>
              <span class="absolute inset-0"></span>
            </a>
          </h2>

          <p class="text-sm text-sand-11 group-hover:text-sand-12 transition ease-in-out duration-700">
            Supercharge your AdonisJS application with packages built and maintained by both the
            core team and the community.
          </p>
        </div>
      </article>

      <article class="relative p-6 shadow-sm hover:shadow border border-sand-7 hover:border-sand-8 rounded-2xl transition ease-in-out duration-700 group flex flex-row gap-4">
        <div class="shrink-0 w-10 h-10 bg-primary/20 rounded-md flex justify-center items-center">
          
        </div>

        <div class="space-y-1">
          <h2 class="text-lg font-semibold">
            <a href="https://discord.gg/vDcEjq6" target="_blank">
              <span>Discord</span>
              <span class="absolute inset-0"></span>
            </a>
          </h2>

          <p class="text-sm text-sand-11 group-hover:text-sand-12 transition ease-in-out duration-700">
            Never get lost again, ask questions, and share your knowledge or projects with a
            growing and supportive community. Join us.
          </p>
        </div>
      </article>
    </div>

    <!-- Features -->
    <div class="grow mt-10 mb-8 px-16 xl:px-8 max-w-screen-xl mx-auto">
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        <article class="relative py-4 px-5 bg-white border border-transparent rounded-lg hover:border-sand-8 hover:shadow-sm transition duration-100 ease-in-out group">
          <h2 class="font-semibold text-sand-12">
            <a href="https://lucid.adonisjs.com" target="_blank" class="flex flex-row gap-2">
              <span class="bg-[#D5EAE7] h-6 w-6 flex justify-center items-center rounded">
                <svg class="h-4 w-4 fill-[#0E766E]" viewBox="0 0 24 24">
                  <g
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  >
                    <path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
                    <path d="M4 6v6a8 3 0 0 0 16 0V6" />
                    <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
                  </g>
                </svg>
              </span>
              <span>Lucid</span>
              <span class="absolute inset-0"></span>
            </a>
          </h2>

          <p class="mt-4 text-sm text-sand-11 group-hover:text-sand-12 transition ease-in-out duration-100">
            A SQL ORM with a powerful query builder, active record, migrations, and model
            factories. Everything you need to work with databases.
          </p>

          <svg
            class="absolute top-4 right-5 opacity-0 group-hover:opacity-100 text-sand-9 w-4 h-4 transition ease-in-out duration-100"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1 9-9m-5 0h5v5"
            />
          </svg>
        </article>

        <article class="relative py-4 px-5 bg-white border border-transparent rounded-lg hover:border-sand-8 hover:shadow-sm transition duration-100 ease-in-out group">
          <h2 class="font-semibold text-sand-12">
            <a href="https://vinejs.dev/" target="_blank" class="flex flex-row gap-2">
              <span class="bg-[#F3DBFC] h-6 w-6 flex justify-center items-center rounded">
                <svg class="h-4 w-4 fill-[#CA5AF2]" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6 12 12 0 0 0 12 3"
                  />
                </svg>
              </span>
              <span>Vine</span>
              <span class="absolute inset-0"></span>
            </a>
          </h2>

          <p class="mt-4 text-sm text-sand-11 group-hover:text-sand-12 transition ease-in-out duration-100">
            A yet simple but feature rich and type-safe form data validation. It comes with 50+
            built-in rules and an expressive API to define custom rules.
          </p>

          <svg
            class="absolute top-4 right-5 opacity-0 group-hover:opacity-100 text-sand-9 w-4 h-4 transition ease-in-out duration-100"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1 9-9m-5 0h5v5"
            />
          </svg>
        </article>

        <article class="relative py-4 px-5 bg-white border border-transparent rounded-lg hover:border-sand-8 hover:shadow-sm transition duration-100 ease-in-out group">
          <h2 class="font-semibold text-sand-12">
            <a href="https://inertiajs.com/" target="_blank" class="flex flex-row gap-2">
              <span class="bg-[#B8EAE0] h-6 w-6 flex justify-center items-center rounded">
                <svg class="h-4 w-4 fill-[#4BBBA5]" viewBox="0 0 24 24">
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m12.5 8l4 4l-4 4H17l4-4l-4-4zm-9 0l4 4l-4 4H8l4-4l-4-4z"
                  />
                </svg>
              </span>
              <span>InertiaJS</span>
              <span class="absolute inset-0"></span>
            </a>
          </h2>

          <p class="mt-4 text-sm text-sand-11 group-hover:text-sand-12 transition ease-in-out duration-100">
            The modern monolithic application architecture. It allows you to build single-page
            applications without building an API.
          </p>

          <svg
            class="absolute top-4 right-5 opacity-0 group-hover:opacity-100 text-sand-9 w-4 h-4 transition ease-in-out duration-100"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1 9-9m-5 0h5v5"
            />
          </svg>
        </article>

        <article class="relative py-4 px-5 bg-white border border-transparent rounded-lg hover:border-sand-8 hover:shadow-sm transition duration-100 ease-in-out group">
          <h2 class="font-semibold text-sand-12">
            <a href="https://japa.dev" target="_blank" class="flex flex-row gap-2">
              <span class="bg-[#FACDDC] h-6 w-6 flex justify-center items-center rounded">
                <svg class="h-4 w-4 fill-[#DD3074]" viewBox="0 0 256 256">
                  <path
                    fill="currentColor"
                    d="m240.49 83.51-60-60a12 12 0 0 0-17 0L34.28 152.75a48.77 48.77 0 0 0 69 69l111.2-111.26 21.31-7.11a12 12 0 0 0 4.7-19.87M86.28 204.75a24.77 24.77 0 0 1-35-35l28.13-28.13c7.73-2.41 19.58-3 35.06 5a84 84 0 0 0 21.95 8ZM204.2 88.62a12.15 12.15 0 0 0-4.69 2.89l-38.89 38.9c-7.73 2.41-19.58 3-35.06-5a84 84 0 0 0-21.94-8L172 49l37.79 37.79Z"
                  />
                </svg>
              </span>
              <span>Japa</span>
              <span class="absolute inset-0"></span>
            </a>
          </h2>

          <p class="mt-4 text-sm text-sand-11 group-hover:text-sand-12 transition ease-in-out duration-100">
            From JSON API tests using Open API schema to browser tests with Playwrighht, it
            comes with everything you need to test your application.
          </p>

          <svg
            class="absolute top-4 right-5 opacity-0 group-hover:opacity-100 text-sand-9 w-4 h-4 transition ease-in-out duration-100"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6m-7 1 9-9m-5 0h5v5"
            />
          </svg>
        </article>
      </div>
    </div>

    <div class="text-sm text-center [&>code]:font-medium [&>code]:text-[#a599ff] bg-sand-12 text-sand-1 fixed bottom-0 left-0 right-0 py-2">
      Route for this page is registered in <code>start/routes.ts</code> file, rendering
      <code>inertia/pages/home.vue</code> template
    </div>
  </div>
</template>