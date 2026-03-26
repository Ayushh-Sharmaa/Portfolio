import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class X — CBSE</h4>
                <h5>Central Board of Secondary Education</h5>
              </div>
              <h3>2022-2023</h3>
            </div>
            <p>
              Completed Class X under CBSE, building a strong academic
              foundation that sparked an interest in technology and computing.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class XII — PCM, CBSE</h4>
                <h5>Central Board of Secondary Education</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Completed Senior Secondary with Physics, Chemistry & Mathematics.
              Developed deep curiosity for AI and large-scale computing systems.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — AI & Machine Learning</h4>
                <h5>GL Bajaj Group of Institutions, Mathura</h5>
              </div>
              <h3>2025-2029</h3>
            </div>
            <p>
              Pursuing B.Tech in CSE (AI & ML). Core focus on Generative AI,
              RAG, and Google Cloud Vertex AI. Actively building communities,
              mentoring 4,000+ students, and growing the Global Society of
              Founders to 5,000+ members.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Google Cloud Arcade Facilitator</h4>
                <h5>Google Cloud Skills Boost — Cohort 2</h5>
              </div>
              <h3>Jul–Oct 2025</h3>
            </div>
            <p>
              Selected to guide 4,000+ students through cloud and AI learning
              pathways. Achieved Arcade Legend Tier. Recognised with an official
              Facilitator Certificate and Swag Rewards by Google Cloud.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder — Global Society of Founders (GSF)</h4>
                <h5>Independent · Mathura</h5>
              </div>
              <h3>Jan 2026–Present</h3>
            </div>
            <p>
              Building a global, execution-led community for student founders.
              Grew to 5,000+ members centred around AI, cloud, hackathons, and
              emerging tech. Mentor-backed and community-powered.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Organizer — NexaSphere · Campus Crew & Mantri</h4>
                <h5>GL Bajaj · HackerRank · GeeksforGeeks</h5>
              </div>
              <h3>Jan 2026–Present</h3>
            </div>
            <p>
              Organising NexaSphere's student-driven tech ecosystem at GL Bajaj.
              Simultaneously serving as HackerRank Campus Crew and GeeksforGeeks
              Campus Mantri, connecting peers with challenges and opportunities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
