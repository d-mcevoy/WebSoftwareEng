


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
   

    console.log("View Student Server Side Props: Current id: "+id);

    

    const res = await fetch(`http://localhost:3000/api/getGrade?id=`+id)
    const data = await res.json()
    
    return { props: { data } }

  }


