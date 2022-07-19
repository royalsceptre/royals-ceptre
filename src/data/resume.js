import React from "react";

const resumeWorkHistory = [
  {
    title: "Freelance Web Development & Lead Developer, 2016-Present",
    description:
      "Full-stack development, DevOps, specializing in React and Node based websites."
  },
  {
    title: "Freelance Programmer & Computer Technician, 2011-2018",
    description:
      "Custom programming (Windows software), static websites, computer repair, and technical support."
  }
];

const resumeWebProjects = [
  {
    title: "Next.js Express MongDB DNN Slick",
    link: {
      label: "www.aufin.biz",
      href: "https://aufin.biz/"
    },
    description:
      "An open source React and MongoDB based finance system. Similar to Magento, OpenCart, etc. (React, DNN, Express, MongoDB)"
  },
  {
    title: "REACT-NFT-SMART CONTRACT",
    link: {
      label: "exoworlds.io",
      href: "https://exoworlds.io/"
    },
    description:
      "This project is working on Ethereum blockchain network.(React Component | Solidity | Web3 | IPFS | Python)"
  },
  {
    title: "React Input Position",
    link: {
      label: "www.delysium.com",
      href: "https://www.delysium.com/"
    },
    description:
      "This project is weapon nft market place on Blockchain Network. (Vue.js | Rust(Axum) | Web3 | PostgreSQL)"
  },
  {
    title: "Only Music Folders Online Store",
    link: {
      label: "www.onlymusicfolders.com",
      href: "https://www.onlymusicfolders.com"
    },
    description:
      "Installed, configured, and customized OpenCart. Wrote extensions and tweaked source code to handle product option requirements, fit their workflow, and allow integration with the company's business software. (OpenCart, PHP, MYSQL)"
  },
  {
    title: "Deer River Folio Website",
    link: {
      label: "www.deerriverfolio.com",
      href: "https://www.deerriverfolio.com"
    },
    description:
      "Redesign of an old site to make it mobile friendly with improved look, user experience, and maintainability. (React & Static Rendering)"
  },
  {
    title: "Arm Chair Turing Website",
    link: {
      label: "armchair.visionexp.io",
      href: "http://armchair.visionexp.io/#/"
    },
    description:
      "Three.js Turing Website for VR test in 3D Environment. (Next.js, Three.js, Maya)"
  }
];

const resumeWindowsProjects = [
  {
    title: "Deer River Folio Business Software",
    description:
      "Business software including accounting, payroll, orders, inventory, etc. Worked closely with the company to automate everything possible and tailor the software to their desired workflow. (C#, WPF, MYSQL)"
  },
  {
    title: "Deer River Folio Time Clock Software",
    description:
      "Windows software allowing employees to clock in/out and request vacation days. (C#, WPF, MYSQL)"
  }
];

const resumeEducation = [
  {
    title: "",
    description:
      "Kharkiv National University - University of Advancing Technologies"
  }
];

const resumePersonalInfo = [
  {
    title: "Location",
    description: "Kharkiv, Ukraine"
  },
  {
    title: "E-mail",
    description: <a href="mailto:aaronchupa610@gmail.com">aaronchupa610@gmail.com</a>
  },
  {
    title: "Portfolio",
    description: <a href="https://royals-sceptre.vercel.app/">royals-sceptre.vercel.app/</a>
  },
  // {
  //   title: "LinkedIn",
  //   description: (
  //     <a href="https://www.linkedin.com/in/noah-sim-392a9a241">
  //       linkedin.com/in/noah-sim-392a9a241
  //     </a>
  //   )
  // },
  {
    title: "Github",
    description: (
      <a href="https://github.com/fulldev001">github.com/fulldev001</a>
    )
  }
];

const resumeSkills = [
  {
    title: "Front End",
    description: "Javascript, React, Next.js,Vue.js, Three.js, React Native, Flutter, Redux, HTML, CSS"
  },
  {
    title: "Back End",
    description: "Node, Express"
  },
  {
    title: "Databases",
    description: "MYSQL, MongoDB"
  },
  {
    title: "Other",
    description: "Jest, Enzyme, C#, WPF"
  }
];

const resumeTools = [
  {
    title: "Editors / IDEs",
    description: "VS Code, Visual Studio"
  },
  {
    title: "Version Control",
    description: "Git, Github"
  },
  {
    title: "Terminals",
    description: "Powershell, Bash"
  },
  {
    title: "Multimedia",
    description: "Photoshop, Illustrator, Premiere, After Effects, Maya"
  }
];

export default {
  description:
    "Full-stack Web Developer, currently specializing in React and Node based web apps with a background in windows software development. A hard worker who is always excited to learn and face new challenges.",
  mainSections: [
    {
      title: "WORK HISTORY",
      skills: resumeWorkHistory
    },
    {
      title: "WEB PROJECTS",
      skills: resumeWebProjects
    },
    {
      title: "WINDOWS PROJECTS",
      skills: resumeWindowsProjects
    }
  ],
  sideBarSections: [
    {
      title: "PERSONAL INFO",
      skills: resumePersonalInfo
    },
    {
      title: "SKILLS",
      skills: resumeSkills
    },
    {
      title: "TOOLS",
      skills: resumeTools
    },
    {
      title: "EDUCATION",
      skills: resumeEducation
    }
  ]
};
