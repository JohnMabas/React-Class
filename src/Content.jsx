const Content = () => {
    const hadleNameChange = () => {
        const names = ['John', 'Mabas', 'Dang']
        const int = Math.floor(Math.random() * 3);
        return names[int]
    }
    return ( 
        <main>
            <h1>Groceries List</h1>
            <p>
                Hello {hadleNameChange()}

            </p>
        </main>
     );
}
 
export default Content;