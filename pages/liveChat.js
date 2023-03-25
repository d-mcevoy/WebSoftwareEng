import { useRouter } from "next/router";
import { Input, Textarea, Card, Spacer, Button, NextUIProvider, Link} from "@nextui-org/react";
import { setIntervalAsync, clearIntervalAsync } from 'set-interval-async';



export default function liveChat() {

    console.log("LIVE CHAT PAGE");

    const router = useRouter()

    function goHome() {
        router.push("/adminPage");
    }


    async function handleSubmit(event) {

        event.preventDefault();

        // Get data from the form
        const data = {
            username: event.target.username.value,
            comment: event.target.comment.value
        }

        var commentBox = document.getElementById("comment");
        commentBox.textContent = "";

        // Send the data to the server in JSON format
        const JSONdata = JSON.stringify(data)

        // API endpoint where we send form data
        const endpoint = '/api/saveChat'

        // Form the request for sending data to the server
        const options = {
            // The method is POST because we are sending data.
            method: 'POST',
            // Tell the server we're sending JSON.
            headers: {
            'Content-Type': 'application/json',
            },
            // Body of the request is the JSON data we created above.
            body: JSONdata,            
        }
        const response = await fetch(endpoint, options)

        console.log("CHAT SUBMIT HANDLER");
        
    }

    async function chatLog() {

        console.log("chatLog() called")

        const endpoint = '/api/getChat';
        const response = await fetch(endpoint);
        const result = await response.json();

        let chatContent = "";

        result.forEach(element => {
            let nextMes = element.username + ': ' + element.comment + "\n";
            chatContent += nextMes;
        });

        var chatBox = document.getElementById('chatlog');
        chatBox.textContent = chatContent;
        chatBox.scrollTop = chatBox.scrollHeight;
    }

    if(typeof window !== 'undefined'){
        chatLog();        
        setInterval(() => chatLog(), 5000);
    }

    return(
        <NextUIProvider>
        
        <Card>
            <Card.Body>
            <Link href={`/adminPage`}>
                <Button 
                    size="lg"
                    type="button">
                    Home
                </Button>
            </Link>

            <Textarea
                        label="Chat Log"
                        placeholder="ChatLog"
                        id="chatlog"
                        width = '400px'
                        rows = '8'        
                    />
            <Spacer y={1.6}/>        
                
                <form onSubmit={handleSubmit}>                

                    Username:
                    <Input id="username" width="300px" initialValue="" />
                    <Spacer y={1.6}/>

                    Comment:
                    <Input id="comment" width="300px" initialValue="" />
                    <Spacer y={1.6}/>

                    <Button type="submit" size="xs" width="300px">Send</Button>
                </form>
            </Card.Body>
        </Card>
    
        </NextUIProvider>
    )

}