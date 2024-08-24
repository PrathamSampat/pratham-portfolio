import Link from "next/link"
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const social = [
    { icon: <FaGithub />, path: 'https://github.com/PrathamSampat' },
    { icon: <FaLinkedinIn />, path: 'https://www.linkedin.com/in/pratham-sampat-626791218/' },
    { icon: <FaInstagram />, path: 'https://www.instagram.com/prathamsampat/' },
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {social.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials
