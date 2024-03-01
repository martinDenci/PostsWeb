<template>
    <div class="card h-100">
        <img :src="post.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title text-uppercase">{{ post.title }}</h5>
            <strong class="card-created mb-2 d-block">{{ new Date(post.createdAt).toLocaleDateString("cs-cz") }}</strong>
            <p class="card-text">{{ post.content }}</p>
        </div>
        <div class="card-footer border-top-0 bg-transparent">
            <NuxtLink class="btn btn-primary mb-2" :to="`posts/${post.id}`">Více</NuxtLink>
        </div>
    </div>
</template>

<script setup>

const { post } = defineProps(['post'])

</script>

<style lang="scss" scoped></style>