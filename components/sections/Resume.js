import Footer from "@/components/Footer";

export default function Resume() {
  return (
    <section id="resume" className="resume-section section">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div className="section-header text-center">
              <h2 className="animate text-over-block">My Resume</h2>
              <div className="divider-draft center"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="timeline-block section-block">
        <div className="container">
          <ul className="timeline">
            <li className="timeline-header"><h4>Education</h4></li>
            <li>
              <div className="timeline-desc"><h4>2008-2020</h4></div>
              <div className="timeline-content">
                <h4>Nursery - 10th Grade</h4>
                <span>Khemanand English School</span>
                <p>Completed foundational education, building a strong academic base that set the stage for future success.</p>
              </div>
            </li>
            <li className="inverse">
              <div className="timeline-desc"><h4>2021-2022</h4></div>
              <div className="timeline-content">
                <h4>11th - 12th Grade</h4>
                <span>Nagesh Junior College</span>
                <p>Pursued higher secondary education, focusing on developing advanced skills and preparing for university studies.</p>
              </div>
            </li>
            <li>
              <div className="timeline-desc"><h4>2023-2025</h4></div>
              <div className="timeline-content">
                <h4>Bachelor&apos;s Degree</h4>
                <span>Jamkhed Mahavidyalaya</span>
                <p>Earned a Bachelor&apos;s degree, specializing in Computer Applications, and laying the foundation for a career in technology.</p>
              </div>
            </li>

            <li className="timeline-header"><h4>Experience</h4></li>
            <li>
              <div className="timeline-desc"><h4>2024 - Present</h4></div>
              <div className="timeline-content">
                <h4>Personal Projects</h4>
                <span>@Self-initiated</span>
                <p>Developed multiple websites applications using the MERN stack, including an e-commerce platform and a real-time chat application. These projects honed my skills in full-stack development, problem-solving, and project management.</p>
              </div>
            </li>
            <li className="inverse">
              <div className="timeline-desc"><h4>2024 - Present</h4></div>
              <div className="timeline-content">
                <h4>Freelance Websites Development</h4>
                <span>@Freelancer</span>
                <p>Created responsive websitessites for clients, focusing on enhancing user experience and implementing modern websites design practices. This experience taught me how to collaborate with clients and deliver projects that meet their needs.</p>
              </div>
            </li>
            <li>
              <div className="timeline-desc"><h4>2023 - Present</h4></div>
              <div className="timeline-content">
                <h4>Open Source Contributor</h4>
                <span>@GitHub</span>
                <p>Actively contributed to open-source projects, gaining experience in collaborative coding, code reviews, and best practices in software development. This has allowed me to give back to the community while improving my coding skills.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Hobbies */}
      <div className="hobbies-block bg-lightgray section-block">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="animate text-over-block">My Hobbies</h2>
            <div className="divider-draft center"></div>
          </div>
          <div className="row">
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="hobby"><div className="icon"><i className="ion-ios-game-controller-b"></i></div><h4>Gaming</h4><p>Diving into virtual worlds, solving puzzles, and strategizing in multiplayer games.</p></div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="hobby"><div className="icon"><i className="ion-ios-book"></i></div><h4>Reading</h4><p>Exploring diverse genres, from tech blogs to science fiction novels.</p></div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="hobby"><div className="icon"><i className="ion-ios-chatboxes"></i></div><h4>Networking</h4><p>Connecting with like-minded individuals and engaging in tech discussions.</p></div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="hobby"><div className="icon"><i className="ion-ios-musical-notes"></i></div><h4>Music</h4><p>Listening to a mix of genres, creating the perfect coding playlist.</p></div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="hobby"><div className="icon"><i className="ion-earth"></i></div><h4>Traveling</h4><p>Exploring new places, cultures, and gaining fresh perspectives.</p></div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6">
              <div className="hobby"><div className="icon"><i className="ion-ios-football"></i></div><h4>Football</h4><p>Playing and watching the beautiful game, staying active and competitive.</p></div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}
      <div className="skills-block section-block">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="animate text-over-block">My Skills</h2>
            <div className="divider-draft center"></div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="skill">
                <h4>HTML/CSS (Tailwind,Material UI) </h4>
                <div className="skill-bar" data-percent="90"><div className="bar"><div className="percent">90%</div></div></div>
              </div>
              <div className="skill">
                <h4>JavaScript</h4>
                <div className="skill-bar" data-percent="79"><div className="bar"><div className="percent">79%</div></div></div>
              </div>
              <div className="skill">
                <h4>ReactJs</h4>
                <div className="skill-bar" data-percent="83"><div className="bar"><div className="percent">83%</div></div></div>
              </div>
              <div className="skill">
                <h4>Git and GitHub</h4>
                <div className="skill-bar" data-percent="85"><div className="bar"><div className="percent">85%</div></div></div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="skill">
                <h4>NodeJs</h4>
                <div className="skill-bar" data-percent="76"><div className="bar"><div className="percent">76%</div></div></div>
              </div>
              <div className="skill">
                <h4>ExpressJs</h4>
                <div className="skill-bar" data-percent="80"><div className="bar"><div className="percent">80%</div></div></div>
              </div>
              <div className="skill">
                <h4>MongoDb and Mongoose</h4>
                <div className="skill-bar" data-percent="74"><div className="bar"><div className="percent">74%</div></div></div>
              </div>
              <div className="skill">
                <h4>Redux</h4>
                <div className="skill-bar" data-percent="78"><div className="bar"><div className="percent">78%</div></div></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer variant="index" />
    </section>
  );
}
