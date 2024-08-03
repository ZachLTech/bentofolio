<template>
  <div class="w-screen h-screen p-[100px] flex justify-center items-center">
      <div class="w-full h-full grid grid-cols-7 grid-rows-8 gap-5">
          <div id="intro" class="w-full h-full col-span-2 row-span-4 flex flex-col items-center px-16 py-16 gap-8 bg-gradient-to-br from-[#171717] via-[#101010] to-black rounded-3xl shadow-lg">
            <img class="w-36" src="/ZachLTechCircle.png" alt="Logo">
            <div class="flex flex-col justify-center items-center gap-5">
              <p class="text-lg text-center">
                I'm a freelance web-developer & software engineer studying CS full-time @ FAU
              </p>
              <div class="flex gap-3">
                <a href="mailto://zlopezzl2021@gmail.com" target="_blank" class="h-10 flex items-center justify-center px-4 rounded-lg bg-[#c3c3c3] text-black text-lg">Contact</a>
                <a href="https://zachl.tech" target="_blank" class="h-10 flex items-center justify-center px-4 rounded-lg border-2 border-[#c3c3c3] text-lg">Socials</a>
              </div>
              <!-- <p class="text-lg font-bold text-[#383838] bg-[#171717] px-2 rounded-lg">ssh zachl.tech</p> -->
            </div>
          </div>
          <div id="stats" class="w-full h-full col-span-3 row-span-4 flex flex-col justify-center items-center gap-5 bg-gradient-to-br from-[#171717] via-[#101010] to-black rounded-3xl  shadow-lg">
            <div id="analytics" class="w-full flex justify-center items-end gap-3 flex-wrap">
              <div class="flex flex-col gap-2 justify-center items-center">
                <h1 class="font-bold text-6xl">&nbsp;15+</h1>
                <p class="text-4xl">Projects</p>
              </div>
              <div class="flex flex-col gap-2 justify-center items-center">
                <h1 class="font-bold text-6xl">&nbsp;50+</h1>
                <p class="text-4xl">Repos</p>
              </div>
              <div class="flex flex-col gap-2 justify-center items-center">
                <h1 class="font-bold text-6xl">&nbsp;3+</h1>
                <p class="text-4xl">Years</p>
              </div>
              <div class="flex flex-col gap-2 justify-center items-center">
                <h1 class="font-bold text-6xl">&nbsp;10+</h1>
                <p class="text-4xl">Sites</p>
              </div>
            </div>
            <div id="SVGs"class="w-full flex justify-center items-center gap-3  ">
              <img src="https://github-readme-stats-blond-six-73.vercel.app/api?username=ZachLTech&show_icons=true&theme=dark&hide_title=false&card_width=300px&hide_rank=true&line_height=34&hide=issues&custom_title=My%20GitHub%20Stats&hide_border=true" alt="">
              <img src="https://github-readme-stats-blond-six-73.vercel.app/api/top-langs/?username=ZachLTech&line_height=28&card_width=100px&exclude_repo=PhysicalSizeOfTheInternetSite&hide=roff,html,css&layout=donut&theme=dark&hide_border=true" alt="">
            </div>
          </div>
          <div id="vertlong" class="w-full h-full py-8 col-span-2 row-span-8 flex flex-col justify-between items-center font-bold text-5xl bg-gradient-to-bl from-[#171717] via-[#101010] to-black rounded-3xl  shadow-lg">
            <div class="flex flex-col gap-2 overflow-hidden before:absolute before:z-50 before:w-24 before:h-44 before:-translate-y-1 before:bg-gradient-to-r before:from-black after:absolute after:right-[100px] after:z-50 after:w-24 after:h-44 after:-translate-y-1 after:bg-gradient-to-l after:from-black">
              <iconCycle :direction="`left`" :icons="['arduino3D.png', 'cpp3D.png', 'css3D.png', 'docker3D.png', 'git3D.png', 'go3D.png', 'html3D.png', 'javascript3D.png', 'node3D.png']" />
              <iconCycle :direction="`right`" :icons="['npm3D.png', 'python3D.png', 'raspberrypi3D.png', 'rust3D.png', 'tailwind3D.png', 'typescript3D.png', 'vsc3D.png', 'vue3D.png']" />
            </div>
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