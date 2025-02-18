<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="title_container">
      <a
        href="https://sau57.org"
        target="_blank"
        rel="external noreferrer noopener"
        style="padding-left: 10px"
      >
        <img src="/blue_devil_icon.png" alt="Blue Devil logo" width="70px" height="70px" />
      </a>
    </div>

    <div class="links">
      <div class="title">
        <h3 style="color: white">Our Links:</h3>
      </div>

      <a
        href="https://thebluealliance.com/team/6324"
        class="link"
        target="_blank"
        rel="external noreferrer noopener"
      >
        <img src="/tba_icon.png" alt="The Blue Alliance logo" height="50px" />
      </a>
      <a
        href="https://github.com/orgs/SalemRobotics"
        class="link"
        target="_blank"
        rel="external noreferrer noopener"
      >
        <img src="/github_logo.png" alt="Github logo" height="50px" />
      </a>
      <a
        href="https://www.facebook.com/salemrobotics/"
        class="link"
        target="_blank"
        rel="external noreferrer noopener"
      >
        <img src="/facebook_logo.png" alt="Facebook logo" height="50px" />
      </a>
      <a
        href="https://www.instagram.com/salemrobotics"
        class="link"
        target="_blank"
        rel="external noreferrer noopener"
      >
        <img src="/instagram_logo.png" alt="Instagram logo" height="50px" />
      </a>
      <a
        href="https://www.firstinspires.org/robotics/frc"
        class="link"
        target="_blank"
        rel="external noreferrer noopener"
        style="padding-right: 30px"
      >
        <img src="/first_icon.png" alt="FIRST logo" height="50px" />
      </a>
    </div>
  </footer>
</template>

<style lang="css">
.footer {
  margin: auto;
  width: 95%;
  display: flex;
  align-content: center;
  background-color: rgb(121 138 155);
  border-radius: 20px;
  margin-bottom: 20px;
  padding-top: 10px;
  .title_container {
    display: flex;
    width: 30%;
    height: 100%;
    align-content: center;
  }
  .links {
    display: flex;
    width: 70%;
    align-content: center;
    justify-content: right;

    .title {
      display: inline-block;
      align-content: center;
      width: fit-content;
      justify-content: center;
    }
    .link {
      padding: 0px;
      padding-top: 10px;
      padding-left: 30px;
    }
  }
}
</style>
