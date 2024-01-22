// Desc: Images for the portfolio

// Experience - Buddy
import Buddy from "../assets/logos/buddy.png";

// Experience - Maze Digital
import MazeDigital from "../assets/logos/maze-digital.png";

// Education - UX Design Institute
import UXDI from "../assets/logos/uxdi.jpg";

// Education - Fireship
import Fireship from "../assets/logos/fireship.jpeg";

// Education - MCAST
import MCAST from "../assets/logos/mcast.png";

// Education - MVPA
import MVPA from "../assets/logos/mvpa.png";

// Projects
import Vectis from "../assets/logos/vectis.png";

// Icons
import { GlobeAltIcon } from "@/assets/icons/Outline";
import { LinkedInIcon } from "@/assets/icons/SocialIcons";
import {
    AWSAmplifyIcon,
    AWSIcon,
    CSSIcon,
    CSharpIcon,
    ClickUpIcon,
    FirebaseIcon,
    GitIcon,
    GraphQLIcon,
    HTMLIcon,
    JavaIcon,
    JavaScriptIcon,
    MySQLIcon,
    NextJSIcon,
    NodeJSIcon,
    PHPIcon,
    PythonIcon,
    ReactJSIcon,
    TailwindCSSIcon,
    UnityIcon,
} from "@/assets/icons/TechStackIcons";
import { format } from "date-fns";

export async function getEducation() {
    return [
        {
            institute: "UX Design Institute",
            certificate: "Professional Diploma in UX Design",
            logo: UXDI,
            links: [
                {
                    label: "UX Design Institute",
                    url: "https://www.uxdesigninstitute.com/courses/ux-design",
                    icon: GlobeAltIcon,
                },
            ],
            start: "2023",
            end: {
                label: "Present",
                dateTime: new Date().getFullYear().toString(),
            },
        },
        {
            institute: "Fireship.io",
            certificate: "NextJS Firebase Course",
            links: [
                {
                    label: "Fireship.io",
                    url: "https://fireship.io/courses/react-next-firebase/",
                    icon: GlobeAltIcon,
                },
            ],
            logo: Fireship,
            start: "2023",
            end: "2023",
            stacks: [
                {
                    title: "NextJS",
                    icon: NextJSIcon,
                },
                {
                    title: "Firebase",
                    icon: FirebaseIcon,
                },
                {
                    title: "ReactJS",
                    icon: ReactJSIcon,
                },
            ],
        },
        {
            institute: "MCAST",
            certificate: "Advanced Diploma in Software Development",
            links: [
                {
                    label: "MCAST",
                    url: "https://mcast.edu.mt/courses/it4-04-21/",
                    icon: GlobeAltIcon,
                },
            ],
            logo: MCAST,
            stacks: [
                {
                    title: "JavaScript",
                    icon: JavaScriptIcon,
                },
                {
                    title: "HTML",
                    icon: HTMLIcon,
                },
                {
                    title: "CSS",
                    icon: CSSIcon,
                },
                {
                    title: "Python",
                    icon: PythonIcon,
                },
                {
                    title: "Unity",
                    icon: UnityIcon,
                },
                {
                    title: "C#",
                    icon: CSharpIcon,
                },
                {
                    title: "Java",
                    icon: JavaIcon,
                },
                {
                    title: "MySQL",
                    icon: MySQLIcon,
                },
                {
                    title: "PHP",
                    icon: PHPIcon,
                },
            ],
            start: "2018",
            end: "2021",
        },
        {
            institute: "Malta Visual & Performing Arts",
            certificate: "Matriculation Certificate",
            logo: MVPA,
            links: [
                {
                    label: "MVPA",
                    url: "https://education.gov.mt/the-malta-visual-and-performing-arts-school/",
                    icon: GlobeAltIcon,
                },
            ],
            stacks: [
                {
                    title: "Java",
                    icon: JavaIcon,
                },
            ],
            start: "2013",
            end: "2018",
        },
    ];
}

export async function getExperience() {
    return [
        {
            name: "Buddy HR",
            role: "Full Stack Developer",
            start: "2021-11-03",
            logo: Buddy,
            end: format(new Date(), "yyyy-MM-dd"),
            current: true,
            links: [
                {
                    title: "LinkedIn",
                    icon: LinkedInIcon,
                    url: "https://www.linkedin.com/company/buddypayroll",
                },
                {
                    title: "Website",
                    icon: GlobeAltIcon,
                    url: "https://www.buddy.hr/",
                },
            ],
            stacks: [
                {
                    title: "React",
                    icon: ReactJSIcon,
                },
                {
                    title: "Node.js",
                    icon: NodeJSIcon,
                },
                {
                    title: "Amazon Web Services",
                    icon: AWSIcon,
                },
                {
                    title: "ClickUp",
                    icon: ClickUpIcon,
                },
                {
                    title: "Git",
                    icon: GitIcon,
                },
            ],
        },
        {
            name: "Maze Digital",
            role: "Junior Full Stack Developer",
            start: "2022-06-01",
            end: "2023-01-01",
            logo: MazeDigital,
            links: [
                {
                    title: "LinkedIn",
                    icon: LinkedInIcon,
                    url: "https://www.linkedin.com/company/maze-digital-integrations",
                },
                {
                    title: "Website",
                    icon: GlobeAltIcon,
                    url: "https://www.maze.digital/",
                },
            ],
            stacks: [
                {
                    title: "React",
                    icon: ReactJSIcon,
                },
                {
                    title: "Node.js",
                    icon: NodeJSIcon,
                },
                {
                    title: "Amazon Web Services",
                    icon: AWSIcon,
                },
                {
                    title: "AWS Amplify",
                    icon: AWSAmplifyIcon,
                },
                {
                    title: "GraphQL",
                    icon: GraphQLIcon,
                },
            ],
        },
    ];
}

export async function getProjects() {
    return [
        {
            name: "Personal Website",
            description: "www.elhassu.com",
            logo: GlobeAltIcon,
            start: "06/2023",
            end: {
                label: "Present",
                dateTime: new Date().getFullYear().toString(),
            },
            stacks: [
                {
                    title: "React",
                    icon: ReactJSIcon,
                },
                {
                    title: "NextJS",
                    icon: NextJSIcon,
                },
                {
                    title: "TailwindCSS",
                    icon: TailwindCSSIcon,
                },
                {
                    title: "Git",
                    icon: GitIcon,
                },
                {
                    title: "Firebase",
                    icon: FirebaseIcon,
                },
            ]
        },
        {
            name: "Vectis",
            description: "Guitarist, Songwriter, Vocalist",
            logo: Vectis,
            start: "11/2019",
            end: "02/2022",
        },
    ]
}