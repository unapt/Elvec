import { Button, Card, CardBody, CardFooter, CardHeader, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import { useEffect } from "react";


export const Chargers = () => {
    const apikey = process.env.NEXT_PUBLIC_NRELGOV_API

    let zip = 55301

    function getNearestStations() {
        fetch(`https://developer.nrel.gov/api/alt-fuel-stations/v1/nearest.json?api_key=${apikey}&location=${zip}&fuel_type=ELEC&limit=3`)
          .then((response) => response.json())
          .then((data) => alert(data));
      }
    
      useEffect(() => {
        getNearestStations()
      }, [])

    return (
        <>
        <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))'>
            <Card>
                <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                <Heading size='md'> Customer dashboard</Heading>
                </CardHeader>
                <CardBody>
                <Text>View a summary of all your customers over the last month.</Text>
                </CardBody>
                <CardFooter>
                <Button>View here</Button>
                </CardFooter>
            </Card>
        </SimpleGrid>
        </>
    )
}