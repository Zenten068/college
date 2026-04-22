import react, {useState} from 'react'

function contact(){
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [message, setmessage] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        console.log(name, email, message)
    }
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
            />
            <textarea
                placeholder="Message"
                value={message}
                onChange={(e) => setmessage(e.target.value)}
            />
            <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
             type="submit">Submit</button>
        </form>
    )
}

export default contact