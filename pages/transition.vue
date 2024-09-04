// SECTION ABOUT VUE TRANSITIONS
<template>
    <div>
        <button @click="toggle">Toggle</button>
        <Transition name="fade"> <!-- Added name for transition -->
            <p v-if="show">hello</p>
        </Transition>

        <Transition name="slide-fade">
            <p v-if="show">Slide and fade</p>
        </Transition>

        <Transition name="bounce">
            <p v-if="show" style="text-align: center;">
                Hello here is some bouncy text!
            </p>
        </Transition>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'; // Import ref from Vue

const show = ref(false); // Declare show as a reactive reference

const toggle = () => {
    show.value = !show.value;
}
</script>

<style scoped>
/* Define the transition classes */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* SLIDE FADE  */
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

/* //BOUNCE FADE  */
.bounce-enter-active {
    animation: bounce-in 0.5s;
}

.bounce-leave-active {
    animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
    0% {
        transform: scale(0);
    }

    50% {
        transform: scale(1.25);
    }

    100% {
        transform: scale(1);
    }
}
</style>