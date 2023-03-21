


import Link from 'next/link';
import { Table } from '@nextui-org/react';
import { Input, Spacer } from "@nextui-org/react";
import { useRouter } from 'next/router'
import { Button, Grid } from "@nextui-org/react";


export default function viewStudents({data}) {

    console.log('View Student Page');
    console.log(data);

    const router = useRouter()

    const {id} = router.query


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
            <Table.Column>Grade ID</Table.Column>
            <Table.Column>Student ID</Table.Column>
            <Table.Column>First Name</Table.Column>
            <Table.Column>Surname</Table.Column>
            <Table.Column>Course ID</Table.Column>
            <Table.Column>Grade</Table.Column>
            <Table.Column>Option</Table.Column>
            
          </Table.Header>
          <Table.Body>
    
          {data.map((item) => {
            return (
              <Table.Row key={item.gid}>
                <Table.Cell> {item.gid}</Table.Cell>
                <Table.Cell> {item.sid}</Table.Cell>
                <Table.Cell> {item.fn}</Table.Cell>
                <Table.Cell> {item.sn}</Table.Cell>
                <Table.Cell> {item.cid}</Table.Cell>
                <Table.Cell> {item.grade}</Table.Cell>
                <Table.Cell> 
                <Button 
                        type="button" 
                        size="xs"
                        onClick={(save) => deleteData(item.gid, item.sid)}>
                            Delete
                    </Button>
                </Table.Cell>
                
              </Table.Row>
            );
          })}
     </Table.Body>
        </Table>


   




    </>
  )

  async function deleteData(gid, sid) {

                
    
    const data = { gid: gid }
   

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data)
    
    // API endpoint where we send form data.
    const endpoint = '/api/deleteGrade'

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

    if(result == "ok"){
        alert("ok")
        router.push("/viewStudent?id="+sid);
      }
    //window.location.reload();

    
}



}

export async function getServerSideProps(context) {
    let id = context.query.id;
   

    console.log("View Student Server Side Props: Current id: "+id);

    

    const res = await fetch(`http://localhost:3000/api/getGrade?id=`+id)
    const data = await res.json()
    
    return { props: { data } }

  }


