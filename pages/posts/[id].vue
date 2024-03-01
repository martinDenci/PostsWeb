<template>
    <div>
        <h1 class="display-1 mt-5 text-uppercase text-center">{{ postData.title }}</h1>
        <PostDetail :post="postData" />
        <div v-for="comment in commentsData">
            <Comment :comment="comment" />
        </div>
        <div class="d-flex justify-content-center mt-5">
            <NuxtLink class="btn btn-primary" to="/posts">Články</NuxtLink>
        </div>
    </div>
</template>

<script setup>
const { id: postId } = useRoute().params
const apiUrl = 'https://62fe137ba85c52ee482f275b.mockapi.io/api/v1/'
const postsUrl = `${apiUrl}/posts/${postId}`
const commentsUrl = `${apiUrl}/comments/`


const { data: postData } = await useFetch(postsUrl, { id: postId })
const { data: commentsData } = await useFetch(commentsUrl)

if (!postData.value) {
    throw createError({
        statusCode: '404',
        statusMessage: `Article with id ${postId} not found`
    })
}

useHead({
    title: `Homepage | Článek - ${postId}`,
    meta: [
        { name: "description", content: "Post page description" }
    ]
})

</script>

<style lang="scss" scoped></style>