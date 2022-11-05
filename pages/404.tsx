import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";

const NotFound = ()=>{
    const router = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            router.push('/');
        }, 5000)
    }, [])
    return (
        <div className="col-12 text-center mt-5">
            <h1>Oops!</h1>
            <h4>
                That page cannot be found
            </h4>
            <Link href='/' className='btn btn-outline-dark mt-4'>Go back home</Link>
        </div>
    )
}

export default NotFound