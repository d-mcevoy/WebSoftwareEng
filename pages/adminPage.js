import {useRouter} from 'next/router'

import { NextUIProvider } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { Container, Card, Row, Text, Col, Spacer } from "@nextui-org/react";
import { Button, Grid } from "@nextui-org/react";
import { Link } from "@nextui-org/react";


export default function admin({data}) {
    
    console.log("ADMIN PAGE");

    const router = useRouter()

    function goCourses() {

        router.push("/listAllCourses");
    }
    function goStudent() {

        router.push("/listAllStudents");
    }

    function goChat() {

        router.push("/liveChat");
    }

    return (
        <NextUIProvider>
        <Button 
            size="xl"
            type="button" 
            onClick={(save) => goStudent()}>
            View Students
            </Button>
        <Spacer y={0.5} />

        <Button 
            size="xl"
            type="button" 
            onClick={(save) => goCourses()}>
            View Courses
            </Button>
        <Spacer y={0.5} />

        <Button 
            size="xl"
            type="button" 
            onClick={(save) => goChat()}>
            Chat
            </Button>
        <Spacer y={0.5} />
        

        </NextUIProvider>
    )
}