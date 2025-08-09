export default function Career() {
  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-300 neon-text">Career & Education</h1>

        {/* Professional Experience */}
        <div className="cyber-card p-8 mb-12">
          <h2 className="text-2xl font-bold mb-8 text-yellow-300">Professional Experience</h2>
          <div className="space-y-8">
            {/* Shanghai Commercial Bank Experience */}
            <div className="border-l-4 border-cyan-400 pl-6">
              <h3 className="text-xl font-semibold text-yellow-300">Senior Programmer</h3>
              <p className="text-yellow-300 mt-2">Shanghai Commercial Bank | Apr 2023 - Present</p>
              <p className="text-cyan-400 mt-1">Team Size Around 20+</p>
              <ul className="mt-4 space-y-3 text-yellow-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Core Banking System Revamp:</strong> Migration of a legacy AS400 platform to a modern Spring Boot based system using Java 11, Spring Boot, Vue, MyBatis, and a DB2 database.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>CI/CD Pipeline Implementation:</strong> Successfully implemented GitLab CI/CD pipelines and configured JBoss application server for DevOps, streamlining development and deployment processes.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Batch Program Development and Maintenance:</strong> Developed and maintained batch programs for critical modules including Loans, CASA (Current Account and Savings Account), Forex, Bills, and Time Deposit. These programs were integral to the banking system's functionality.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Reporting and Transparency Enhancement:</strong> Created comprehensive statements and reports using Jasper Reports, which improved transparency and facilitated better decision-making processes for users.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>System Integration:</strong> Experienced in integrating with other systems using RESTful API and interfaces (binary files for Mainframe), ensuring seamless data exchange and system interoperability.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Requirements and Communication:</strong> Participated in daily (team), weekly (users), and monthly (high-level) meetings with different parties to collect reviews and requirements.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Documentation and Planning:</strong> Prepared detailed documents for launch plans, program specifications, and user guides to ensure smooth project execution and user adoption.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Code Quality Assurance:</strong> Conducted rigorous code reviews and audits using tools like SonarQube, IntelliJ code analysis, and third-party AI tools to maintain high code quality.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Comprehensive System Assessment:</strong> Executed a broad spectrum of evaluations, including automated unit testing with OpenText, load testing, and security audit to ensure maximum system reliability and performance.
                  </span>
                </li>
              </ul>
            </div>

            {/* DXC Technology Experience */}
            <div className="border-l-4 border-cyan-400 pl-6">
              <h3 className="text-xl font-semibold text-yellow-300">Svc Info Developer</h3>
              <p className="text-yellow-300 mt-2">DXC Technology | Jun 2022 - Apr 2023</p>
              <p className="text-cyan-400 mt-1">Programmer for 2 Government projects in Transport Department</p>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-yellow-300">Project 1: Valid 5 - Core System of Transport Department (GOV) (70%)</h4>
                <p className="text-cyan-400 mt-1">Team Size: 20+ (Team Size of 3 for the TDOP module)</p>
                <ul className="mt-4 space-y-3 text-yellow-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>Framework Development:</strong> Worked on an in-house J2EE framework based on Struts, WebLogic, EJB, Oracle SQL, and Crystal Reports.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>Module Development:</strong> Developed a new module, TDOP (Taxi Deduction Point System), enhancing system functionality.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>Testing & Collaboration:</strong> Conducted User Acceptance Testing (UAT) for a new module in collaboration with 7 third-party stakeholders (Different teams and Departments in government, mainly police force and Judiciary).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>Onsite Support:</strong> Provided onsite support to West Kowloon Government Offices.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>Testing:</strong> Conducted various tests including unit test, SIT, UAT, and load tests.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="text-lg font-semibold text-yellow-300">Project 2: DCVRS - Diesel Commercial Vehicles Incentive-Cum-Regulatory System (30%)</h4>
                <p className="text-cyan-400 mt-1">Team Size: 2</p>
                <ul className="mt-4 space-y-3 text-yellow-300">
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>System Maintenance:</strong> Utilized C#, .NET, and MS SQL Server to provide maintenance, enhancements, regular patching, and on-call onsite production support.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>Infrastructure Upgrade:</strong> Coordinated with the infrastructure team to plan and execute a staged upgrade process, adhering to Microsoft's recommended path (2008 R2 to 2019).
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>Disaster Recovery:</strong> Reviewed, updated and practiced the disaster plan with frontline users.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>User Support:</strong> Provided onsite support to Admiralty Offices for User training and on-prem rack support.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>Documentation & Training:</strong> Wrote user manuals and provided user training.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2">•</span>
                    <span>
                      <strong>Reporting Enhancement:</strong> Enhanced SQL Server Reporting Services (SSRS) functionality as ActiveX controls were phased out.
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* FromDB Limited Experience */}
            <div className="border-l-4 border-cyan-400 pl-6">
              <h3 className="text-xl font-semibold text-yellow-300">Web Developer</h3>
              <p className="text-yellow-300 mt-2">FromDB Limited | June 2021 - Oct 2021</p>
              <p className="text-cyan-400 mt-1">Summer Internship Program | Team Size: 3 (Start-up)</p>
              <ul className="mt-4 space-y-3 text-yellow-300">
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Full-Stack Development:</strong> Full-stack developer proficient in Node.js, React.js, Next.js, MongoDB, specializing in building Minimum Viable Product (MVP) single-page applications (SPAs) for events.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Client Projects:</strong> Developed efficient, scalable solutions for high-profile clients, including Well-known companies in Hong Kong.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Internal Tools Development:</strong> Developed internal tools for an insurance company to automate salary calculations, leveraging modern web technologies.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Process Optimization:</strong> Built efficient solutions to support HR operations, improving payroll accuracy and processing speed.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Project Management:</strong> Managed projects from collecting user requirements to design and development.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-cyan-400 mr-2">•</span>
                  <span>
                    <strong>Cloud Deployment:</strong> Deployment using AWS Cloud services (Lambda, Lightsail, S3) and Docker.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Background */}
        <div className="cyber-card p-8">
          <h2 className="text-2xl font-bold mb-8 text-yellow-300">Education</h2>
          <div className="border-l-4 border-cyan-400 pl-6">
            <h3 className="text-xl font-semibold text-yellow-300">Bachelor of Computer Science</h3>
            <p className="text-yellow-300 mt-2">Hong Kong Baptist University | 2018 - 2022</p>
            <ul className="mt-4 space-y-3 text-yellow-300">
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>
                  <strong>Core Studies:</strong> Computer Science fundamentals, Software Engineering, Database Systems, Web Development, Cyber Security, and Artificial Intelligence
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>
                  <strong>Technical Skills:</strong> Programming languages (Java, Python, C++, Node.js), Data Structures, Algorithms, and System Design
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-cyan-400 mr-2">•</span>
                <span>
                  <strong>Projects:</strong> Developed various academic projects including web applications, database systems, and software solutions
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
} 