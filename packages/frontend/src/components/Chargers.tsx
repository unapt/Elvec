import { SearchIcon } from "@chakra-ui/icons";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  HStack,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Chargers = () => {
  const router = useRouter();

  const APIKEY = process.env.NEXT_PUBLIC_NRELGOV_API;
  let ZIP = 56301;

  const [stations, setStations] = useState<any>();
  const [lat, setLat] = useState<number | null>();
  const [lon, setLon] = useState<number | null>();

  const [zipInput, SetZipInput] = useState<string | null>();

  function getNearestStations() {
    if (!lat || !lon) {
      fetch(
        `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${APIKEY}&location=${ZIP}&fuel_type=ELEC&limit=6`
      )
        .then((response) => response.json())
        .then((data) => setStations(data.fuel_stations));
    } else {
      fetch(
        `https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${APIKEY}&latitude=${lat}&longitude=${lon}&fuel_type=ELEC&limit=6`
      )
        .then((response) => response.json())
        .then((data) => setStations(data.fuel_stations));
    }
  }

  function getUserLocation() {
    if (!navigator.geolocation) {
      alert("geolocation not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);

          getNearestStations();
        },
        (e) => {
          alert(
            "Location not available. Please allow it on your browser to find EV stations near you!"
          );

          getNearestStations();
        }
      );
    }
  }

  function searchZip(code: any) {
    if (code) {
      router.push("/stations/" + code);
    }
  }

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <>
      <Heading>⚡ Charging Stations Near You...</Heading>
      <br></br>
      <HStack>
        <Input
          placeholder="or enter zip code"
          onChange={(event) => SetZipInput(event.currentTarget.value)}
        />
        <IconButton
          aria-label="Search database"
          icon={<SearchIcon />}
          onClick={() => searchZip(zipInput)}
        />
      </HStack>
      <br></br>
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
              <Button>Schedule and Save Now!</Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};
