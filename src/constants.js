/******************************************************************************************
 * ENVIRONMENTAL VARIABLES
 * TODO: Turn this into a flag to include when running `npm start`
 ******************************************************************************************/
export const ACTIVE_PROFILE = "fullStack";  // "frontEnd or fullStack"

/******************************************************************************************
 * CONSTANTS
 ******************************************************************************************/
export const PROFILE = Object.freeze({
    profileSummary: {
        frontEnd: `
            Experienced full stack developer able to use skill set to effectively contribute to both front and back end of microservice-driven web applications.
            Adept in creating flexible user interfaces and modular/reusable components to build responsive, performant, maintainable, and accessible web applications across multiple browsers.
            An effective asset experienced with working in Agile and collaborative environments, can self-manage when appropriate, and has experiencing managing a small team of developers.
        `,
        fullStack: `
            Experienced full stack developer able to use skill set to effectively contribute to both front and back end of microservice-driven web applications.
            Adept in creating flexible user interfaces and modular/reusable components to build responsive, performant, maintainable, and accessible web applications across multiple browsers.
            Competent with working on back-end web services that deliver meaningful content to users on the front-end.
            Proficient with a range of technologies covering fullstack, including Java, JavaScript, TypeScript, React, HTML, and CSS.
            An effective asset experienced with working in Agile and collaborative environments, can self-manage when appropriate, and has experiencing managing a small team of developers.
        `
    }
})

export const HEADER = Object.freeze({
    frontEnd: "Web Developer",
    fullStack: "Software Engineer"
});

export const SKILLS = Object.freeze({
    skillIconSize: 14,
    skillSet: [
        {
            header: "Front-end",
            skills: [
                {
                    name: "JavaScript",
                    rating: 4
                }, {
                    name: "HTML",
                    rating: 4
                }, {
                    name: "CSS",
                    rating: 4
                }, {
                    name: "React",
                    rating: 4
                }, {
                    name: "Jest",
                    rating: 2
                }, {
                    name: "AngularJS",
                    rating: 1
                }, {
                    name: "Polymer",
                    rating: 5
                }, {
                    name: "Mocha/Chai",
                    rating: 3
                }, {
                    name: "TypeScript",
                    rating: 3
                }
            ]
        }, {
            header: "Back-end",
            skills: [
                {
                    name: "Java",
                    rating: 2
                }, {
                    name: "REST(jaxrs)",
                    rating: 3
                }, {
                    name: "Junit/Mockito",
                    rating: 3
                }
            ]
        }, {
            header: "Agile Methodologies",
            skills: [
                {
                    name: "Sprint Planning",
                    rating: 3
                }, {
                    name: "Backlog Grooming",
                    rating: 3
                }, {
                    name: "Sprint Review/Retro",
                    rating: 4
                }
            ]
        }, {
            header: "Tools",
            skills: [
                {
                    name: "Jira",
                    rating: 4
                }, {
                    name: "Webpack",
                    rating: 2
                }, {
                    name: "Gulp",
                    rating: 4
                }, {
                    name: "Docker",
                    rating: 2
                }, {
                    name: "Kubernetes",
                    rating: 2
                }, {
                    name: "Tomcat",
                    rating: 1
                }
            ]
        },{
            header: "CI/CD",
            skills: [
                {
                    name: "git",
                    rating: 3
                }, {
                    name: "Jenkins",
                    rating: 2
                }
            ]
        } , {
            header: "Cloud Architecture",
            skills: [
                {
                    name: "AWS",
                    rating: 1
                }
            ]
        }, {
            header: "Operating Systems",
            skills: [
                {
                    name: "Mac",
                    rating: 4
                }, {
                    name: "Windows",
                    rating: 1
                }
            ]
        }
    ]
})

export const EMPLOYMENT_HISTORY = Object.freeze({
    employmentHistory: [
        {
            employer: "TeleTracking Technologies, Inc.",
            location: "Remote",
            duration: "Sep 2021 - Nov 2022",
            achievements: [
                "Learned basics of Python, Kubernetes configurations, AngularJS 1.x, Redux.js, and developing in Android Studio",
                "Worked on small team with low resources and high accountability, ran backlog grooming and occasional sprint planning",
                "Helped fix zero-day log4j vulnerability, working after hours to ensure issue was fixed in all environments",
                "Created custom Mongo read converter to fix mission-critical bug due to conflicting data types in production data until it could be migrated"
            ]
        }, {
            employer: "Leidos",
            location: "Morgantown, WV",
            duration: "Oct 2015 - Sep 2021",
            achievements: [
                "Mastered Google Polymer framework, became a SME for advanced problems, and fixing mission critical bugs in production environments",
                "Greatly optimized BPMN app framerate from 10-14 to ~45FPS by replacing HTML graph components with SVGs",
                "Became full-stack, working on custom REST endpoints and services executing business logic, Java microservices",
                "Learned unit testing, including coverage for both front and back ends (Mockito, Mocha, Chai), with some Jenkins automation to run them",
                "Slashed through tickets, maintaining a high velocity without compromising code quality",
                // TODO: Add something about sprint retrospectives
                // TODO: Energize statement about working with PM/PO to (at the least) plan sprints to meet deadlines and also (preferably) writing stories
                "Drove continuous team improvement through sprint retrospectives",
                "As a dev lead, ran scrum ceremonies, directly worked with stakeholders, planned sprints",
                "Greatly improved existing RBAC design for client-server application by storing data in encrypted/signed JWT, reducing microservice dependencies, impact in the event of microservice outage, and increasing performance"
            ] 
        }
    ]
})

export const EDUCATION = Object.freeze({
    education: [
        {
            institution: "Fairmont State University",
            location: "Fairmont, WV",
            duration: "Jun 2012 - May 2015",
            majorOrDegree: "Bachelor of Computer Science"
        },
        {
            institution: "West Virginia University",
            location: "Morgantown, WV",
            duration: "Aug 2009 - Jan 2012",
            majorOrDegree: "Pre-Physics/Computer Science"
        }
    ]
})