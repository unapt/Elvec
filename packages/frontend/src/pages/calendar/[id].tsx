
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import Link from "next/link";
import { Button, Center, Container, Divider, HStack, Heading, Input } from "@chakra-ui/react";
import { ScheduleTable } from "../../components/ScheduleTable";
import { ScheduleProvider } from "../../components/ScheduleContext";

export default function Cal() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <>
    <Link href="/"><Button>Back Home</Button></Link>
    <HStack>
      <Container>
        <Heading>Schedule for stations: </Heading>
        <Center height="50px">
            <Divider orientation="vertical" />
        </Center>
        <ScheduleProvider>
          <div className = "row">
            <div className = "col-sm-10 col-xm-12 mr-auto ml-auto mt-4 mb-4">
              <ScheduleTable/>   
            </div>
          </div>
        </ScheduleProvider>
      </Container>
    </HStack>
    <HStack>
      <Container>
        {/* <Heading>
          Schedule your time now!
        </Heading>
        <Button>this is where the form will go </Button>
        <Input placeholder="Plate Number"></Input> */}
        <Button colorScheme='teal' size='md' onClick={() => console.log("yay")}>
          Book Appointment
        </Button>
      </Container>
    </HStack>
    </>
  );
}
