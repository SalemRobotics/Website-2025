<script setup lang="ts"></script>

<template>
  <section class="title_card">
    <div class="info">
      <h1 class="text">FRC Team 6324</h1>
      <p class="loc">Salem, NH</p>
    </div>

    <div class="image_container">
      <img src="/goodGroup.jpg" alt="Group photo of the team" class="image" height="392px" />
    </div>
  </section>

  <section class="top_content">
    <article class="about_us">
      <h2 class="title" style="font-size: 30px">About Us</h2>
      <hr />
      <br />
      <p class="text">
        Salem High School came back into the world of FIRST Robotics in September, 2016. Since then,
        our team has rebuilt the program to a thriving 39 students in the 2025 season. Team 6324 has
        connected with our community through local sponsors, media, outreach events, and our annual
        <a href="https://info.firstinspires.org/first-dive">FIRST LEGO League</a> Summer Camp. In
        2024, we partnered with Team 3467 to build a practice field at an old Toyota dealership,
        opening our doors to any nearby team who wishes to use it. We utilize these connections to
        aid our future and our goal to bring STEM to everyone.
      </p>
    </article>
    <div class="game_vid">
      <h2 class="description">This Year's Game Video</h2>
      <br />
      <iframe
        class="video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/YWbxcjlY9JY?si=hb6xYNI8r8zsvo7O"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  </section>

  <hr />

  <br />
  <section class="event_content">
    <section class="picture_and_article">
      <img class="image" width="500" alt="Team members all together" src="/team_on_stairs.jpg" />
      <br />
      <article class="about_first">
        <h2 style="font-size: 30px">What is FIRST?</h2>
        <br />
        <p>
          <span class="bold">FIRST</span>, <span class="bold">F</span>or
          <span class="bold">I</span>nspiration and <span class="bold">R</span>ecognition of
          <span class="bold">S</span>cience and <span class="bold">T</span>echnology, was founded in
          1989 by Dean Kamen with the goal of encouraging young people to pursue careers in STEM
          fields. The first competition to be held was the FIRST Robotics Competition in 1992 in a
          small gym in New Hampshire; since then the program has grown to include millions of
          participants from over 30 countries across four levels of competition. For more
          information about the program, or if you would like to start a team, please visit their
          website
          <a href="https://firstinspires.org" target="_blank" rel="external noreferrer noopener"
            >here</a
          >.
        </p>
      </article>
    </section>
    <div class="calendar">
      <h2 style="font-size: 23px">Upcoming Events:</h2>
      <iframe
        width="800"
        height="600"
        src="https://calendar.google.com/calendar/embed?src=c_95071b16f98558952ca0c03edbbd37eea71408dacc57e33aa686dc0a16b219fc%40group.calendar.google.com&ctz=America%2FNew_York"
        style="border: 0"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
.title_card {
  align-content: center;
  background-color: rgb(0 51 160);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 400px;
  .info {
    display: block;
    justify-content: center;
    width: 25%;
    min-width: fit-content;
    .loc {
      display: flex;
      justify-content: center;
      width: 100%;
      font-size: 20px;
    }
    .text {
      display: inline;
      align-content: center;
      color: white;
      font-size: 40px;
      font-weight: 500;
    }
  }
  .image_container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 98%;
    .image {
      position: relative;
      filter: blur(0.3px);
      border-radius: 5px;
      max-height: 100%;
    }
  }
}
.top_content {
  display: flex;
  padding: 40px;
  align-content: center;
  justify-content: center;

  .about_us {
    width: 40%;
    padding-right: 7.5%;
  }

  .game_video {
    display: block;
    padding-left: 7.5%;

    .description {
      display: flex;
      justify-content: right;
    }
  }
}
.event_content {
  display: flex;
  padding: 40px;
  align-content: center;
  justify-content: center;

  .picture_and_article {
    width: fit-content;
    padding: 25px;
    .image {
      border-radius: 2.5px;
      display: block;
      align-content: center;
      justify-content: center;
      height: fit-content;
      filter: drop-shadow(7.5px 7.5px 15px);
    }
    .about_first {
      p .bold {
        font-weight: bold;
      }
    }
  }
}
</style>
