<template>
    <div>
        <a href="https://juejin.cn/user/4121393108091789" target="_blank">
            <img src="/nebula.svg" alt="Vite logo" />
        </a>
    </div>
    <p>My Nebula App</p>
    <p>A Vue 3 Project Template, Uses TypeScript, Continuously Update</p>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
</template>

<script setup lang="ts">
    import { useTestStore } from '@store/modules/test'
    import { getHome } from '@api/home'
    import { getMock } from '@api/mock'

    getHome().then((res) => {
        console.log('getHome', res)
    })

    getMock().then((res) => {
        console.log('getMock', res)
    })

    const testStore = useTestStore()
    console.log('testStore', testStore.testPinia)
    setTimeout(() => {
        testStore.setTestPinia('Hello Nebula Pinia')
    }, 1000)

    console.log('import', import.meta.env)
    console.log('__APP_VERSION__', __APP_VERSION__)
</script>

<style lang="scss" scoped></style>
