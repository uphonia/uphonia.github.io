import { FaGithub, FaLinkedin} from 'react-icons/fa'
import {FiMail, FiPaperclip} from 'react-icons/fi'

export const Links = [
  {
    icon: FiPaperclip,
    link: process.env.PUBLIC_URL + '/WuAngela_Resume.pdf',
    name: 'Resume'
  },
  {
    icon: FaGithub,
    link: "https://github.com/uphonia",
    name: 'Github'
  },
  {
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/angela-wu-118075b9/",
    name: 'LinkedIn'
  },
  {
    icon: FiMail,
    link: "mailto:wu.angela96@icloud.com",
    name: 'Email Me'
  },
]
