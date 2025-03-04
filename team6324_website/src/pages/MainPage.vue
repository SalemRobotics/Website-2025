<template>
  <section
    id="video_and_ABOUT_US_article"
    class="flex p-5 md:p-0 md:pt-[2.5rem] content-center justify-center pb-5 w-full"
  >
    <article id="about_us_article" class="lg:pr-1.5 w-full lg:w-[40%] justify-center">
      <h2 id="about_us_title" class="text-4xl text-center lg:text-start">About Us</h2>
      <hr class="pb-5" />
      <p class="pb-5 w-full lg:w-fit">
        Salem High School came back into the world of <b>FIRST</b> Robotics in September, 2016.
        Since then, our team has rebuilt the program to a thriving 39 students in the 2025 season.
        Team 6324 has connected with our community through local sponsors, media, outreach events,
        and our annual
        <a href="https://www.firstinspires.org/robotics/fll" target="_blank">FIRST LEGO League</a>
        Summer Camp. In 2024, we partnered with Team 3467 to build a practice field at an old Toyota
        dealership, opening our doors to any nearby team who wishes to use it. We utilize these
        connections to aid both our future and our goal to bring STEM to everyone.
      </p>
    </article>
    <div class="block p-0 lg:pl-[5%] justify-center">
      <h2 class="flex text-center text-2xl lg:text-end">This Year's Game Video</h2>
      <br />
      <iframe
        class="rounded-md w-full h-[50vw] sm:w-[75%] lg:h-[23vw] lg:w-[38vw] border-none"
        src="https://www.youtube.com/embed/YWbxcjlY9JY"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
      ></iframe>
    </div>
  </section>

  <hr class="block lg:hidden w-full p-0" />

  <section
    id="event_content"
    class="block lg:flex p-10 pt-0 content-center justify-center w-full min-w-fit"
  >
    <section
      id="picture_and_FIRST_article"
      class="w-fit p-6 justify-center content-center xl:top-[-2.5rem]"
    >
      <img
        v-cloak
        loading="lazy"
        class="rounded-sm block content-center justify-center mb-2.5"
        id="stairs_image"
        alt="Team members all together"
        src="/team_on_stairs.jpg"
      />
      <br />
      <article>
        <h2 class="text-4xl pt-2">What is <b>FIRST</b>?</h2>
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

    <hr class="block lg:hidden w-full pb-5 lg:p-0" />

    <div
      id="calendar_container"
      class="pt-3 print:hidden w-fit text-center items-center justify-center lg:text-start"
    >
      <h2 class="text-3xl lg:text-2xl ml-5 lg:pl-15">Upcoming Events:</h2>
      <iframe
        id="calendar"
        class="pt-3 border-0"
        src="https://calendar.google.com/calendar/embed?src=c_95071b16f98558952ca0c03edbbd37eea71408dacc57e33aa686dc0a16b219fc%40group.calendar.google.com&ctz=America%2FNew_York"
        frameborder="0"
        scrolling="no"
      ></iframe>
    </div>
  </section>
</template>

<style scoped>
#stairs_image {
  filter: drop-shadow(7.5px 7.5px 15px);
}
#event_content {
  justify-items: center;
}
#picture_and_FIRST_article {
  justify-items: center;
}

@media (width < 64rem) {
  #video_and_ABOUT_US_article {
    display: block;
  }
  #stairs_image {
    width: 90%;
    filter: drop-shadow(5px 4px 10px);
  }

  #calendar_container {
    width: 100%;
    margin-bottom: 2vh;
  }
  #calendar {
    width: 100%;
    height: calc(100vw / (4 / 3));
    padding-left: calc(1vw / 2);
    padding-right: calc(1vw / 2);
  }
}

@media (width >= 64rem) {
  #picture_and_FIRST_article {
    position: relative;
    width: 40vw;
  }

  #calendar {
    margin-left: 2vw;
    width: 50vw;
    height: 40vw;
  }
}

@media (width < 64rem) and (width >= 48rem) {
  #stairs_image {
    width: 75%;
  }
}

@media (width < 48rem) {
  #event_content {
    padding: 0;
  }
  #stairs_image {
    width: 100%;
  }
}
</style>
