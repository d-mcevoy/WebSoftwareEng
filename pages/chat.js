import { Grid, Card, Text, Textarea, Spacer, Input } from "@nextui-org/react";
import Link from 'next/link'
import { Table, Button } from '@nextui-org/react';
import { useRouter } from 'next/router'


export default function chat(data) {


    console.log(data)
    //console.log(Object.keys(data));
    
    const router = useRouter()

    
    async function handleSubmit(event) {

        event.preventDefault();

        // Get data from the form
        const data = {
            username: event.target.username.value,
            comment: event.target.comment.value
        }

        // Send the data to the server in JSON format
        const JSONdata = JSON.stringify(data)

        //alert(JSONdata);

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

          // Send the form data to our forms API on Vercel and get a response.
          const response = await fetch(endpoint, options)

          // Get the response data from the server as JSON
          // If server returns the name submitted, that means the form works
          //const result = await response.json()
         // alert("response from server"+result);

        

    }


    return(
        <>
        
        <Card>
            <Card.Body>
            <Table>
            <Table.Header>
                <Table.Column>Username</Table.Column>
                <Table.Column>Comment</Table.Column>                   
                </Table.Header>
                <Table.Body>

                    {data.data.map((item) => {
                        return (
                            <Table.Row key={item.id}>
                                <Table.Cell> {item.username}</Table.Cell>
                                <Table.Cell> {item.comment}</Table.Cell>
                            </Table.Row>
                         );
                    })}
                </Table.Body>


        </Table>    

                

                <form onSubmit={handleSubmit}>
                    Username:
                    <Input id="username" palceholder="" lablePlaceholder="" width="300px" initialValue="" />
                    <Spacer y={1.6}/>

                    Comment:
                    <Input id="comment" palceholder="" lablePlaceholder="" width="300px" initialValue="" />
                    <Spacer y={1.6}/>

                    <Button type="submit" size="xs" width="300px">Send</Button>
                </form>
            </Card.Body>
        </Card>
        
        
        
        
        
        
        </>
    )
}

export async function getServerSideProps() {

    console.log('CHAT PAGE: getServerSideProps()');

    const res = await fetch(`http://localhost:3000/api/getChat`)
    const data = await res.json()
    
    return { props: { data } }

  }

