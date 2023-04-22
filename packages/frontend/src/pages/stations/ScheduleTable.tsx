import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'

import react, { useContext, useEffect } from 'react';
import { ScheduleContext } from './ScheduleContext';
import { ScheduleRow } from './ScheduleRow';

export const ScheduleTable = () => {
    const [schedules, setSchedules] = useContext(ScheduleContext)

    useEffect(() => {
        fetch("http://localhost:8000/schedule/")
            .then(resp => {
                return resp.json();
            }).then(results => {
                console.log(results)
            setSchedules({"data" : [...results.data]})
        })
    })

    return (
        <div>
            <Table variant='striped'>
                <Thead>
                    <Tr>
                        <Th>ID</Th>
                        <Th>Date and Time</Th>
                        <Th>Plate No</Th>
                        <Th>Charging Duration</Th>
                        <Th>Charge Station</Th>
                        <Th>Actions</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    { schedules.data.map(schedule => (
                        <ScheduleRow
                            id = {schedule.id}
                            date_time = {schedule.date_time}
                            plate_no = {schedule.plate_no}
                            charging_Duration = {schedule.charging_Duration}
                            charge_station = {schedule.charge_station}
                            key = {schedule.id}
                        />
                    ))}
                </Tbody>
            </Table>
        </div>
    );
}

