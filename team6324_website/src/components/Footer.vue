<script setup lang="ts">

</script>

<template>
<footer class="footer">
    <div class="title_container">
        <a href="https://sau57.org">
            <img src="/blue_devil_icon.png" alt="Blue Devil logo" width="70px" height="70px"/>
        </a>
    </div>

    <div class="link_container">
        <div class="link_title">
            <h3 style="color: white;"> Our Links: </h3>
        </div>
        <a href="https://thebluealliance.com/team/6324" class="link">
            <img src="/tba_icon.png" alt="The Blue Alliance logo" height="50px"/>
        </a>
        <a href="https://github.com/orgs/SalemRobotics" class="link">
            <img src="/github_logo.png" alt="Github logo" height="50px"/>
        </a>
        <a href="https://www.facebook.com/salemrobotics/" class="link">
            <img src="/facebook_logo.png" alt="Facebook logo" height="50px"/>
        </a>
        <a href="https://www.instagram.com/salemrobotics" class="link">
            <img src="/instagram_logo.png" alt="Instagram logo" height="50px"/>
        </a>
        <a class="link">
            <img src="/first_icon.png" alt="FIRST logo" height="50px"/>
        </a>
    </div>
    
</footer>
</template>

<style lang="css">
.link {
    padding-left: 30px;
}
.title_container {
    display: flex;
    width: 30%;
    height: 100%;
    align-content: center;
}
.link_title {
    display: inline-block;
    align-content: center;
}
.footer {
    margin: auto;
    width: 95%;
    padding: 5px;
    display: flex;
    align-content: center;
    background-color: rgb(121 138 155);
    border-radius: 20px;
    margin-bottom: 20px;
    padding-top: 10px;
}
.link_container {
    display: flex;
    width: 70%;
    align-content: center;
    justify-content: right;
}
</style>