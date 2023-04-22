import react, { useState, createContext } from 'react'

export const ScheduleContext = createContext({});

export const ScheduleProvider = (props: { children: string | number | boolean | react.ReactElement<any, string | react.JSXElementConstructor<any>> | react.ReactFragment | react.ReactPortal | null | undefined; }) => {
    const [schedules, setSchedules] = useState({ "data": [] });

    return (
        <ScheduleContext.Provider value = {[schedules, setSchedules]}>
            {props.children}
        </ScheduleContext.Provider>
    )
}