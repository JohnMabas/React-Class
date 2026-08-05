function Dashboard(){
    const user = {
        name: "Ziggy",
        age: 12,
        maritalStatus: 'married'
    }

    return(
        <>
        <nav>
            <ul>
                <li>
                    name: {user.name}
                </li>
                <li>
                    age: {user.age}
                </li>
                <li>
                    maritalStatus: {user.maritalStatus}
                </li>
            </ul>
        </nav>
        </>
    )
}

export default Dashboard