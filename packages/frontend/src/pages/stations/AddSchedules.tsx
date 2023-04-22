import react, { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
    FormErrorMessage,
    FormLabel,
    FormControl,
    Input,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    HStack,
    Heading,
    IconButton,
    SimpleGrid,
    Tag,
    Text,
  } from '@chakra-ui/react'

  export const AddSchedules = () => {

    const [scheduleInfo, setScheduleInfo] = useState(
        {
            DateTime: "",
            PlateNo: "",
            ChargingDuration: "",
            ChargeStation: ""
        }
    )

    const updateForm = (e) => {
        setScheduleInfo(
            {...scheduleInfo, [e.target.name] : [e.target.value]}
        )
    }

    const postData = async (e) => {
        e.preventDefault();
        console.log(scheduleInfo)
    
        const url = "http://localhost:8000/schedule/" + scheduleInfo['Station'] 

        const response = await fetch(
            url, {
                method: 'POST',
                mode: 'cors',
                cache: 'no-cache',
                credentials: 'same-origin', 
                headers: {
                'Content-Type': 'application/json'
                },
                redirect: 'follow',
                referrerPolicy: 'no-referrer', 
                body: JSON.stringify({
                    "date_time": scheduleInfo['DateTime'],
                    "plate_no": scheduleInfo['PlateNo'],
                    "charging_Duration": scheduleInfo['ChargingDuration'],
                    "charge_station": scheduleInfo['ChargeStation']
                }) 
            });
        response.json().then(response => {
            if (response.status === 'ok') {
                alert("Schedule added successfully")
            } else {
                alert("Failed to add schedule")
            }
        });
        setScheduleInfo({
            DateTime: "",
            PlateNo: "",
            ChargingDuration: "",
            ChargeStation: ""
        });
    }


    return (
        <form onSubmit = {postData}>
                <FormLabel>Date and Time</FormLabel>
                <FormControl type="number" name="DateTime"
                value={scheduleInfo.DateTime} onChange = {updateForm}  placeholder="Date and Time" />

                <FormLabel>Plate Number</FormLabel>
                <FormControl type="number" name="PlateNo" value={scheduleInfo.PlateNo} onChange = {updateForm}  placeholder="Plate Number" />

                <FormLabel>Charging Duration</FormLabel>
                <FormControl type="number" name="ChargingDuration" value={scheduleInfo.ChargingDuration} onChange = {updateForm}  placeholder="Charging Duration" />

                <FormLabel>Charging Station</FormLabel>
                <FormControl type="number" name="ChargeStation" value={scheduleInfo.ChargeStation} onChange = {updateForm}  
                    placeholder="Charging Station" />
            
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </form>
    );
  }