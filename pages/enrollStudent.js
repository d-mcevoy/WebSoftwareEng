
import Link from 'next/link'
import { Table } from '@nextui-org/react';
import { Input, Spacer } from "@nextui-org/react";
import { useRouter } from 'next/router'
import { Button, Grid, Card, Text, NextUIProvider } from "@nextui-org/react";

export default function EnrollNew({data, data2}) {

    const router = useRouter()

    const {id} = router.query
    console.log('ENROLL STUDENT PAGE: ID = '+id);

return (
<NextUIProvider>
    
<Grid.Container gap={2} justify="center">
        
        <Grid xs={4}>

          <Card css={{ h: "$240", $$cardColor: '$colors$primary' }}>
          <Card.Body>
            <Text h6 size={15} color="white" css={{ mt: 0 }}>
              Enroll New Student
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


   

</NextUIProvider>

)

async function handleSubmit(event) {

    console.log("ENROLL STUDENT PAGE: HANDLE SUBMIT");

    event.preventDefault(); 
    
    const sid = document.querySelector('#sid').value;

    if(!sid){
      alert("A Student ID number is Required");
      return false;
    }
    if(sid.includes("DROP")||sid.includes("DROP")||sid.includes("DROP")||sid.includes("DROP")){
      alert("Input Invalid");
      return false;
    }

    const firstname = document.querySelector('#firstname').value;

    if(!firstname){
      alert("A first name is Required");
      return false;
    }
    if(firstname.includes("DROP")||firstname.includes("DROP")||firstname.includes("DROP")||firstname.includes("DROP")){
      alert("Input Invalid");
      return false;
    }

    const surname = document.querySelector('#surname').value;

    if(!surname){
      alert("A surname is Required");
      return false;
    }
    if(surname.includes("DROP")||surname.includes("DROP")||surname.includes("DROP")||surname.includes("DROP")){
      alert("Input Invalid");
      return false;
    }

    const email = document.querySelector('#email').value; 
    
    if(email.includes("DROP")||email.includes("DROP")||email.includes("DROP")||email.includes("DROP")){
      alert("Input Invalid");
      return false;
    }

    const address = document.querySelector('#address').value;

    if(address.includes("DROP")||address.includes("DROP")||address.includes("DROP")||address.includes("DROP")){
      alert("Input Invalid");
      return false;
    }

    const phone = document.querySelector('#phone').value;

    if(phone.includes("DROP")||phone.includes("DROP")||phone.includes("DROP")||phone.includes("DROP")){
      alert("Input Invalid");
      return false;
    }
    const courseID = id;

    console.log(courseID);
    console.log(id);

    router.push('/viewAll?id='+courseID);
    console.log("Stored in DB");

    const data = {
        sid: event.target.sid.value,
        fname: event.target.firstname.value,
        sname: event.target.surname.value,
        email: event.target.email.value,
        address: event.target.address.value,
        phone: event.target.phone.value,
        cid: id
        
    }
    
   

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    
    // API endpoint where we send form data.
    const endpoint = '/api/enrollNew'

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

        
     
}


}

export async function getServerSideProps(context) {
    let id = context.query.id;

    console.log("Enroll Student Server Side Props: Current id: "+id);

    const res = await fetch(`http://localhost:3000/api/getEnrolledStudents?id=`+id)
    const data = await res.json()

    
    
    return { props: { data } }

  }

  