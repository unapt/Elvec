import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      <div className="myCustomHeight">
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
        />
      </div>
    </>
  );
}
