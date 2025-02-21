<script setup lang="ts">
import { setPage } from '@/util/page'
import MainPage from '@/pages/MainPage.vue'
import TeamCard from './components/TeamCard.vue'
</script>

<template>
  <br />
  <section class="top_content p-0 sm:p-5 md:p-10">
    <br />
    <article class="FIRST_Lego_League">
      <h2 class="title" style="font-size: 2rem">First Lego League In Our Elemantary Schools</h2>
      <hr />
      <br />
      <p class="text">Every summer since 2017, we run a week-long FIRST LEGO League summer camp in each of our 5
        elementary schools.
        The goal of this program is to introduce STEM and FIRST’s core values at an early age. Those values include
        discovery, innovation, impact, inclusion, teamwork, and fun. We assist and mentor these students to help them
        learn about science, technology, and the fundamentals of engineering and problem solving. </p>

    </article>
    <img class="image" width="300" alt="Team members all together" styles="height:100" src="/FIRSTLegoLeagueLogo.jpg" />
    <br />
  </section>
  <section>
    <h2 class="title" style="font-size: 2rem">Granite State District Event</h2>
    <hr />
    <br />
    <img class="image" width="300" alt="Team members all together" styles="height:100" src="" />
    <article class="GraniteStateDistrictEvent">
      <p class="text">Team 6324 is proud to have hosted the Granite State District event since 2019. This event runs on
        the last weekend of February, and brings an average of 35 teams and over 1000 students to Salem High School each
        year. As event hosts, our students and mentors serve on the planning committee, set up the field, run the
        kitchen, volunteer as judges, and work the machine shop and concession stands. Students from our school’s JROTC
        program and Key Club contribute in running GSD, making it an amazing opportunity for volunteer hours.</p>
    </article>
  </section>

  <article>

  </article>
  <!--<h1 class="warning">This page is still under construction!</h1>!-->

  <br />
  <br />
  <br />


</template>

<style scoped>
.top_content {
  display: flex;
  padding-bottom: 0;

  align-content: center;
  justify-content: center;

  .community {
    width: 40%;
    padding-right: 5%;
  }

  .description {
    display: flex;
    justify-content: right;
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


  }

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
</style>
