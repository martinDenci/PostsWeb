<template>
    <div class="mt-3">
        <div class="container">
            <footer class="py-5 my-4">
                <ul class="nav justify-content-center border-bottom pb-3 mb-3">
                    <li v-for="(link, title) in menuFooter" class="nav-item" :key="title" :value="ink">
                        <NuxtLink class="nav-link px-2 text-muted" :to="link">{{ title }}</NuxtLink>
                    </li>
                </ul>
                <p class="text-center text-muted">© 2024 Company, Inc</p>
            </footer>
        </div>
    </div>
</template>

<script setup>
const menuFooter = {
    'Homepage': '/',
    'Články': '/posts',
    'Článek 1': '/posts/1'
}

</script>

<style lang="scss" scoped></style>