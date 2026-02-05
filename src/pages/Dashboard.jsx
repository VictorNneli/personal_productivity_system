import "./dashboard.css";

export default function Dashboard() {
  return (
    <div className="min-h-screen flex">

      


      {/* MAIN */}
      <main className="main">

        {/* HEADER */}
        <header className="header">
          <div>
            <h2>Hello</h2>
          </div>

          <div className="header-right">
            <input placeholder="Find anything..." />
            <span className="notify-dot"></span>
          </div>
        </header>


        {/* CONTENT */}
        <section className="content">

          <div className="grid">

            {/* FOCUS */}
            <div className="card focus-card">
              <span className="tag">FOCUS MODE</span>

              <div className="focus-top">
                <div>
                  <h3> Food Market Research</h3>
                  <p>Reviewing competitor pricing strategies</p>
                </div>

                <div className="timer">
                  <h1>25<span>:</span>00</h1>
                  <small>Pomodoro Cycle 2/4</small>
                </div>
              </div>

              <div className="focus-actions">
                <button className="primary">Start Session</button>
                <button className="secondary">Pause</button>
              </div>
            </div>


            {/* TASKS */}
            <div className="card">
              <h3>Priority Tasks</h3>

              <div className="task">
                <p>Executive board presentation prep</p>
                <span className="high">HIGH</span>
              </div>

              <div className="task">
                <p>Review quarterly hiring plan</p>
                <span className="medium">MEDIUM</span>
              </div>
            </div>


            {/* PROGRESS */}
            <div className="card center">
              <h3>Daily Goal Progress</h3>
              <div className="circle">70%</div>
              <p>Completion</p>
            </div>


            {/* ACTIVITY */}
            <div className="card">
              <h3>Activity</h3>
              <ul>
                <li>Project Beta review completed</li>
                <li>Modified Weekly KPI Report</li>
                <li>Meeting with Sarah Jenkins</li>
              </ul>
            </div>

          </div>
        </section>

      </main>
    </div>
  );
}