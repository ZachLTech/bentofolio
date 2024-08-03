<template>
    <div class="w-full flex items-center">
        <div class="leftCycle flex items-center gap-5">
            <img v-if="direction=='left'" v-for="icon in icons" class="w-20" :src="'/icons/' + icon" :alt="icon">
            <img v-if="direction=='left'" v-for="icon in icons" class="w-20" :src="'/icons/' + icon" :alt="icon">
        </div>

        <div class="rightCycle flex items-center gap-5">
            <img v-if="direction=='right'" v-for="icon in icons" class="w-20" :src="'/icons/' + icon" :alt="icon">
            <img v-if="direction=='right'" v-for="icon in icons" class="w-20"  :src="'/icons/' + icon" :alt="icon">
        </div>
    </div>
</template>

<style>
    .leftCycle{
        animation: leftAnim 55s linear infinite;
    }
    .rightCycle{
        animation: rightAnim 55s linear infinite;
    }

    @keyframes leftAnim {
        0% {
            transform: translateX(0%);
        }
        100% {
            transform: translateX(-900px);
        }
    }
    @keyframes rightAnim {
        0% {
            transform: translateX(-800px);
        }
        100% {
            transform: translateX(0%);
        }
    }
</style>

<script>
    export default {
        props: {
            direction: {
                type: String,
                required: true,
            },
            icons: {
                type: Array,
                required: true,
            }
        }
    }
</script>