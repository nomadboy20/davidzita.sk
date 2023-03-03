<template>
  <div class="w-full fixed top-0 text-center text-xs text-white h-[24px] flex items-center justify-center bg-primary">
    David Zita - Resume
  </div>
  <div class="container mt-[25px] relative flex mx-auto">

    <img src="@/assets/images/vue-logo.png" class="w-[60%] opacity-[25%] z-10 absolute top-[-1px] left-0 h-auto"
         alt="vue js log">

    <img src="@/assets/images/ts-logo.png"
         class="w-[80px] h-auto opacity-[25%] z-10 absolute top-[1.25rem] right-0 h-auto" alt="vue js log">

    <div class="w-[30%] shrink-0 z-100">

      <div class="px-10 py-10 rounded-b-2xl border-r-2 border-r-2 border-l-2  border-b-2 border-dark">

        <div class=" ">
          <img src="@/assets/images/me.jpg" class="w-full h-auto mx-auto rounded-full h-auto" alt="vue js log">
        </div>

        <div class="text-2xl mt-10">
          O mne
        </div>

        <div class="text-sm text-dark mt-2 ">

          Programovaniu sa venujem už od roku 2012.
          Začalo to skušaním v programe sketch :) , ale rokmi makania sa to
          vyformovalo na full-stack web & mobile app dev.

          <div class="mt-4">
            Living in: <a target="_blank" href="https://www.google.com/maps/place/Praha/@50.0593325,14.1854451,10z">Prague</a>
          </div>

        </div>

      </div>

      <SectionTitle class="mt-8 mb-2">
        Vlastné projekty
      </SectionTitle>

      <OwnProject link="funnelator.nomadia.sk" class="mb-4">
        Rozpracovnaý nástroj na tvobu webu
        pre koncového použivatela formou
        drag and drop.
      </OwnProject>

      <OwnProject link="objednamsi.sk" class="mb-4">
        Univerzálny reštauračný systém
        na online objednávky. Taktiež
        obsahuje administráciu, sms a
        platobnú bránu.
      </OwnProject>


    </div>

    <div class="mt-4  z-100 grow">

      <div class="flex items-stretch">
        <div class=" font-bebas py-[22px] bg-gold px-4 w-1/2">

          <div class="uppercase  text-dark font-medium text-[4rem] leading-[5rem]">
            David <br>
            Zita
          </div>

          <div class="font-normal mt-2 text-lg">
            FrontEnd <u>expert</u>, Full-Stack &<br>
            web + mobile dev. <br>
          </div>

        </div>


        <div class="w-1/2 flex flex-col justify-center pl-10">

          <div class="border-b text-sm py-2">
            +421 918 805 861
          </div>

          <div class="border-b text-sm py-2">
            infodavidzita@gmail.com
          </div>

          <div class="border-b text-sm py-2">
            @davidzita
          </div>

        </div>

      </div>

      <div class="w-full mt-8 pl-[20px]">

        <SectionTitle>
          Vzdelanie
        </SectionTitle>

        <KonwledgeDegree title="SSOSTA" full-title="Súkromná stredná odborná škola" year="2014-2018">
          Štúdium na súkromnej strednej odbornej škole, odbor
          informačné a digitálne technológie so zameraním na
          programovanie, počítačovú grafiku, elektrotechniku a
          počítačové siete CISCO.
        </KonwledgeDegree>

        <SectionTitle class="mt-8">
          Moja tvorba
        </SectionTitle>

        <MyWork title="hajcer.sk" url="https://www.hajcer.sk/main/">
          Tvorba objednávkového systému (web app, ios, android)
          pre lokálnu reštauráciu. Systém obsahuje vlastné CRM,
          node js api, sms bránu, platobnú bránu a napojenie
          cez api na externý reštauračný systém bluegastro.
        </MyWork>

        <MyWork title="cleangosh.com" url="cleangosh.com">
          Dizajn, programovanie webu, web aplikácia, a mobilná
          app (OS & android ) + tvorba administrácie.
        </MyWork>

        <MyWork title="rucickovo.sk" url="rucickovo.sk">
          Tvorba dizajnu a programovanie eshopu a mieru.
          Administrácia obsahuje vlastné CRM a online 2d
          editor na tvorbu návrhov produktov.
        </MyWork>

        <MyWork title="benzinonline.cz" url="benzinonline.cz">
          Online interaktívna mapa ktorá zobrazuje zoznam
          čerpacích staníc a ceny pohonyćh hmot v čr.
        </MyWork>

        <MyWork title="editor.bpnabytok.sk" url="editor.bpnabytok.sk">
          Online návrhár nábytku s výstupom do PDF.
        </MyWork>

        <MyWork title="dobrenoviny.sk" url="dobrenoviny.sk">
          Vývoj (FE & Backend) spravodajského portálu.
        </MyWork>

        <MyWork title="gpsdozor.cz" url="gpsdozor.cz">
         ...
        </MyWork>


      </div>


      <div class="flex">

      </div>

    </div>


  </div>
</template>
<script setup lang="ts">
import OwnProject from "~/components/OwnProject.vue";
import SectionTitle from "~/components/typo/SectionTitle.vue";
import KonwledgeDegree from "~/components/KonwledgeDegree.vue";
import MyWork from "~/components/MyWork.vue";
</script>