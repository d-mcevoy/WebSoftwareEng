
import Link from 'next/link'
import { Table } from '@nextui-org/react';
import { Input, Spacer } from "@nextui-org/react";
import { useRouter } from 'next/router'
import { Button, Grid, Card, Text } from "@nextui-org/react";

export default function addNew(data) {

    const router = useRouter()

return (
<>
    
<Grid.Container gap={2} justify="center">
        
        <Grid xs={4}>

          <Card css={{ h: "$240", $$cardColor: '$colors$primary' }}>
          <Card.Body>
            <Text h6 size={15} color="white" css={{ mt: 0 }}>
              Add New Student
              <br></br>

              <form onSubmit={handleSubmit}>
              <Input id="sid" label="Student ID#" initialValue="" />
                <Spacer y={0.5} />

                <Input id="firstname" label="First Name" initialValue="" />
                <Spacer y={0.5} />

                <Input id="surname" label="Surname" initialValue="" />
                <Spacer y={0.5} />

                <Input id="email" label="Email" initialValue="" />
                <Spacer y={0.5} />

                <Input id="address" label="address" initialValue="" />
                <Spacer y={0.5} />

                <Input id="phone" label="phone" initialValue="" />
                <Spacer y={0.5} />

                <Input id="enrolledin" label="enrolledin" initialValue="" />
                <Spacer y={0.5} />

                <Button 
                    type="Submit" 
                    size="xs">
                        Save
                </Button>
                <Spacer y={0.5} />

                </form> 

            </Text>
          </Card.Body>
        </Card>

        </Grid>
      </Grid.Container>


   

</>

)

async function handleSubmit(event) {

    event.preventDefault(); 
    console.log("ADD STUDENT HANDLE SUBMIT")
    
    const sid = document.querySelector('#sid').value;
    const firstname = document.querySelector('#firstname').value;
    const surname = document.querySelector('#surname').value;
    const email = document.querySelector('#email').value;     
    const address = document.querySelector('#address').value;
    const phone = document.querySelector('#phone').value;
    const enrolledin = document.querySelector('#enrolledin').value;

    const data = {
        sid: event.target.sid.value,
        fname: event.target.firstname.value,
        sname: event.target.surname.value,
        email: event.target.email.value,
        address: event.target.address.value,
        phone: event.target.phone.value,
        enrolledin: event.target.enrolledin.value
        
    }
    
   

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    
    // API endpoint where we send form data.
    const endpoint = '/api/addNew'

    // Form the request for sending data to the server.
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

    // Get the response data from server as JSON.
    const result = await response.json()

    // all okay

    router.push('/listAllStudents');
     
}


}


  