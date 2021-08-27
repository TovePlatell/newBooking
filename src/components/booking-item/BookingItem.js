import { useEffect, useState } from "react"
import { getBookedInfo } from "../../firebase/firebase.utils"

const BookingItem = ({officeName, ...otherProps}) => {
    const [officeInfo, setOfficeInfo] = useState({})
    const fromDate = new Date(otherProps.startDate.seconds * 1000)
    const toDate = new Date(otherProps.endDate.seconds * 1000)

    const formatDate = (dateToFormat) => {
        const day = dateToFormat.getDate()
        const month = dateToFormat.getMonth()
        const year = dateToFormat.getFullYear()

        console.log("ll", month)
        if(month < 10) {
            return `${year}/0${month + 1 }/${day}`
        }

        return `${year}/${month + 1 }/${day}`
    }

    useEffect(() => {

        const fetchOffice = async () => {
            const response = await getBookedInfo(officeName)
            setOfficeInfo({...officeInfo, ...response})
        }
        fetchOffice()

    }, [])
    
    return(
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop: '10px'}}>
    <div style={{border: '1px solid black', width: '40%', display: 'flex', flexDirection: 'column'}}>
        <h2>{officeInfo.name}</h2>
        <span>Price: {officeInfo.price} SEK</span>
        <span>Location: {officeInfo.location}</span> 
        <span>Description: {officeInfo.description}</span> 
        <div style={{display: 'flex', flexDirection: 'column', marginTop: '15px', marginBottom: '15px'}}>
        <span>From: {formatDate(fromDate)}</span>
        <span>To: {formatDate(toDate)}</span>
        </div>
    </div>
    </div>
)}

export default BookingItem