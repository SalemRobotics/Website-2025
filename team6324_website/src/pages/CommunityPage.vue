<script setup lang="ts">
import { setPage } from '@/util/page'
import MainPage from '@/pages/MainPage.vue'
import TeamCard from './components/TeamCard.vue'
</script>
<!---->
<template>

  <br />
  <!--the top content of the page that includes the paragraph about FLL FIRST 
    Lego League and also includes the logo of FLL on the right side of the top content-->
  <section class="top_content p-0 sm:p-5 md:p-10" style="flex-wrap: wrap;">
    <br />
    <article class="FIRST_Lego_League" style="width: 45%;">
      <h2 class="title" style="font-size: 2rem">First Lego League In Our Elemantary Schools</h2>
      <hr />
      <br />
      <p class="text">Every summer since 2017, we run a week-long FIRST LEGO League summer camp in each
        of our 5
        elementary schools.
        The goal of this program is to introduce STEM and FIRST’s core values at an early age. Those values include
        discovery, innovation, impact, inclusion, teamwork, and fun. We assist and mentor these students to help them
        learn about science, technology, and the fundamentals of engineering and problem solving. </p>
    </article>

    <img class="" id="legoLeagueImg" alt="Team members all together" style="height: 25%"
      src="/FIRSTLegoLeagueLogo.jpg" />
  </section>
  <br />
  <!--mid content is the GSD aka the Granite State District is the event team 6324 hosts and talks about that 
    and has a image of the devils den consentions on the left of the paragraph-->
  <section class="mid_content p-0 sm:p-5 md:p-10">


    <img class="image" width="500" alt="Team members all together" src="/GSD_2024.jpg" />
    <br />
    <article class="GraniteStateDistrictEvent" style="width: 35%; margin: 2.5%">
      <h2 class="title" style="font-size: 2rem">Granite State District Event</h2>
      <hr />
      <br />
      <p class="text">Team 6324 is proud to have hosted the Granite State District event since 2019. This event runs
        on
        the last weekend of February, and brings an average of 35 teams and over 1000 students to Salem High School
        each
        year. As event hosts, our students and mentors serve on the planning committee, set up the field, run the
        kitchen, volunteer as judges, and work the machine shop and concession stands. Students from our school’s
        JROTC
        program and Key Club contribute in running GSD, making it an amazing opportunity for volunteer hours.</p>
    </article>
  </section>
  <br />
  <!--Bottom content has a small pararaph of where else we can be seen and another small section of what we do -->
  <section class="bot_content p-0 sm:p-5 md:p-10">
    <article class="OtherPlacesToFindUs" style="width: 30%; margin-left: -2.5%;">
      <h2 class="title" style="font-size: 2rem">Other Places to Find Us:</h2>
      <hr />
      <br />
      <p class="text">As a team, we try to find as many ways as possible to keep in touch with our community! You’ll
        always be able to find us, whether it’s through volunteer activities, fundraising, or at town hosted events.
        You can also keep up with us through our Instagram!</p>
    </article>
    <div style="margin-left: 7.5%; width: 35%;">

      <h2 class="title" style="font-size: 2rem">Some examples of what we do</h2>
      <hr />
      <br />
      <ul>
        <li> <b> - </b>Participate in the annual Salem Scramble and Salem Holiday Parade</li>
        <li> <b> - </b>Monthly Newsletter to all of our sponsors to update them on our progress!</li>
        <li> <b> - </b>Apple Pie and Calendar Fundraisers in the late fall!</li>
      </ul>
    </div>

  </section>


  <!--<h1 class="warning">This page is still under construction!</h1>!-->

  <br />
  <br />
  <br />


</template>

<style scoped>
/*specialized CSS for the FLL logo*/
#legoLeagueImg {
  margin: 2.5%;
  width: 25%;
}

/*CSS for the bottom content of the page*/
.bot_content {
  display: flex;
  padding-bottom: 0;

  align-content: center;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
}

/*CSS for the middle content of the page*/
.mid_content {
  display: flex;
  padding-bottom: 0;

  align-content: center;
  justify-content: center;
  align-content: space-between;
  flex-wrap: wrap;
}

/*CSS for the top content of the page*/
.top_content {
  display: flex;
  padding-bottom: 0;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-content: space-between;

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

.image {
  border-radius: 2.5px;
  display: block;
  align-content: center;
  justify-content: center;
  margin-bottom: 10px;
  height: fit-content;
  filter: drop-shadow(7.5px 7.5px 15px) blur(0.25px);
}
</style>
