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

  import { Button, ButtonGroup } from '@chakra-ui/react'

import react from 'react'

export const ScheduleRow = ({id, date_time, plate_no, charging_Duration, charge_station}) => {
    return (
        <Tr>
            <Td>{id}</Td>
            <Td>{date_time}</Td>
            <Td>{plate_no}</Td>
            <Td>{charging_Duration}</Td>
            <Td>{charge_station}</Td>
            <Td>
                <Button colorScheme='teal' variant='solid'>Update</Button>
                <Button colorScheme='teal' variant='outline'>Station</Button>
            </Td>
        </Tr>
    )
}