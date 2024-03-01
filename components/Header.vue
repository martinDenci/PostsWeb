<template>
    <div>
        <div>
            <header class="p-3 text-bg-dark">
                <div class="container d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li v-for="(url, title) in menuHeader" :key="title" :value="url">
                            <NuxtLink class="nav-link px-2 text-secondary" :to="url">{{ title }}</NuxtLink>
                        </li>
                    </ul>
                </div>
            </header>
        </div>
    </div>
</template>

<script setup>
    const menuHeader = {
        'Homepage' : '/',
        'Články':'/posts',
        'Článek 1' : '/posts/1'
    }
</script>

<style lang="scss" scoped></style>