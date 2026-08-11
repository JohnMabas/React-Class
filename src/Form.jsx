
function Form ({submit}){

   

    return(
        <form action="" onSubmit={submit} className="pt-5 pl-5">
            <input  type="text" placeholder="Input your name" className="border p-2 rounded-lg" /> <br />
            <input type="submit" className="border p-1 rounded-2xl text-sm bg-gray-200 mt-2 text-black" /> 
            
        </form>
    )
}

export default Form;