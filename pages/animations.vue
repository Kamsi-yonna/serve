<template>
    <div class="container">
        <div ref="box" class="box container__box">This text slides in</div>

        <div ref="shapes" class="shapes">
            <div ref="circle" class="circle"></div>
            <div ref="square" class="square"></div>
            <div ref="zero" class="zero">O</div>
        </div>

        <div class="shapes">
            <div ref="circle2" class="circle2"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import useGsap from '/composables/useGsap'

const { gsap } = useGsap();
const box = ref<HTMLElement | null>(null);


onMounted(() => {
    if (box.value) {
        gsap.from(box.value, {
            x: -600,
            color: 'red',
            opacity: 0,
            ease: 'in-out',
            duration: 3,
        });
    }
    var tl = gsap.timeline();

    tl.to(".circle", { duration: 2, x: 100, rotation: 27, x: 500, y: 20, opacity: 0.5 }, 1.5)
        .to(".square", { duration: 1, y: 200, rotation: 27, x: 500, y: 20, opacity: 0.5 }, "+=0.75")
        .to(".zero", { duration: 3, x: 500, opacity: 0.5 }, "-=1");

    gsap.fromTo(".circle2", { x: 100, padding: 50 }, {
        x: 1000,
        y: "random(100, 400)",
        duration: 3,
        padding: 100,
        rotation: 30,
        ease: "power1.inOut",
        onComplete: () => console.log("Animation complete!")
    });


});
</script>

<style scoped>
.container {
    font-size: 40px;
    color: green;
    padding: 20px;
}

.shapes {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
}

.circle,
.circle2,
.square,
.square2 {
    width: 50px;
    height: 50px;
    padding: 40px;
    background: #10D2C2FF;
}

.circle,
.circle2 {
    background: #103bd2;
    border-radius: 40px;
}
</style>