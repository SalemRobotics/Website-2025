<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="links">
      <div class="title_container">
        <a
          href="https://sau57.org"
          target="_blank"
          rel="external noreferrer noopener"
          style="padding-left: 10px"
        >
          <img class="h-15 w-15" src="/blue_devil_icon.png" alt="Blue Devil logo" />
        </a>
      </div>

      <section class="links_">
        <div class="socials">
          <h3 class="social_title justify-center text-lg">Find us here:</h3>
          <!-- all links are marked as noreferrer and noopener for security -->
          <a
            href="https://thebluealliance.com/team/6324"
            class="p-0 pt-2.5 pl-8"
            target="_blank"
            rel="external noreferrer noopener"
          >
            <img class="h-15" src="/tba_icon.png" alt="The Blue Alliance logo" />
          </a>
          <a
            href="https://github.com/orgs/SalemRobotics"
            class="p-0 pt-2.5 pl-8"
            target="_blank"
            rel="external noreferrer noopener"
          >
            <img class="h-15" src="/github_logo.png" alt="Github logo" />
          </a>
          <a
            href="https://www.facebook.com/salemrobotics/"
            class="p-0 pt-2.5 pl-8"
            target="_blank"
            rel="external noreferrer noopener"
          >
            <img class="h-15" src="/facebook_logo.png" alt="Facebook logo" />
          </a>
          <a
            href="https://www.instagram.com/salemrobotics"
            class="p-0 pt-2.5 pl-8"
            target="_blank"
            rel="external noreferrer noopener"
          >
            <img class="h-15" src="/instagram_logo.png" alt="Instagram logo" />
          </a>
        </div>
        <div class="first">
          <h3 class="text-lg">Explore FIRST:</h3>
          <a
            href="https://www.firstinspires.org/robotics/frc"
            class="p-0 pt-2.5 pl-8"
            target="_blank"
            rel="external noreferrer noopener"
            style="padding-right: 30px"
          >
            <img class="h-15 w-58" src="/first_icon.png" alt="FIRST logo" />
          </a>
        </div>
      </section>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  width: 100%;
  display: block;
  align-content: center;
  justify-items: center;
  justify-content: center;

  .links {
    padding: 0;
    width: 99%;
    height: fit-content;
    display: flex;
    align-content: center;
    background-color: rgb(121 138 155);
    border-radius: 20px;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 10px;

    .title_container {
      padding: 0;
      padding-left: 0.5rem;
      margin: 0;
      display: flex;
      width: 30%;
      height: 100%;
      align-content: center;
    }

    .links_ {
      display: flex;
      width: 70%;
      height: 100%;
      align-content: center;
      justify-content: right;

      .socials {
        max-width: 60%;
        height: 100%;
        display: flex;
        justify-content: center;
        justify-items: center;
        align-content: center;
        align-items: center;

        .social_title {
          align-content: center;
          align-items: center;
          height: fit-content;
        }

        .link {
          padding: 0px;
          padding-top: 10px;
          padding-left: 30px;
        }
      }

      .first {
        height: 100%;
        padding: 0;
        padding-left: 30px;
        display: flex;
        align-content: center;
        align-items: center;
        justify-content: right;

        .title {
          display: flex;
          align-content: center;
          justify-content: center;
          min-width: fit-content;
          padding-right: 15px;
        }
      }
    }
  }

  .extras {
    margin-bottom: 10px;
    padding-bottom: 10px;
    width: 100%;
    justify-content: center;
    justify-items: center;
  }
}
</style>
