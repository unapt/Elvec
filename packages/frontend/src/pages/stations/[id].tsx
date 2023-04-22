import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  HStack,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";

import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";


import { ScheduleTable } from "./ScheduleTable";
import { ScheduleProvider } from "./ScheduleContext";
import { BrowserRouter as Router, Route } from "react-router-dom";

export default function ChargingStations() {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const [stations, setStations] = useState<any>();
  const [zipInput, SetZipInput] = useState<string | null>();

  const APIKEY = process.env.NEXT_PUBLIC_NRELGOV_API;

  useEffect(() => {
    if (id) {
      findChargers(id);
    }
  }, []);

  function findChargers(input: any) {
    if (input) {
      fetch(
        `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${APIKEY}&location=${input}&fuel_type=ELEC`
      )
        .then((response) => response.json())
        .then((data) => setStations(data.fuel_stations));
    }
  }

  return (
    <>
      <Container size="lg">
        <Heading>Charging Stations In {id} ⚡</Heading>
        <br></br>

        <SimpleGrid
          spacing={4}
          templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        >
          {stations?.map((key: string, i: number) => (
            <Card>
              <CardHeader>
                <Heading size="md">{stations[i].station_name}</Heading>
              </CardHeader>
              <CardBody>
                <Text>{stations[i].street_address}</Text>
                <Tag size="md" variant="solid" colorScheme="green">
                  {Number(stations[i].distance.toFixed(1))} miles away
                </Tag>
              </CardBody>
              <CardFooter>
                <Button onClick={() => router.push("/calendar/" + stations[i].id)}>Schedule and Save Now!</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>
        <ScheduleProvider>
          <div className = "row">
            <div className = "col-sm-10 col-xm-12 mr-auto ml-auto mt-4 mb-4">
              <ScheduleTable/>   
            </div>
          </div>
        </ScheduleProvider>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Link href="/">Back Home</Link>
      </Container>
    </>
  );
}
