import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// Build dynamic paths server side
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    // Build paths
    const paths = data.map((ninja: any) => {
        return {
            params: {id: ninja.id.toString()}
        }
    });

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async (context: any) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + context.params.id);
    const data = await res.json();

    return {
        props: {ninja: data}
    }
}

const Details = ({ninja}: any) => {
    return (
        <React.Fragment>
            <Head>
                <title>Ninjas - {ninja.name}</title>
            </Head>

            <Link href='/ninjas' className='btn btn-warning float-end btn-sm'>Show other ninjas</Link>

            <h3 className='mb-5'>Ninja Details</h3>

            <div className="alert alert-info text-center">
                This ninja is currently working for {ninja.company.name} Company
            </div>

            <div className="row">
                <div className="col-lg-3">
                    <Image src={'https://api.lorem.space/image/face?w=500&h=500&id='+ninja.id}
                           width={500} height={500} className='img-fluid mb-5' alt={ninja.name}/>
                </div>
                <div className="col-lg-9">
                    <div className="list-group">
                        <div className="list-group-item list-group-item-action">
                            <small className="text-muted">Full Names</small>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Ninja {ninja.name}</h5>
                            </div>
                        </div>
                        <div className="list-group-item list-group-item-action">
                            <small className="text-muted">Email</small>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{ninja.email}</h5>
                            </div>
                        </div>
                        <div className="list-group-item list-group-item-action">
                            <small className="text-muted">Phone</small>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{ninja.phone}</h5>
                            </div>
                        </div>
                        <div className="list-group-item list-group-item-action">
                            <small className="text-muted">Location of service</small>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{ninja.address.suite}, {ninja.address.street}, {ninja.address.city}</h5>
                            </div>
                        </div>
                        <div className="list-group-item list-group-item-action">
                            <small className="text-muted">Website</small>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{ninja.website}</h5>
                                <Link href={'http://' + ninja.website} target='_blank' className='float-end'>
                                    Visit website
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>





        </React.Fragment>
    )
}

export default Details