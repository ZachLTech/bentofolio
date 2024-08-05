<template>
  <div class="w-screen breakpoint:h-screen px-2 breakpoint:px-[100px] py-[50px] flex justify-center breakpoint:items-center basically-body">
      <div class="w-full h-auto breakpoint:h-full flex flex-col breakpoint:grid breakpoint:grid-cols-7 breakpoint:grid-rows-8 gap-3 fadeIn">
          <div id="intro" class="w-full h-full px-1 breakpoint:px-0 py-4 breakpoint:py-0 col-span-3 row-span-2 breakpoint:col-span-2 breakpoint:row-span-4 flex breakpoint:flex-col justify-center items-center breakpoint:gap-8 bg-gradient-to-br from-[#171717] via-[#101010] to-black rounded-3xl shadow-lg">
            <img class="w-28 breakpoint:w-36" src="/ZachLTechCircle.png" alt="Logo">
            <div class="flex flex-col justify-center items-center gap-2 breakpoint:gap-5 px-4">
              <p class="breakpoint:text-lg text-center max-w-[400px]">
                I'm a freelance web-developer & software engineer studying CS full-time @ FAU
              </p>
              <div class="flex gap-3">
                <a href="mailto://zlopezzl2021@gmail.com" target="_blank" class="h-10 hover:scale-105 transition-all flex items-center justify-center px-4 rounded-lg bg-[#c3c3c3] text-black text-lg">Contact</a>
                <a href="https://zachl.tech" target="_blank" class="h-10 hover:scale-105 transition-all flex items-center justify-center px-4 rounded-lg border-2 border-[#c3c3c3] text-lg">Socials</a>
              </div>
              <!-- <p class="text-lg font-bold text-[#383838] bg-[#171717] px-2 rounded-lg">ssh zachl.tech</p> -->
            </div>
          </div>
          <div id="stats" class="w-full h-full col-span-3 row-span-4 breakpoint:col-span-3 breakpoint:row-span-4 flex flex-col justify-center items-center p-4 gap-5 bg-gradient-to-br from-[#171717] via-[#101010] to-black rounded-3xl  shadow-lg">
            <div id="analytics" class="w-full breakpoint:h-[30%] flex justify-center items-center breakpoint:gap-3 breakpoint:flex-wrap">
              <div class="flex flex-col gap-2 justify-center items-center">
                <h1 class="font-bold text-5xl breakpoint:text-6xl breakpoint:stat-number">&nbsp;15+</h1>
                <p class="text-2xl breakpoint:text-4xl breakpoint:stat-title">Projects</p>
              </div>
              <div class="flex flex-col gap-2 justify-center items-center">
                <h1 class="font-bold text-5xl breakpoint:text-6xl breakpoint:stat-number">&nbsp;50+</h1>
                <p class="text-2xl breakpoint:text-4xl breakpoint:stat-title">Repos</p>
              </div>
              <div class="flex flex-col gap-2 justify-center items-center">
                <h1 class="font-bold text-5xl breakpoint:text-6xl breakpoint:stat-number">&nbsp;3+</h1>
                <p class="text-2xl breakpoint:text-4xl breakpoint:stat-title">Years</p>
              </div>
              <div class="flex flex-col gap-2 justify-center items-center">
                <h1 class="font-bold text-5xl breakpoint:text-6xl breakpoint:stat-number">&nbsp;10+</h1>
                <p class="text-2xl breakpoint:text-4xl breakpoint:stat-title">Sites</p>
              </div>
            </div>
            <div id="SVGs"class="w-full h-[60%] flex justify-center fix-overflow items-center gap-3 overflow-scroll">
              <img src="https://github-readme-stats-blond-six-73.vercel.app/api?username=ZachLTech&show_icons=true&theme=dark&hide_title=false&card_width=300px&hide_rank=true&line_height=34&hide=issues&custom_title=My%20GitHub%20Stats&hide_border=true" alt="">
              <img src="https://github-readme-stats-blond-six-73.vercel.app/api/top-langs/?username=ZachLTech&line_height=28&card_width=100px&exclude_repo=PhysicalSizeOfTheInternetSite&hide=roff,html,css&layout=donut&theme=dark&hide_border=true" alt="">
            </div>
          </div>
          <div id="vertlong" class="w-full h-[750px] breakpoint:h-full breakpoint:col-span-2 breakpoint:row-span-8 flex flex-col gap-5 breakpoint:gap-0 breakpoint:justify-between items-center font-bold text-5xl bg-gradient-to-bl from-[#171717] via-[#101010] to-black rounded-3xl shadow-lg">
            <div class="flex breakpoint:max-h-[25%] flex-col gap-2 overflow-hidden rounded-t-3xl pt-3 before:hidden breakpoint:before:block before:absolute before:z-50 before:w-24 before:h-48 before:-mt-2 before:rounded-tl-[20px] before:-translate-y-1 before:bg-gradient-to-r before:from-black after:hidden breakpoint:after:block after:absolute after:right-[100px] after:z-50 after:w-24 after:h-48 after:-mt-2 after:rounded-tr-[20px] after:-translate-y-1 after:bg-gradient-to-l after:from-black">
              <h1 class="absolute text-8xl mt-6 self-center opacity-50">SKILLS</h1>
              <iconCycle :direction="`left`" :icons="['arduino3D.png', 'cpp3D.png', 'css3D.png', 'docker3D.png', 'git3D.png', 'go3D.png', 'html3D.png', 'javascript3D.png', 'node3D.png']" />
              <iconCycle :direction="`right`" :icons="['npm3D.png', 'python3D.png', 'raspberrypi3D.png', 'rust3D.png', 'tailwind3D.png', 'typescript3D.png', 'vsc3D.png', 'vue3D.png']" />
            </div>
            <div class="w-auto breakpoint:w-full max-h-[60%] breakpoint:max-h-[60%] px-2 flex flex-col items-center gap-2 overflow-y-scroll overflow-x-hidden">
              <projectCard :url="'github.com/YamanDevelopment/Devfolify'" :username="'YamanDevelopment'" :repo="'Devfolify'" />
              <projectCard :url="'github.com/YamanDevelopment/Schedulix'" :username="'YamanDevelopment'" :repo="'Schedulix'" />
              <projectCard :url="'github.com/YamanDevelopment/AEV-Software'" :username="'YamanDevelopment'" :repo="'AEV-Software'" />
              <projectCard :url="'github.com/EduquestAI/Eduquest-Qubitx'" :username="'EduquestAI'" :repo="'Eduquest-Qubitx'" />
              <projectCard :url="'github.com/ZachLTech/sshfolio'" :username="'ZachLTech'" :repo="'sshfolio'" />
              <projectCard :url="'github.com/ZachLTech/RandomMemeRestAPI'" :username="'ZachLTech'" :repo="'RandomMemeRestAPI'" />
              <projectCard :url="'github.com/ZachLTech/PhysicalSizeOfTheInternetSite'" :username="'ZachLTech'" :repo="'PhysicalSizeOfTheInternetSite'" />
              <projectCard :url="'github.com/ZachLTech/webdevcourse'" :username="'ZachLTech'" :repo="'webdevcourse'" />
              <projectCard :url="'github.com/ZachLTech/CLITimesTablesGame'" :username="'ZachLTech'" :repo="'CLITimesTablesGame'" />
              <projectCard :url="'github.com/ZachLTech/Smart-Mouse-Clicker'" :username="'ZachLTech'" :repo="'Smart-Mouse-Clicker'" />
            </div>
            <p class="flex justify-center items-center text-4xl text-[#383838] mb-4 breakpoint:mb-12">ssh zachl.tech</p>
          </div>
          <div id="horzlong" class="w-full breakpoint:h-full py-4 breakpoint:col-span-5 breakpoint:row-span-4 flex justify-around items-center bg-gradient-to-br from-[#131313] via-[#101010] to-black rounded-3xl shadow-lg">
            <div v-if="viewport.isLessThan('tablet')" class="w-[90%] flex flex-col justify-center items-center gap-3">
              <div id="resumeCard" class="w-full h-[450px] flex flex-col justify-center items-center px-8 bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                <h1 class="h-[35%] flex justify-center items-center text-4xl font-bold text-left">Résumé</h1>
                <p class="h-[40%] flex justify-center items-start text-center px-4 max-h-[40%] overflow-scroll">
                  View a nicely formatted rundown of my skills, experience and education.
                </p>
                <div class="h-[25%] flex justify-center items-start flex-wrap gap-3">
                  <a href="" class="flex items-center justify-center py-2 px-4 rounded-lg bg-[#c3c3c3] text-black text-lg">Website</a>
                  <a href="" class="flex items-center justify-center py-[6px] px-4 rounded-lg border-2 border-[#c3c3c3] text-lg">PDF</a>
                </div>
              </div>

              <div id="availabilityCard" class="w-full h-[450px] flex flex-col justify-start items-center bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                <div class="absolute w-5 h-5 mt-4 mr-5 self-end bg-gradient-to-tr from-yellow-600 to-yellow-300 rounded-full animate-pulse"></div>
                <h1 class="h-[35%] flex justify-center items-center text-4xl font-bold text-left">Availability</h1>
                <p class="h-[50%] px-4 flex justify-center items-start text-left max-h-[50%] overflow-scroll">
                  Currently I'm pretty busy with school & working on a grant supported research project so I'm not typically available during a semester but on summers I'm open to opportunities.
                </p>
              </div>

              <div id="blogCard" class="h-[450px] w-full flex flex-col justify-start items-center bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                <h1 class="h-[35%] flex justify-center items-center text-4xl font-bold text-left">Blog</h1>
                <p class="h-[40%] px-4 flex justify-center items-start text-center max-h-[40%] overflow-scroll">
                  Check out some small posts I've made on various topics regarding tech. 
                </p>
                <div class="h-[25%] flex justify-center items-start gap-3">
                  <a href="" class="flex items-center justify-center py-2 px-4 rounded-lg bg-[#c3c3c3] text-black text-lg">Coming Soon...</a>
                </div>
              </div>

              <div id="currentlyWorkingOnCard" class="h-[450px] w-full flex flex-col justify-start items-center bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                <div class="absolute w-5 h-5 mt-4 mr-5 self-end bg-gradient-to-tr from-green-600 to-green-300 rounded-full animate-pulse"></div>
                <h1 class="h-[35%] flex justify-center items-center text-3xl font-bold text-center max-w-[200px]">Currently Working On</h1>
                <p class="h-[50%] px-4 flex justify-center items-start text-left max-h-[50%] overflow-scroll">
                  Well during my fall semester I will be working on an AI related research project at FAU which I got a grant for through their OURI program alongside continuing to improve the AEV Solar Cybersedan. 
                </p>
              </div>

              <div id="techStackCard" class="h-[450px] w-full flex flex-col justify-start items-center bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                <h1 class="h-[35%] flex justify-center items-center text-4xl font-bold text-center">Tech Stack</h1>
                <p class="flex px-4 justify-center items-start text-left max-h-[50%] overflow-scroll">
                  My favorite tech stack this past year for web development has brought me pretty far in the creation process.
                  On the frontend I typically enjoy a mixture of the Nuxtjs metaframework and TailwindCSS since together, they're quite easy to build a stylish but capable full-stack app with. 
                  For the backend I like using typescript with tools like Appwrite and ExpressJS to whip up very capable features.
                  Then I almost always self host all of my projects on my rack server based infrastructure/homelab which I spent countless hours assembling (more details coming soon in blog & homelab bento :D)
                </p>
              </div>

              <div id="planToLearn" class="h-[450px] w-full flex flex-col justify-start items-center bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                <h1 class="h-[35%] flex justify-center items-center text-4xl font-bold text-center">Learning Plans</h1>
                <p class="flex px-4 justify-center items-start text-left max-h-[50%] overflow-scroll">
                  I've found myself to be a pretty quick learner especially in the field of computer science and there's still a boat load of technology I haven't been able to mess with on a lower level, especially when it comes to coding a backend from the ground up. Because of this, I plan to learn both MariaDB & MongoDB and implement them into separate projects to properly understand them. Then I'll work my way up the abstraction ladder until I reach things like DB ORMs and more complex topics. Alongside learning databases, I want to learn proper authentication & security practices as well as some other core backend concepts. Focussing on a more vague topic though, I would also like to figure out how to use and train AI properly with tools like pytorch and tensorflow... Maybe I'll do an OpenCV project for that :D
                </p>
              </div>

            </div>
            <Swiper
              v-else
              :height="300"
              :modules="[SwiperAutoplay]"
              :slides-per-view="3"
              :loop="false"
              :autoplay="{
                delay: 5000,
                disableOnInteraction: true
              }"
              class="h-full w-full rounded-xl"
              style="padding-right: 20% !important;"
            >
              <SwiperSlide id="resumeCard" class="px-2">
                <div class="w-full h-full flex flex-col justify-center items-center px-8 bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                  <h1 class="h-[35%] flex justify-center items-center text-4xl font-bold text-left">Résumé</h1>
                  <p class="h-[40%] flex justify-center items-start text-center px-4 max-w-[250px] max-h-[40%] overflow-scroll">
                    View a nicely formatted rundown of my skills, experience and education.
                  </p>
                  <div class="h-[25%] flex justify-center items-start flex-wrap gap-3">
                    <a href="" class="flex hover:scale-105 transition-all items-center justify-center py-2 px-4 rounded-lg bg-[#c3c3c3] text-black text-lg">Website</a>
                    <a href="" class="flex hover:scale-105 transition-all items-center justify-center py-[6px] px-4 rounded-lg border-2 border-[#c3c3c3] text-lg">PDF</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide id="availabilityCard" class="px-2">
                <div class="h-full w-full flex flex-col justify-start items-center bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                  <div class="absolute w-5 h-5 mt-4 mr-5 self-end bg-gradient-to-tr from-yellow-600 to-yellow-300 rounded-full animate-pulse"></div>
                  <h1 class="h-[35%] flex justify-center items-center text-4xl font-bold text-left">Availability</h1>
                  <p class="h-[50%] px-4 flex justify-center items-start text-left max-w-[250px] max-h-[50%] overflow-scroll">
                    Currently I'm pretty busy with school & working on a grant supported research project so I'm not typically available during a semester but on summers I'm open to opportunities.
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide id="blogCard" class="px-2">
                <div class="h-full w-full flex flex-col justify-start items-center bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                  <h1 class="h-[35%] flex justify-center items-center text-4xl font-bold text-left">Blog</h1>
                  <p class="h-[40%] px-4 flex justify-center items-start text-center max-w-[250px] max-h-[40%] overflow-scroll">
                    Check out some small posts I've made on various topics regarding tech. 
                  </p>
                  <div class="h-[25%] flex justify-center items-start gap-3">
                    <a href="#" class="flex hover:scale-105 transition-all items-center justify-center py-2 px-4 rounded-lg bg-[#c3c3c3] text-black text-lg">Coming Soon...</a>
                  </div>
                </div>
              </SwiperSlide>

              <SwiperSlide id="currentlyWorkingOnCard" class="px-2">
                <div class="h-full w-full flex flex-col justify-start items-center bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                  <div class="absolute w-5 h-5 mt-4 mr-5 self-end bg-gradient-to-tr from-green-600 to-green-300 rounded-full animate-pulse"></div>
                  <h1 class="h-[35%] flex justify-center items-center text-3xl font-bold text-center max-w-[200px]">Currently Working On</h1>
                  <p class="h-[50%] px-4 flex justify-center items-start text-left max-w-[250px] max-h-[50%] overflow-scroll">
                    Well during my fall semester I will be working on an AI related research project at FAU which I got a grant for through their OURI program alongside continuing to improve the AEV Solar Cybersedan. 
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide id="techStackCard" class="px-2">
                <div class="h-full w-full flex flex-col justify-start items-center bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                  <h1 class="h-[35%] flex justify-center items-center text-4xl font-bold text-center">Tech Stack</h1>
                  <p class="flex px-4 justify-center items-start text-left max-w-[250px] max-h-[50%] overflow-scroll">
                    My favorite tech stack this past year for web development has brought me pretty far in the creation process.
                    On the frontend I typically enjoy a mixture of the Nuxtjs metaframework and TailwindCSS since together, they're quite easy to build a stylish but capable full-stack app with. 
                    For the backend I like using typescript with tools like Appwrite and ExpressJS to whip up very capable features.
                    Then I almost always self host all of my projects on my rack server based infrastructure/homelab which I spent countless hours assembling (more details coming soon in blog & homelab bento :D)
                  </p>
                </div>
              </SwiperSlide>

              <SwiperSlide id="planToLearn" class="px-2">
                <div class="h-full w-full flex flex-col justify-start items-center bg-gradient-to-br from-[#101010] to-[#010101] rounded-xl">
                  <h1 class="h-[35%] flex justify-center items-center text-4xl font-bold text-center">Learning Plans</h1>
                  <p class="flex px-4 justify-center items-start text-left max-w-[250px] max-h-[50%] overflow-scroll">
                    I've found myself to be a pretty quick learner especially in the field of computer science and there's still a boat load of technology I haven't been able to mess with on a lower level, especially when it comes to coding a backend from the ground up. Because of this, I plan to learn both MariaDB & MongoDB and implement them into separate projects to properly understand them. Then I'll work my way up the abstraction ladder until I reach things like DB ORMs and more complex topics. Alongside learning databases, I want to learn proper authentication & security practices as well as some other core backend concepts. Focussing on a more vague topic though, I would also like to figure out how to use and train AI properly with tools like pytorch and tensorflow... Maybe I'll do an OpenCV project for that :D
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
      </div>
  </div>
</template>

<script setup lang="ts">
  const viewport = useViewport()
</script>