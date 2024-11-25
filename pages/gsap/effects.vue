<template>
    <div class="container">
        <h1>GSAP effects allow you to create reusable effects that can be applied to multiple elements</h1>

        <div class="section">
            <h2>gsap effects and register effects</h2>
            <div class="shapes">
                <div ref="circle" class="circle"></div>
                <div ref="square" class="square"></div>
            </div>
            <button @click="animate">Animate Circle</button>
            <button @click="animateTimeline">Animate Timeline</button>
        </div>

        <div class="section">
            <h2>extra effects</h2>
            <div v-for="(ball, index) in balls" :key="id" class="balls">
                <div :class=ball.class></div>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import useGsap from '/composables/useGsap';

const { gsap } = useGsap();
const circle = ref<HTMLElement | null>(null);
const square = ref<HTMLElement | null>(null);

//define the effects first
const gsapEffects = [
    {
        id: "fadeSlideTo",
        props: { opacity: 0, x: 500, repeat: -1 },
        animate: 'to'
    },
    {
        id: "fadeSlideFrom",
        props: { opacity: 0, x: 300, repeat: -1 },
        animate: 'from'
    },
    {
        id: "fadeSlideFromTo",
        props: { opacity: 0, x: 800, duration: 5, repeat: -1 },
        props2: { opacity: 1, x: 200, duration: 5, repeat: -1 },
        animate: 'fromTo'
    }
]

// then register the effects
gsapEffects.forEach(effect => {
    gsap.registerEffect({
        name: effect.id,
        defaults: { duration: 3 },
        extendTimeline: true,
        effect(targets, config) {
            if (effect.animate === 'from') {
                return gsap.from(targets, { ...effect.props, ...config });
            } else if (effect.animate === 'fromTo') {
                return gsap.fromTo(targets, { ...effect.props, ...config }, { ...effect.props2 });
            } else {
                return gsap.to(targets, { ...effect.props, ...config });
            }
        }
    });
})
// then we can now define the balls array with just a class
const balls = [
    {
        class: 'circle circle1 fadeSlideTo',
    },
    {
        class: 'circle circle2 fadeSlideFrom',
    },
    {
        class: 'circle circle3 fadeSlideFromTo',
    },
]

// Animate using a timeline
const animateBalls = () => {
    const tl = gsap.timeline();
    tl.fadeSlideTo(".fadeSlideTo")
        .fadeSlideFrom(".fadeSlideFrom", 0)
        .fadeSlideFromTo(".fadeSlideFromTo", 0);
};


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

onMounted(() => {
    if (circle.value) {
        gsap.effects.bounceIn(circle.value);
    }
});

onMounted(() => {
    animateBalls()
})
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

.shapes,
.balls {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.balls {
    padding: 10px;
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

.circle2 {
    background: #31bdc3;
}

.circle3 {
    background: #FFE75DFF;
}
</style>

