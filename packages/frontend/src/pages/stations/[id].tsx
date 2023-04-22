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
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
              </CardBody>
              <CardFooter>
                <Button>Schedule and Save Now!</Button>
              </CardFooter>
            </Card>
          ))}
        </SimpleGrid>

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
