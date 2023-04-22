import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import styles from "../../components/Cal.module.css"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import Link from "next/link";
import { Button, Container, HStack, Heading } from "@chakra-ui/react";

const localizer = momentLocalizer(moment);

export default function Cal() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const [events, setEvents] = useState();

  useEffect(() => {
    fetch("api/schedule")
      .then((response) => response.json())
      .then((data) => setEvents(data));
  }, []);

  return (
    <>
    <Link href="/"><Button>Back Home</Button></Link>
    <HStack>
      <div className={styles.cal}>
          <Calendar
            localizer={localizer}
            events={events}
            defaultView="day"
            startAccessor="start"
            endAccessor="end"
          />
      </div>
      <Container>
        <Heading>Schedule for station ID: {id}</Heading>
        
      </Container>
    </HStack>
    <HStack>
      
    </HStack>
    </>
  );
}
