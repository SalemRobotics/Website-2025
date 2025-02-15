<script setup lang="ts">

</script>

<template>
<header class="heading">
    <div class="title">
        <h1>Salem Robotics</h1>
    </div>
    <div class="links">
        <h3 class="page_link">Community</h3>
        <h3 class="page_link">News</h3>
        <h3 class="page_link">History</h3>
        <h3 class="page_link">Sponsors</h3>
        <h3 class="page_link" style="padding-right:30px">Contact Us</h3>
    </div>
</header>
</template>

<style scoped>
.heading {
    display: flex;
    width: 100%;
    background-color: rgb(121 138 155);
    border-radius: 20px;
    margin-top: 10px;
    margin-bottom: 15px;
    color: white;
}
.title {
    padding-left: 30px;
    width: 30%;
}
.links {
    width: 70%;
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: right;
}
.page_link {
    font-weight: bold;
    padding-left: 30px;
}
</style>