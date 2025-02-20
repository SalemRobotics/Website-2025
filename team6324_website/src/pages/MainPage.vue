<template>
  <section class="top_content p-0 sm:p-5 md:p-10">
    <article class="about_us">
      <h2 class="title" style="font-size: 2rem">About Us</h2>
      <hr />
      <br />
      <p class="text">
        Salem High School came back into the world of <span class="bold">FIRST</span> Robotics in
        September, 2016. Since then, our team has rebuilt the program to a thriving 39 students in
        the 2025 season. Team 6324 has connected with our community through local sponsors, media,
        outreach events, and our annual
        <a href="https://www.firstinspires.org/robotics/fll" target="_blank">FIRST LEGO League</a>
        Summer Camp. In 2024, we partnered with Team 3467 to build a practice field at an old Toyota
        dealership, opening our doors to any nearby team who wishes to use it. We utilize these
        connections to aid both our future and our goal to bring STEM to everyone.
      </p>
    </article>
    <div class="game_vid">
      <h2 class="description text-2xl">This Year's Game Video</h2>
      <br />
      <iframe
        v-cloak
        class="video"
        src="https://www.youtube.com/embed/YWbxcjlY9JY"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  </section>

  <br />
  <section class="event_content">
    <section class="picture_and_article">
      <img class="image" width="500" alt="Team members all together" src="/team_on_stairs.jpg" />
      <br />
      <article>
        <h2 style="font-size: 2rem">What is <b>FIRST</b>?</h2>
        <br />
        <p>
          <b>FIRST</b>, <b>F</b>or <b>I</b>nspiration and <b>R</b>ecognition of <b>S</b>cience and
          <b>T</b>echnology, was founded in 1989 by Dean Kamen with the goal of encouraging young
          people to pursue careers in STEM fields. The first competition to be held was the
          <b>FIRST</b> Robotics Competition in 1992 in a small gym in New Hampshire; since then the
          program has grown to include millions of participants from over 30 countries across four
          levels of competition. For more information about the program, or if you would like to
          start a team, please visit their website
          <a
            class="p-0 m-0"
            href="https://firstinspires.org"
            target="_blank"
            rel="external noreferrer noopener"
            >here</a
          >.
        </p>
      </article>
    </section>
    <div class="calendar pt-3 print:hidden">
      <h2 class="text-2xl pl-5">Upcoming Events:</h2>
      <br />
      <!-- 4:3 ratio width:height -->
      <iframe
        v-cloak
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
.top_content {
  display: flex;
  padding-bottom: 0;

  align-content: center;
  justify-content: center;

  .about_us {
    width: 40%;
    padding-right: 5%;
  }

  .game_vid {
    display: block;
    padding-left: 5%;

    .video {
      width: 38vw;
      height: 23vw;
    }
    .description {
      display: flex;
      justify-content: right;
    }
  }
}
.event_content {
  display: flex;
  padding: 40px;
  padding-top: 0;
  align-content: center;
  justify-content: center;

  .picture_and_article {
    position: relative;
    top: -2.5rem;
    width: fit-content;
    padding: 25px;
    .image {
      border-radius: 2.5px;
      display: block;
      align-content: center;
      justify-content: center;
      margin-bottom: 10px;
      height: fit-content;
      filter: drop-shadow(7.5px 7.5px 15px) blur(0.25px);
    }
  }
}
</style>
