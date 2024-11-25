<template>
    <div class="container">
        <h1>GSAP effects allow you to create reusable effects that can be applied to multiple elements</h1>
        <div class="shapes">
            <div ref="circle" class="circle"></div>
            <div ref="square" class="square"></div>
        </div>

        <button @click="animate">Animate Circle</button>
        <button @click="animateTimeline">Animate Timeline</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import useGsap from '/composables/useGsap';

const { gsap } = useGsap();
const circle = ref<HTMLElement | null>(null);
const square = ref<HTMLElement | null>(null);

// we use our registered bouncer plugin to animate the circle
const animate = () => {
    if (circle.value) {
        gsap.effects.bouncer(circle.value)
    }
}

// we use our registered bouncer plugin to animate using the timeline
const animateTimeline = () => {
    const tl = gsap.timeline();
    tl.bouncer(square.value, { duration: 3, x: 100 });
}

gsap.effects.bounceIn = (target: HTMLElement) => {
    return gsap.to(target, {
        duration: 5,
        y: -50,
        x: 800,
        ease: "bounce.out",
    });
};



// onMounted(() => {
//     if (circle.value) {
//         gsap.effects.bounceIn(circle.value);
//     }
// });
</script>

<style scoped>
.container {
    font-size: 30px;
    color: rgb(29, 0, 0);
    padding: 20px;
}

button {
    padding: 10px;
    border-radius: 25px;
    margin-right: 30px;
}

.shapes {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.circle,
.square {
    width: 50px;
    height: 50px;
    background: #103bd2;
    border-radius: 50%;
}

.square {
    border-radius: 40px;
    background: #31bdc3;
}
</style>