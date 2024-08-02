<template>
    <div :class="'w-[20vw] h-[80vh] flex justify-center items-center font-bold text-5xl bg-[' + background + 'border-2 border-[' + border + 'shadow-lg'">
        {{ role }}
    </div>
</template>

<script>
export default{
    props: {
        background: {
            type: String,
        },
        border: {
            type: String,
        },
        role: {
            type: String,
        }
    }
}

</script>