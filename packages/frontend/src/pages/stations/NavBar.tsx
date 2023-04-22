import react, {useContext, useState} from "react"
import { Form, Link } from 'react-router-dom'
import {ScheduleContext} from './ScheduleContext'
import { Button, FormControl } from "@chakra-ui/react"


export const NavBar = () => {
    const [search, setSearch] = useState("")
    const [schedules, setSchedules] = useContext(ScheduleContext)

    const updateSearch = (e) => {
        setSearch(e.target.value)
    }

    const filterSchedule = (e) => {
        e.preventDefault()
        const schedule = schedule.data.filter(schedule => schedule.name.toLowerCase() === search.toLowerCase())
        setSchedules({"data" : [...schedule]})
    }

    return (
        <Form onSubmit={ filterSchedule } inline>
            <Link to="/addschedule" className="btn btn-primary btn-sm mr-4">Add Schedule</Link>
            <FormControl value = {search} onChange={updateSearch} type="text" placeholder="Search" className="mr-sm-2" />
        <Button type="submit"  variant="outline-primary">Search</Button>
        </Form>
    );
}

