import { Github, Linkedin } from 'lucide-react'

const Footer = () => {
    return (
        <footer className="p-5 bg-gray-800 border-t border-gray-700 text-center">
            <div className="flex flex-col">
                <span className="text-cyan-50 font-semibold transition cursor-pointer hover:scale-90 hover:text-gray-500 duration-100">
                    Gibson Cruz - Developer
                </span>
                <span className="text-sm text-gray-500">All rights reserved</span>
            </div>
            <div className='flex justify-center mt-4 gap-3 text-cyan-50'>
                <a href='https://www.linkedin.com/in/gibson-cruz-0363181a1/' target='_blanck'><Linkedin /></a>
                <a href='https://github.com/GibsonCS' target='_blanck'><Github /></a>
            </div>
        </footer>
    )
}

export default Footer