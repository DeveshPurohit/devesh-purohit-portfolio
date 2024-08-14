import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { fetchExperience } from "@/utils/fetchExperience";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocials } from "@/utils/fetchSocials";
import { ToastContainer } from "react-toastify";

export default async function Home() {

  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const projects: Project[] = await fetchProjects();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();

  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen overflow-scroll z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
       <ToastContainer
    position="top-center"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
    />
      <Header socials={socials}/>
      <section id="hero">
        <Hero pageInfo={pageInfo}/>
      </section>
      <section id="about">
        <About pageInfo={pageInfo}/>
      </section>
      <section id="experience">
        <WorkExperience experiences={experience}/>
      </section>
      <section id="skills">
        <Skills skills={skills}/>
      </section>
      <section id="projects">
        <Projects projects={projects}/>
      </section>
      <section id="contact">
        <ContactMe />
      </section>
      {/* <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="w-10 rounded-full er grayscale hover:grayscale-0
cursor-pointer"
              src={"/profile.jpg"}
              alt=""
            />
          </div>
        </footer>
      </Link> */}
    </main>
  );
}
