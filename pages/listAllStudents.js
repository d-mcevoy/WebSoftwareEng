import { Grid, Card, Text } from "@nextui-org/react";
import Link from 'next/link'
import { Table, Button } from '@nextui-org/react';
import { useRouter } from 'next/router'


export default function listAllCourses({data}) {


    const router = useRouter()

    console.log('LIST ALL STUDENTS PAGE');

    function goHome() {
        console.log("LIST ALL STUDENTS PAGE: goHome()");
        router.push("/adminPage");
    }
    function addStudent() {
        console.log("LIST ALL STUDENTS PAGE: addStudent()");
        router.push("/addStudent");
    }
    

    return (
        
        <>

        <Button 
            size="lg"
            type="button" 
            onClick={(save) => goHome()}>
            Home
        </Button>

        <Button 
            size="lg"
            type="button" 
            onClick={(save) => addStudent()}>
            Add New Student
        </Button>

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
            <Table.Column>First Name</Table.Column>
            <Table.Column>Surname</Table.Column>
            <Table.Column>Email</Table.Column>
            <Table.Column>Address</Table.Column>
            <Table.Column>Telephone</Table.Column>
            <Table.Column>Course ID</Table.Column>
            <Table.Column>Option</Table.Column>
          </Table.Header>
          <Table.Body>
    
          {data.map((item) => {
            return (
              <Table.Row key={item.id}>
                <Table.Cell> {item.id}</Table.Cell>
                <Table.Cell> {item.firstname}</Table.Cell>
                <Table.Cell> {item.lastname}</Table.Cell>
                <Table.Cell> {item.email}</Table.Cell>
                <Table.Cell> {item.address}</Table.Cell>
                <Table.Cell> {item.telephone}</Table.Cell>
                <Table.Cell> {item.enrolledin}</Table.Cell>
                <Table.Cell>
                <Button 
                    size="xl"
                    type="button" 
                    onClick={(save) => deleteStudent(item.id)}>
                    Delete Student
                </Button>

                </Table.Cell>
              </Table.Row>
            );
          })}
     </Table.Body>
        </Table>
        </>
      );

      async function deleteStudent(sid) {

        console.log("LIST ALL STUDENTS PAGE: deleteStudent()");

                
        const data = { sid: sid }
       
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
        
        // API endpoint where we send form data.
        const endpoint = '/api/removeStudent'
    
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
  
        if(result == "ok"){
            alert("ok");
            router.push("/listAllStudents");
          }
    }

    
}

export async function getServerSideProps() {

    console.log('LIST ALL STUDENTS PAGE: getServerSideProps()');

    const res = await fetch(`http://localhost:3000/api/listStudents`)
    const data = await res.json()
    
    return { props: { data } }

  }


