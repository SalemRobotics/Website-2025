<script setup lang="ts">
import { ref } from 'vue';
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';

let page = ref(Header);
</script>

<template>
  <div class="display">
  <Header class="heading"></Header>

  <main>
    <div class="title_image">
        <h1 class="top_image_title">FRC Team 6324</h1>
        <div style="height:400px;display:flex;align-content:center;">
          <img class="image" alt="Group photo of team" src="/goodGroup.jpg" height="392px"/>
        </div>
        
    </div>

    <div class="articles">
      <div class="article_container">
        <article class="about_us">
          <h2 class="article_title">About Us</h2>
          <hr>
          <br />
          <p class="article_text">
            Salem High School came back into the world of FIRST Robotics in September, 2016. Since then, our team has rebuilt the 
            program to a thriving 39 students in the 2025 season. Team 6324 has connected with our community through local sponsors, 
            media, outreach events, and our annual FIRST LEGO League Summer Camp. In 2024, we partnered with Team 3467 to build a practice 
            field at an old Toyota dealership, opening our doors to any nearby team who wishes to use it. We utilize these connections to 
            aid our future and our goal to bring STEM to everyone.
          </p>
        </article>
        <div style="padding-right: 20px">
          <div style="display:flex; justify-content: right;">
            <h2>This Year's Game Video</h2>
          </div>
          <br />
          <iframe class="game_video" width="560" height="315" src="https://www.youtube.com/embed/YWbxcjlY9JY?si=hb6xYNI8r8zsvo7O" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>

      <hr class="separator"/>

      <div class="article_container">
        <div class="second_articles">
          <div class="second_image_container">
            <img class="second_image" alt="Team members with robot" src="/img_5188.jpg" width="500px"/>
          </div>

          <br />

          <article>
            <h2 class="article_title">What Is FIRST?</h2>
            <br />
            <p class="article_text">
              <span class="bold">FIRST</span>, <span class="bold">F</span>or <span class="bold">I</span>nspiration
              and <span class="bold">R</span>ecognition of <span class="bold">S</span>cience and <span class="bold">T</span>echnology, 
              was founded in 1989 by Dean Kamen with the goal of encouraging young people to pursue careers in STEM fields. The first 
              competition to be held was the FIRST Robotics Competition in 1992 in a small gym in New Hampshire; since then the program 
              has grown to include millions of participants from over 30 countries across four levels of competition. For more information 
              about the program, or if you would like to start a team, please visit their website <a>here</a>.
            </p>
          </article>
        </div>
        
        <div>
          <h2 style="font-size: 23px;">Upcoming Events</h2>
          <iframe src="https://calendar.google.com/calendar/embed?src=c_95071b16f98558952ca0c03edbbd37eea71408dacc57e33aa686dc0a16b219fc%40group.calendar.google.com&ctz=America%2FNew_York" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
        </div>
      </div>
      
    </div>
  </main>

  <br/>
  <Footer></Footer>
</div>
</template>

<style scoped>
.second_image {
  border-radius: 2.5px;
}
.game_video {
  filter: drop-shadow(7.5px 7.5px 15px);
  border-radius: 2.5px;
}
.top_image_title {
  display: inline;
  justify-content: center;
  align-content: center;
  padding-right: 15%;
  font-size: 40px;
  color: white;
}
.second_image_container {
  display: block;
  align-content: center;
  justify-content: center;
  width: 100%;
  height: fit-content;
  filter: drop-shadow(7.5px 7.5px 15px);

}
.title_image {
  position: relative;
  display: flex;
  align-content: center;
  justify-content: center;
  background-color: rgb(0 51 160);
  border-radius: 5px;
}
.image {
  position: relative;
  top: 4px;
  filter: blur(0.35px);
  border-radius: 5px;
}
.second_articles {
  align-content: center;
  justify-content: center;
  display: inline-block;
  padding-right: 25px;
}
.bold {
  font-weight: bold;
}
.calendar {
  border: 0;
  min-width: 400px;
  width: 60%;
}
.article_title {
  font-size: 30px;
}
.article_container {
  display: flex;
  padding: 40px;
  align-content: center;
  justify-content: center;
}
.about_us {
  width: 500px;
  padding-right: 25px;
}
.heading {
  height: 100px;
  padding: 0px;
  width: 100%;
}
.display {
  padding: 0px;
  display: block;
  height: 100%;
  width: 100%;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
