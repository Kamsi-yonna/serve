<template>
    <div class="container">
        <h2>Scroll to Trigger</h2>
        <div class="balls">
            <div v-for="(ball, index) in balls" :key="index" class="ball">
                <div :class="ball.class">{{ ball.title }}</div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import useGsap from '/composables/useGsap';

const { gsap } = useGsap();

const balls = [
    {
        title: 'A',
        class: 'circle1', // Actual class for styling
        trigger: 'fadeSlideTo', // Animation effect identifier
    },
    {
        title: 'B',
        class: 'circle2',
        trigger: 'fadeSlideFrom',
    },
    {
        title: 'C',
        class: 'circle3',
        trigger: 'fadeSlideFromTo',
    },
    {
        title: 'D',
        class: 'circle3',
        trigger: 'fadeSlideFromTo',
    },
];

const animateBalls = () => {
    balls.forEach((ball) => {

        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".circle2",
                start: "top 80%",
                scrub: 1,
                // ease: "in",
                pin: true,
                markers: true,
                toggleActions: "play pause none reset"
            },
        });
        tl.to(".circle2", {
            // opacity: 0,
            y: 50,
            x: 900,
            rotation: 360,
            duration: 4
        })
        //     .to(".circle2", {
        //         backgroundColor: "green",
        //         // duration: 3,
        //     })
        //     .to(".circle2", {
        //         // end: "20px 60%",
        //         // opacity: 0,
        //         // duration: 3,
        //         // y: 0,
        //         // x: 0,
        //     });

    });
};


onMounted(() => {
    animateBalls()
})

// const animateBalls = () => {
//     balls.forEach((ball) => {
//         gsap.from(`.${ball.class}`, { // Use ball.class to target the actual elements
//             scrollTrigger: {
//                 trigger: `.${ball.class}`,
//                 start: "top 40%",
//                 toggleActions: "play none none reverse"
//             },
//             opacity: 0,
//             y: 50,
//             duration: 1
//         });
//         console.log(ball.title, "animation set up");
//     });
// };

// onMounted(() => {
//     animateBalls();
// });
</script>

<style scoped>
.container {
    padding: 40px;
    font-size: 40px;
    font-family: sans-serif;
}

.balls {
    display: flex;
    flex-direction: column;
    gap: 800px;
    /* Adjusted for better visibility */
    /* align-items: center; */
}

.circle1,
.circle2,
.circle3 {
    color: black;
    width: 300px;
    height: 300px;
    background: #103bd2;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 80px;
}

.circle2 {
    background: #31bdc3;
}

.circle3 {
    background: #FFE75DFF;
}
</style>