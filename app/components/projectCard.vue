<template>
    <a class="shadow-lg opacity-80 hover:opacity-100 transition-all" :href="'https://' + url" target="_blank" rel="noopener noreferrer">
        <img :src="'https://github-readme-stats-blond-six-73.vercel.app/api/pin/?username=' + username + '&repo=' + repo + '&theme=dark&hide_border=true'" :alt="'github.com/' + username + '/' + repo">
    </a>
</template>

<script>
export default {
    props: {
        url: {
            type: String,
        },
        username: {
            type: String,
        },
        repo: {
            type: String,
        }
    }
}
</script>