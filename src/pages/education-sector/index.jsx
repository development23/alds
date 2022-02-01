
import Sidebar from "components/sidebar";
import Image from "next/image";
import styles from "./styles.module.css";


export default function Eductionsector() { 
  return (
    <div>
      <div
        className={` ${styles.mts} flex flex-wrap  fixed z-0 overflow-hidden `}
      >
        <div className="w-full pt-6 pl-8 pr-6 overflow-hidden   xl:w-1/5">
          <Sidebar />
        </div>

        <div className={`  ${styles.btp} w-full overflow-hidden    xl:w-4/5 `}>
          <Image
            src={require("@/assets/images/banner/education-sector.jpg")}
            alt="Aladinn Tech"
          />
        </div>
      </div>

      <div className={` ${styles.mtsin} relative bg-white `}>
      <div
          className={`md:px-28 mt-20  md:mt-0 md:pt-10 md:pb-20 ${styles.bggrayimg}`}
        >
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2  overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> Our Solutions</h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-14  md:w-3/5 `}>
            <h6 className="text-gray-900 text-2xl font-extrabold mb-4"> E-Learning Solutions</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            We develop education web portals with a high level of functionality and interactivity to bridge the learning gap between students and institutions.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/online-registration.png")}
                  alt="online registration"
                />
                <p className="font-bold text-sm mt-4 mb-4">Online self-registration</p>
              </article>
            </li>            
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/curriculums-offered-online.png")}
                  alt="support for accreditation"
                />
            <p className="font-bold text-sm mt-4 mb-4">Curriculums offered online</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/reports-customization.png")}
                  alt="support for accreditation"
                />
            <p className="font-bold text-sm mt-4 mb-4">Reports With Customization</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/integration.png")}
                  alt="support for accreditation"
                />
                <p className="font-bold text-sm mt-4 mb-4">Marketing and Brand Integration</p>
              </article>
            </li>            
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/support-accreditation.png")}
                  alt="support for accreditation"
                />
            <p className="font-bold text-sm mt-4 mb-4">Support for Accreditation</p>
            </article>
            </li>
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>
          <div className="flex flex-wrap items-center overflow-hidden md:py-10">
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
            <div className={`w-full overflow-hidden py-6 px-2 md:px-14  md:w-3/5 `}>
            <h6 className="text-gray-900 text-2xl font-extrabold mb-4"> Websites for remote e-learning</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Online learning websites allow you to access live streaming and live chats to enhance your learning experience.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/enrolment.png")}
                  alt="enrolment"
                />
                <p className="font-bold text-sm mt-4 mb-4">Admissions / enrolment in courses online</p>
              </article>
            </li>            
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/analysis.png")}
                  alt="Analysis and reporting of data"
                />
            <p className="font-bold text-sm mt-4 mb-4">Analysis and reporting of data</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/live-feedback.png")}
                  alt="live-feedback"
                />
            <p className="font-bold text-sm mt-4 mb-4">Management of assessment results and live feedback.</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/student-information.png")}
                  alt="Managing student information"
                />
                <p className="font-bold text-sm mt-4 mb-4">Managing student information</p>
              </article>
            </li>            
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/quality-content.png")}
                  alt="High-Quality Content"
                />
            <p className="font-bold text-sm mt-4 mb-4">High-Quality Content</p>
            </article>
            </li>          
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md border-black">
            <article className="px-4 py-4 md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/users-integrated.png")}
                  alt="Users can be integrated quickly"
                />
            <p className="font-bold text-sm mt-4 mb-4">Users can be integrated quickly</p>
            </article>
            </li>
            </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden py-6 px-2 md:px-14  md:w-3/5 `}>
            <h6 className="text-gray-900 text-2xl font-extrabold mb-4">Management software for institutions</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            With a single admin panel, we can help you manage attendance, courses, staff and payrolls all in one place.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/customized-requirements.png")}
                  alt="online registration"
                />
                <p className="font-bold text-sm mt-4 mb-4">Customized according to requirements</p>
              </article>
            </li>            
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4  md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/software-supports.png")}
                  alt="support for accreditation"
                />
            <p className="font-bold text-sm mt-4 mb-4">Software that supports multiple languages</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4  md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/attendance-tracker.png")}
                  alt="support for accreditation"
                />
            <p className="font-bold text-sm mt-4 mb-4">Attendance tracker</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4  md:h-[190px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/online-omr.png")}
                  alt="support for accreditation"
                />
                <p className="font-bold text-sm mt-4 mb-4">Connected to Addmen OMR</p>
              </article>
            </li>            
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4  md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/class-timetables.png")}
                  alt="support for accreditation"
                />
            <p className="font-bold text-sm mt-4 mb-4">Upload class timetables and agenda</p>
            </article>
            </li>          
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4  md:h-[190px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/materials-uploaded.png")}
                  alt="support for accreditation"
                />
            <p className="font-bold text-sm mt-4 mb-4">Detailed course materials uploaded</p>
            </article>
            </li>
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>
          <div className="flex flex-wrap items-center overflow-hidden md:py-10">
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
            <div className={`w-full overflow-hidden py-6 px-2 md:px-14  md:w-3/5 `}>
            <h6 className="text-gray-900 text-2xl font-extrabold mb-4">Portals and Web applications</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            Our web portal/application development services are highly customised and include many features.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 md:h-[210px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/live-feedback.png")}
                  alt="Managing assessments and providing live feedback"
                />
                <p className="font-bold text-sm mt-4 mb-4">Managing assessments and providing live feedback</p>
              </article>
            </li>            
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[210px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/student-information.png")}
                  alt="Managing student information"
                />
            <p className="font-bold text-sm mt-4 mb-4">Managing student information</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[210px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/app-development.png")}
                  alt="Making learning more mobile and using apps"
                />
            <p className="font-bold text-sm mt-4 mb-4">Making learning more mobile and using apps</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 md:h-[210px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/online-communities.png")}
                  alt="Social engagement through online communities"
                />
                <p className="font-bold text-sm mt-4 mb-4">Social engagement through online communities</p>
              </article>
            </li>           
            </ul>
            </div>
          </div>
          <div className="flex flex-wrap items-center md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden py-6 px-2 md:px-14  md:w-3/5 `}>
            <h6 className="text-gray-900 text-2xl font-extrabold mb-4">Exam Portal Online</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            You can easily maintain and conduct online examinations with built-in security and advanced features.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 md:h-[210px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/schedule.png")}
                  alt="Scheduling and planning are automated."
                />
                <p className="font-bold text-sm mt-4 mb-4">Scheduling and planning are automated</p>
              </article>
            </li>            
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[210px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/assessment-pattern.png")}
                  alt="Designing the Assessment Pattern."
                />
            <p className="font-bold text-sm mt-4 mb-4">Designing the Assessment Pattern</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[210px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/online-exam-paper.png")}
                  alt="Efficiency to create examination paper"
                />
            <p className="font-bold text-sm mt-4 mb-4">Efficiency to create examination paper</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 md:h-[210px] min-h-full">
              <Image
                  src={require("@/assets/images/icons/exam.png")}
                  alt="Create different difficulty levels for exams"
                />
                <p className="font-bold text-sm mt-4 mb-4">Create different difficulty levels for exams</p>
              </article>
            </li>            
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[210px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/test-taking-process.png")}
                  alt="Options for customizing the test-taking process"
                />
            <p className="font-bold text-sm mt-4 mb-4">Options for customizing the test-taking process</p>
            </article>
            </li>          
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 md:h-[210px] min-h-full">
            <Image
                  src={require("@/assets/images/icons/management-system.png")}
                  alt="Integration with Learning Management System"
                />
            <p className="font-bold text-sm mt-4 mb-4">Integration with Learning Management System</p>
            </article>
            </li>
            </ul>
            </div>
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
          </div>
          <div className="flex flex-wrap items-center overflow-hidden md:py-10">
            <div className="w-full overflow-hidden text-center md:w-2/5">
                <Image
                  src={require("@/assets/images/about/our-solution.png")}
                  alt="Aladinn Tech"
                />
            </div>
            <div className={`w-full overflow-hidden py-6 px-2 md:px-14  md:w-3/5 `}>
            <h6 className="text-gray-900 text-2xl font-extrabold mb-4">Content Management Solutions</h6>
            <p className="text-gray-600 text-md mb-4 mt-4"> 
            We provide comprehensive content management and study material management services.
            </p>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/documentation.png")}
                  alt="Documentation and archiving"
                />
                <p className="font-bold text-sm mt-4 mb-4">Documentation and archiving</p>
              </article>
            </li>            
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/music-folder.png")}
                  alt="A backup of audio files"
                />
            <p className="font-bold text-sm mt-4 mb-4">A backup of audio files</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
            <article className="px-4 py-4 h-44 min-h-full">
            <Image
                  src={require("@/assets/images/icons/live-presentation.png")}
                  alt="Archived live presentations"
                />
            <p className="font-bold text-sm mt-4 mb-4">Archived live presentations</p>
            </article>
            </li>
            <li className="w-full overflow-hidden md:w-44 bg-white rounded-xl mx-1 mb-4 text-center shadow-md">
              <article className="px-4 py-4 h-44 min-h-full">
              <Image
                  src={require("@/assets/images/icons/cross-platform.png")}
                  alt="Cross-platform compatibility"
                />
                <p className="font-bold text-sm mt-4 mb-4">Cross-platform compatibility</p>
              </article>
            </li>           
            </ul>
            </div>
          </div>
        </div>
        <div
          className={`md:px-28 mt-20  md:mt-0 md:pt-10 md:pb-20 ${styles.bggray}`}
        >
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2  overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> Challenges</h2>
              <p className="text-gray-600 text-base">
              Online learning has minimized barriers, both for learners and for trainers, by allowing them to learn by themselves or with an instructor remotely. Students can take the course on their own time, place, and device and learn at their own pace. Nevertheless, there are some challenging obstacles that must be met thoroughly with feasible solutions- and we specialise in offering assistance in this regard.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap md:py-10 overflow-hidden ">            
            <div className={`w-full overflow-hidden px-2 md:px-4  md:w-1/2`}>
            <ul className="flex flex-wrap items-center overflow-hidden ">
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-20 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-50 ">
                 <Image
                  src={require("@/assets/images/icons/troubleshooting.png")}
                  alt="online registration"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2">Troubleshooting</h4>  
                <h5 className="text-gray-600 text-sm">Websites and applications for e-learning are often underequipped with technical components, which results in disconnections between them that disrupt the learning experience and also break the concentration of students.</h5>
                </figcaption> 
              </article>
            </li> 
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto">
                <figure className="w-20 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-50 ">
                  <Image
                    src={require("@/assets/images/icons/switch.png")}
                    alt="online registration"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2">Peer Learning</h4>  
                  <h5 className="text-gray-600 text-sm">A well-developed mind is the result of group learning and peer interaction. e-learning does not offer ways for students to debate and expand their knowledge as it isolates them from a group.</h5>
                  </figcaption> 
                </article>
              </li>  
            <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-20 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-50 ">
                 <Image
                  src={require("@/assets/images/icons/revenue.png")}
                  alt="online registration"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2">Creating Revenues</h4>  
                <h5 className="text-gray-600 text-sm">As e-Learning has difficulty generating revenue, this makes it impossible for them to survive; traditional learning methods are difficult to eradicate, so most e-learning platforms offer their services for free.</h5>
                </figcaption> 
              </article>
            </li>          
                    
            </ul>
            </div>
            <div className={`w-full overflow-hidden px-2 md:px-4  md:w-1/2`}>
            <ul className="flex flex-wrap items-center overflow-hidden ">
              <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto">
                <figure className="w-20 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-50 ">
                  <Image
                    src={require("@/assets/images/icons/adaptation.png")}
                    alt="online registration"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2">Challenges in Adaptability</h4>  
                  <h5 className="text-gray-600 text-sm">Students may find it difficult to make the transition from traditional classrooms with instructor-led instruction to virtual, desktop or mobile learning. This is not as seamless and connected as attending real-time classes.</h5>
                  </figcaption> 
                </article>
              </li> 
              
              <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
              <article className="flex px-6 py-6 h-auto ">
              <figure className="w-20 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-50 ">
                 <Image
                  src={require("@/assets/images/icons/feedback.png")}
                  alt="online registration"
                />
                </figure> 
                <figcaption className="w-full">                
                <h4 className="font-bold text-lg mb-2">Providing feedback</h4>  
                <h5 className="text-gray-600 text-sm">Physical teaching in a regular class involves teaching various open-ended questions to the students in the classroom, clearing their doubts and queries as they come-up.</h5>
                </figcaption> 
              </article>
            </li> 
              <li className="w-full overflow-hidden md:w-full bg-white rounded-xl mx-1 mb-6 hover:shadow-md">
                <article className="flex px-6 py-6 h-auto">
                <figure className="w-20 h-20 px-6 py-6 mr-4 rounded-xl bg-slate-50 ">
                  <Image
                    src={require("@/assets/images/icons/confidentiality.png")}
                    alt="online registration"
                  />
                  </figure> 
                  <figcaption className="w-full">               
                  <h4 className="font-bold text-lg mb-2">Maintaining confidentiality</h4>  
                  <h5 className="text-gray-600 text-sm">It is possible for a student to have trouble interacting openly in class about his problems. Teachers and students can interact one-on-one with the help of advanced eLearning methods. </h5><br></br>
                  </figcaption> 
                </article>
              </li>
            </ul>
            </div>
          </div>  
        </div>
        <div
          className={`md:px-28 mt-20  md:mt-0 md:pt-10 md:pb-20 ${styles.bggrayimg}`}
        >
          <div className={`container mx-auto flex flex-wrap overflow-hidden`}>
            <div className="w-full text-center pl-2  overflow-hidden">
              <Image
                src={require("@/assets/images/bg/pat1.png")}
                alt="Aladinn Tech"
              />
              <h2> What Value We Deliver</h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center overflow-hidden ">
            <div className="w-full overflow-hidden md:w-2/5">
              <div className={` ${styles.counter} `}>
                <Image
                  src={require("@/assets/images/about/differentiates.png")}
                  alt="Aladinn Tech"
                />
              </div>
            </div>
            <div className={`w-full overflow-hidden md:py-0 py-4 px-2 md:px-14  md:w-3/5 `}>
              <ul>
                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>1</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>Better Engagement with Interactive Solutions</h5>
                    <p>
                    With our interactive solutions, we are able to increase engagement significantly. In order to make eLearning apps highly engaging and visually appealing, we use attractive graphics and material.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>2</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>Learning Through Collaboration</h5>
                    <p>
                    Students are provided with a collaborative learning experience using advanced tools & technologies. A common platform enables faculty and students to communicate and interact.
                    </p>
                  </div>
                </li>

                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>3</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>
                    Learning Through Practical Experience
                    </h5>
                    <p>
                    It is no secret that video based and game based training are the future. By utilizing these media, applications are better engaged, more interactive, and perform better.
                    </p>
                  </div>
                </li>
                <li className="flex flex-wrap overflow-hidden ">
                  <div className={` ${styles.count} `}>
                    <span>4</span>
                  </div>
                  <div className={` ${styles.text} `}>
                    <h5 className={` ${styles.title} `}>
                    User Friendliness
                    </h5>
                    <p>
                    We provide easy-to-use solutions both for students and institutes. Using our management software is easy, and you can see an overview of your institute&#39; activities at any given moment.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>                     
      </div>
    </div>
  );
}
