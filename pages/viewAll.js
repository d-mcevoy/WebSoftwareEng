
import Link from 'next/link'
import { Table } from '@nextui-org/react';
import { Input, Spacer } from "@nextui-org/react";
import { useRouter } from 'next/router'
import { Button, Grid } from "@nextui-org/react";

export default function ViewAll({data}) {

    const router = useRouter()

    const {cid} = router.query

    async function saveData(id) {

                
        let gradeValue = document.getElementById(`grade_`+id).value;   


        const data = {
            sid: id,
            grade: gradeValue,
            cid: cid
        }
       
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
        
        // API endpoint where we send form data.
        const endpoint = '/api/saveGrade'
    
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

        alert('saved')
    }





return (
<>
    

    <Table
         striped={true}
          shadow={false}
          lined
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>Student ID</Table.Column>
            <Table.Column>Grade</Table.Column>
            <Table.Column>First Name</Table.Column>
            <Table.Column>Surname</Table.Column>
            <Table.Column>Enrolled in Course</Table.Column>
          </Table.Header>
          <Table.Body>
    
          {data.map((item) => {
            return (
              <Table.Row key={item.id}>
                <Table.Cell> {item.id}</Table.Cell>
                <Table.Cell>  
                    <Input
                        clearable
                        underlined
                        labelPlaceholder={`Grade for student id: `+item.id}
                        id={`grade_`+item.id} />
                    <Button 
                        type="button" 
                        size="xs"
                        onClick={(save) => saveData(item.id)}>
                            Submit
                    </Button>
                </Table.Cell>
                <Table.Cell> {item.firstname}</Table.Cell>
                <Table.Cell> {item.lastname}</Table.Cell>
                <Table.Cell> {item.enrolledin}</Table.Cell>
              </Table.Row>
            );
          })}
     </Table.Body>
        </Table>

</>

)

}

export async function getServerSideProps(context) {
    let id = context.query.id;

    console.log("Current id: "+id);

    const res = await fetch(`http://localhost:3000/api/getEnrolledStudents?id=`+id)
    const data = await res.json()
    
    return { props: { data } }

  }