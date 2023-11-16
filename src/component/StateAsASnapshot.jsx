import { useState } from "react"


const StateAsASnapshot = () => {
    
    const [message, setMessage] = useState('Hi')
    const [isSent, setIsSent] = useState(false)

    const sendMessage = () => {

    }

    const handleSendClick = () => {
        setIsSent(true)
    }

    const handleOnChange = (e) => {
        e.preventDefault();
        setMessage(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSent(true);
        console.log(e.target.value);
        sendMessage(e.target.value);
    }

    if (isSent) { 
        return (
            <>
                <h1>Thanks For Sending Message</h1>
                <p><b>Message Content </b>{message}</p> 
                <button onClick={() => {
                    setIsSent(false);
                    setMessage('');
                    }}>Back To mail</button>
            </>
        )
    }



    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input type="textarea" name="message" required value={message} onChange={(e) => handleOnChange(e)}/>
                <button type="submit" onClick={handleSendClick}>Send</button>
            </form>
        </>
    )
}


export default StateAsASnapshot