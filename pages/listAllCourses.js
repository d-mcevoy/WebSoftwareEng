import { Grid, Card, Text } from "@nextui-org/react";
import Link from 'next/link'
import { Table, Button, NextUIProvider } from '@nextui-org/react';
import { useRouter } from 'next/router'


export default function listAllCourses({data}) {
    console.log('LIST ALL COURSES PAGE');
    const router = useRouter()

    function goHome() {
      console.log("LIST ALL COURSES PAGE: goHome()");
      router.push("/adminPage");
  }

    function addCourse() {
      console.log("LIST ALL COURSES PAGE: addCourse()");
      router.push("/addCourse");
    }

    function viewAll(id){
      router.push(`/viewAll?id=` +id);
    }

    function enrollNew(id){
      router.push(`/enrollStudent?id=`+id);
    }

    async function deleteCourse(cid) {

      console.log('LIST ALL COURSES PAGE: deleteCourse()');
  
        const data = {
            cid: cid
        }
    
       
    
        // Send the data to the server in JSON format.
        const JSONdata = JSON.stringify(data)
        
        // API endpoint where we send form data.
        const endpoint = '/api/deleteCourse'
    
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
        alert('deleted')

    }

    return (     
        
        <NextUIProvider>
        <Button 
            size="lg"
            type="button" 
            onClick={(save) => goHome()}>
            Home
        </Button>

        <Button 
            size="lg"
            type="button" 
            onClick={(save) => addCourse()}>
            Add New Course
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
          <Table.Column>Course ID</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Description</Table.Column>
            <Table.Column>NFQ</Table.Column>
            <Table.Column>Years</Table.Column>
            <Table.Column>Option</Table.Column>
            <Table.Column>Enroll New Student</Table.Column>
            <Table.Column>Delete Course</Table.Column>
          </Table.Header>
          <Table.Body>
    
          {data.map((item) => {
            return (
              <Table.Row key={item.id}>
                <Table.Cell> {item.id}</Table.Cell>
                <Table.Cell> {item.title}</Table.Cell>
                <Table.Cell> {item.desc}</Table.Cell>
                <Table.Cell> {item.nfq}</Table.Cell>
                <Table.Cell> {item.courseyear}</Table.Cell>
                <Table.Cell>
                  <Button                       
                      type="button" 
                      onClick={(save) => viewAll(item.id)}>
                      View
                  </Button>                  
                </Table.Cell>
                <Table.Cell>
                <Button                       
                      type="button" 
                      onClick={(save) => enrollNew(item.id)}>
                      New Student
                  </Button> 
                </Table.Cell>
                <Table.Cell>
                  <Button 
                      size="lg"
                      type="button" 
                      onClick={(save) => deleteCourse(item.id)}>
                      Delete Course
                  </Button>

                </Table.Cell>
              </Table.Row>
            );
          })}
     </Table.Body>
        </Table>
        </NextUIProvider>
      );

    
}

export async function getServerSideProps() {

    console.log('LIST ALL COURSES PAGE: getServerSideProps()');

    const res = await fetch(`http://localhost:3000/api/listcourses`)
    const data = await res.json()
    
    return { props: { data } }

  }

