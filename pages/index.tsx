import React from "react"
import Link from 'next/link'
import Head from "next/head";
import landing from '../public/landing.jpg';
import Image from "next/image";

const Home = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Ninjas - Home</title>
            </Head>

            <Image src={landing} width={1500} height={1000} className="img-fluid rounded-start rounded-end mb-5"
                   alt='Welcome'/>

            <div className="text-center">
                <h1 className='mb-4'>Welcome to the Ninja Haven!</h1>
                <p className='text-xl-center'>
                    We are the No 1 Ninja hiring and provision website on the interwebs. Have a security problem? Browse
                    our database and get in touch with our reliable ninjas to catch your menace. We provide a diverse
                    range of services to our customers including:-
                    <br/>
                    <br/>

                    Harassing your jealous neighbours<br/>
                    Scaring your ex girlfriends<br/>
                    Providing VIP bodyguard services<br/>
                    Training in rudeness defensive arguing<br/>
                    Eliminating low self esteem<br/>
                </p>
                <Link href='/ninjas' className='btn btn-success btn-lg'>Contact our ninjas today!</Link>
            </div>

        </React.Fragment>
    )
}

export default Home
