import { Grid, Card, Text } from "@nextui-org/react";
import Link from 'next/link'
import { Table } from '@nextui-org/react';


export default function listAllCourses({data}) {
    console.log('list course page');
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
          <Table.Column>Course ID</Table.Column>
            <Table.Column>Title</Table.Column>
            <Table.Column>Description</Table.Column>
            <Table.Column>NFQ</Table.Column>
            <Table.Column>Years</Table.Column>
            <Table.Column>Option</Table.Column>
            <Table.Column>Enroll New Student</Table.Column>
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
                <Table.Cell><Link href={`/viewAll?id=` +item.id}>View</Link> </Table.Cell>
                <Table.Cell><Link href={`/enrollStudent?id=` +item.id}>New Student</Link> </Table.Cell>
              </Table.Row>
            );
          })}
     </Table.Body>
        </Table>
        </>
      );

    
}

export async function getServerSideProps() {

    console.log('List All Courses Server Side Props: ID = ');

    const res = await fetch(`http://localhost:3000/api/listcourses`)
    const data = await res.json()
    
    return { props: { data } }

  }


