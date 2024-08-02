<template>
  <div class="w-screen h-screen p-[100px] flex justify-center items-center">
      <div class="w-full h-full grid grid-cols-7 grid-rows-8 gap-5">
          <div id="intro" class="w-full h-full col-span-2 row-span-4 flex flex-col items-center px-16 py-16 gap-8 bg-gradient-to-br from-[#171717] via-[#101010] to-black rounded-3xl shadow-lg">
            <img class="w-44" src="/ZachLTechCircle.png" alt="Logo">
            <div class="flex flex-col justify-center items-center gap-5">
              <p class="text-xl text-center">
                I'm a freelance web-developer and software engineer studying CS full-time @ FAU
              </p>
              <div class="flex gap-2">
                <a href="" class="w-12 h-12 rounded-full border-2 border-[#c3c3c3]"></a>
                <a href="" class="w-12 h-12 rounded-full border-2 border-[#c3c3c3]"></a>
                <a href="" class="w-12 h-12 rounded-full border-2 border-[#c3c3c3]"></a>
                <a href="" class="w-12 h-12 rounded-full border-2 border-[#c3c3c3]"></a>
              </div>
              <!-- <p class="text-lg font-bold text-[#383838] bg-[#171717] px-2 rounded-lg">ssh zachl.tech</p> -->
            </div>
          </div>
          <div id="stats" class="w-full h-full col-span-3 row-span-4 flex flex-col justify-center items-center gap-5 font-bold text-5xl bg-gradient-to-br from-[#171717] via-[#101010] to-black rounded-3xl  shadow-lg">
            <div id="statCharts" class="w-full h-1/2 flex justify-center items-center gap-3 flex-wrap">
              Charts go here
            </div>
            <div id="statSVGs"class="w-full h-1/2 flex justify-center items-center gap-3 flex-wrap">
              <img src="/tempStats/githubstats.svg" alt="">
              <img src="/tempStats/githublangs.svg" alt="">
            </div>
          </div>
          <div id="vertlong" class="w-full h-full col-span-2 row-span-8 flex justify-center items-center font-bold text-5xl bg-gradient-to-br from-[#171717] via-[#101010] to-black rounded-3xl  shadow-lg">

          </div>
          <div id="horzlong" class="w-full h-full col-span-5 row-span-4 flex justify-center items-center gap-4 bg-gradient-to-br from-[#171717] via-[#101010] to-black rounded-3xl  shadow-lg">
            <div id="resumeCard" class="h-5/6 w-1/4 flex flex-col justify-center items-center py-16 px-8 bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
              <h1 class="text-4xl font-bold text-left mb-12">Resume</h1>
              <p class="text-center max-w-[250px] mb-20">
                View a nicely formatted rundown of my skills, experience and education.
              </p>
              <div class="flex gap-3">
                <a href="" class="h-10 flex items-center justify-center px-4 rounded-lg bg-[#c3c3c3] text-black text-lg">Website</a>
                <a href="" class="h-10 flex items-center justify-center px-4 rounded-lg border-2 border-[#c3c3c3] text-lg">PDF</a>
              </div>
            </div>
            <div id="availabilityCard" class="h-5/6 w-1/4 flex flex-col justify-start items-center py-16 bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
              <div class="absolute w-5 h-5 -mt-10 mr-5 self-end bg-gradient-to-tr from-yellow-600 to-yellow-300 rounded-full animate-pulse"></div>
              <h1 class="text-4xl font-bold text-left mb-12">Availability</h1>
              <p class="text-left max-w-[250px]">
                Currently I'm pretty busy with school & working on a grant supported research project so I'm not typically available during a semester but on summers I'm open to opportunities.
              </p>
            </div>
            <div id="blogCard" class="h-5/6 w-1/4 flex flex-col justify-start items-center py-16 bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
              <h1 class="text-4xl font-bold text-left mb-12">Blog</h1>
              <p class="text-center max-w-[250px] mb-20">
                Check out some small posts I've made on various topics regarding tech. 
              </p>
              <div class="flex gap-3">
                <a href="" class="h-10 flex items-center justify-center px-4 rounded-lg bg-[#c3c3c3] text-black text-lg">Coming Soon...</a>
              </div>
            </div>
            <div id="currentlyWorkingOnCard" class="h-5/6 w-1/4 flex flex-col justify-start items-center py-16 bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
              <div class="absolute w-5 h-5 -mt-10 mr-5 self-end bg-gradient-to-tr from-green-600 to-green-300 rounded-full animate-pulse"></div>
              <h1 class="text-3xl font-bold text-center -mt-5 mb-9 max-w-[200px]">Currently Working On</h1>
              <p class="text-left max-w-[250px]">
                Well during my fall semester I will be working on an AI related research project at FAU which I got a grant for through their OURI program alongside continuing to improve the AEV Solar Cybersedan. 
              </p>
            </div>
            <div id="techStackCard" class="h-5/6 w-1/4 flex flex-col justify-start items-center py-16 bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
              <h1 class="text-4xl font-bold text-center mb-12">Tech Stack</h1>
              <p class="text-left max-w-[250px]">
                My favorite simplistic tech stack this past year for web development<br><br>
                Frontend<br>
                &nbsp; - Nuxt/Vue<br>
                &nbsp; - TailwindCSS<br>
                Backend<br>
                &nbsp; - Typescript<br>
                &nbsp; - Express.js<br>
                &nbsp; - Appwrite
              </p>
            </div>
          </div>
      </div>
      <p class="absolute mb-[-70px] self-end text-3xl text-[#383838]">ssh zachl.tech</p>
  </div>
</template>