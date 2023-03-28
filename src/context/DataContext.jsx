import { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext()

export default function DataProvider({ children }) {

    const [data, setData] = useState([])
    const getData = async () => {
        const res = await fetch('/data.json')
        const data = await res.json()
        setData(data)
    }

    useEffect(() => {
        getData()
    }, [])


    return (
        <DataContext.Provider value={{ data }}>
            {children}
        </DataContext.Provider>
    )
}

export const useDataContext = () => useContext(DataContext)