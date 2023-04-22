import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "../../components/Cal.module.css"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Link from "next/link";
import { Button, Container, HStack, Heading } from "@chakra-ui/react";
import { ScheduleTable } from "../../components/ScheduleTable";
import { ScheduleProvider } from "../../components/ScheduleContext";

const localizer = momentLocalizer(moment);

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
        <Heading>Schedule for station ID: {id}</Heading>
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
        <Button>this is where the form will go </Button>
      </Container>
    </HStack>
    </>
  );
}
