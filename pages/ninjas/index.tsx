import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

// Get list of ninjas from API
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: {ninjas: data}
    }
}

const Ninjas = ({ninjas}: any) => {
    return (
        <React.Fragment>
            <Head>
                <title>Ninjas - List of ninjas</title>
            </Head>

            <h3>Need a ninja?</h3>
            <hr/>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {ninjas.map((ninja: any) => (
                    <div className="col" key={ninja.id}>
                        <div className="card">

                            <div className="card-body">
                                <Image src={'https://api.lorem.space/image/face?w=300&h=300&id='+ninja.id}
                                       width={70} height={70} className='float-end' alt={ninja.name}/>
                                <h5 className="card-title">{ninja.name}</h5>
                                <p className="card-text">{ninja.company.catchPhrase}</p>
                                <Link href={'/ninjas/'+ninja.id} className='btn btn-outline-primary btn-sm'>
                                    Contact Ninja
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}

export default Ninjas