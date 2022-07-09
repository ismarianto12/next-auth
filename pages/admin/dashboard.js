import Link from "next/link"

const Dashboard = () => {
    return (<>
        halaman Dashboard
        <hr />

        <Link href={'/'}>
            <button className="btn btn-primary">
                Log out
            </button>

        </Link>
    </>
    )
}

export default Dashboard