import Link from 'next/link'
import Image from "next/image"

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-dark">
            <div className="container">
                <Link href='/' className="navbar-brand text-white">
                    <Image src='/ninja.png' width={25} height={25} alt='Logo'/>
                    <span className='pl-2'>&nbsp; &nbsp; Ninja Haven</span>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link href='/' className="nav-link text-white">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/about' className="nav-link text-white">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link href='/ninjas/' className="nav-link text-white">See our ninjas!</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;