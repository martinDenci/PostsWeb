<template>
    <div>
        <h1 class="display-1 mt-5">Články</h1>
        <div  class="mt-2 mt-md-4 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            <div v-for="post in data" class="col">
                <Post :post="post" />
            </div>
        </div>
    </div>
</template>

<script setup>

const { data } = await useFetch('https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/posts')

useHead({
    title: "Homepage | Články",
    meta: [
        { name: "description", content: "Post page description" }
    ]
})
</script>

<style lang="scss" scoped></style>