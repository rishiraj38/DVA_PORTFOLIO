export default function Sidebar(){
  return(
    <aside className="sidebar">
      <img
        src={`${import.meta.env.BASE_URL}phtoto.jpg`}
        alt="Profile"
        className="sidebar-avatar"
      />
      <h1 className="sidebar-name">Rishi Raj</h1>
      <p className="sidebar-username">rishiraj38</p>
      <p className="sidebar-bio">
        B.Tech Student in Computer Science and AI at Newton School of Technology. 
        Software Developer & Open Source Contributor at Layer5 (CNCF). 
        Passionate about building scalable AI platforms and modern web experiences.
      </p>

      <a 
        href={`${import.meta.env.BASE_URL}RishiRajResume.pdf`} 
        download 
        className="sidebar-follow-btn"
        style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
      >
        Download Resume
      </a>

      <div className="sidebar-info">
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"/>
          </svg>
          <span>India</span>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88z"/>
          </svg>
          <a href="mailto:rishiraj438gt@gmail.com">rishiraj438gt@gmail.com</a>
        </div>
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"/>
          </svg>
          <a href="https://github.com/rishiraj38" target="_blank" rel="noreferrer">github.com/rishiraj38</a>
        </div>
      </div>

      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">Skills</h3>
        <div className="sidebar-orgs-list">
          <span className="org-pill">Tableau</span>
          <span className="org-pill">PowerBI</span>
          <span className="org-pill">Seaborn</span>
          <span className="org-pill">Matplotlib</span>
          <span className="org-pill">Pandas</span>
          <span className="org-pill">NumPy</span>
          <span className="org-pill">SQL</span>
          <span className="org-pill">Excel</span>
          <span className="org-pill">Python</span>
          <span className="org-pill">Statistical Modeling</span>
          <span className="org-pill">Machine Learning</span>
          <span className="org-pill">Scenario Modeling</span>
          <span className="org-pill">KPI Tracking</span>
          <span className="org-pill">Risk Segmentation</span>
        </div>
      </div>
    </aside>
  )
}

