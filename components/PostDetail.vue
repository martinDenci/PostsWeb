<template>
    <div>
        <article class="blog-post mt-5 mb-5">
            <div class="row">
                <div class="col-12 col-lg-5">
                    <img :src="post.image" alt="post image" class="img-fluid rounded">
                </div>
                <div class="col-12 col-lg-7">
                    <strong class="blog-post-meta mb-2 d-block mt-2 mt-lg-0">{{ new Date(post.createdAt).toLocaleDateString("cs-cz") }}</strong>
                    <p>{{ post.content }}</p>
                </div>
            </div>
        </article>
    </div>
</template>

<script setup>
const { post } = defineProps(['post'])
</script>

<style lang="scss" scoped></style>