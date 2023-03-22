
import Link from 'next/link'
import { Table } from '@nextui-org/react';
import { Input, Spacer } from "@nextui-org/react";
import { useRouter } from 'next/router'
import { Button, Grid, Card, Text } from "@nextui-org/react";

export default function addNew(data) {

    console.log("ADD COURSE PAGE");

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
              <Input id="title" label="Course Title" initialValue="" />
                <Spacer y={0.5} />

                <Input id="desc" label="Course Description" initialValue="" />
                <Spacer y={0.5} />

                <Input id="nfq" label="NFQ Level" initialValue="" />
                <Spacer y={0.5} />

                <Input id="courseyear" label="Length of Course (years)" initialValue="" />
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
    console.log("ADD COURSES PAGE: ADD STUDENT HANDLE SUBMIT")
    
    const title = document.querySelector('#title').value;
    const desc = document.querySelector('#desc').value;
    const nfq = document.querySelector('#nfq').value;
    const courseyear = document.querySelector('#courseyear').value;     

    const data = {
        title: event.target.title.value,
        desc: event.target.desc.value,
        nfq: event.target.nfq.value,
        courseyear: event.target.courseyear.value
        
    }
    
   

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    
    // API endpoint where we send form data.
    const endpoint = '/api/addNewCourse'

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

    router.push('/listAllCourses');
     
}


}


  