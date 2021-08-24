/*
    You Don't Know JS Yet: Get Started - 2nd Edition
    Appendix B: Practice, Practice, Practice!

    Practing Comparisons
*/

const dayStart = "07:30"
const dayEnd = "17:45"

function scheduleMeeting(startTime, durationMinutes) {

    if(startTime === undefined || durationMinutes === undefined) return false

    const dayStartInMinutes = twentyfourfourformatToMinutes(dayStart)
    const dayEndInMinutes = twentyfourfourformatToMinutes(dayEnd)

    const startTimeInMinutes = twentyfourfourformatToMinutes(startTime)
    
    return dayStartInMinutes <= startTimeInMinutes &&
           dayEndInMinutes >= startTimeInMinutes + durationMinutes 

}

function twentyfourfourformatToMinutes(time) {
    return Number(time.split(':')[0]) * 60 + Number(time.split(':')[1])
}

console.log(
scheduleMeeting("7:00",15),     // false
scheduleMeeting("07:15",30),    // false
scheduleMeeting("7:30",30),     // true
scheduleMeeting("11:30",60),    // true
scheduleMeeting("17:00",45),    // true
scheduleMeeting("17:30",30),    // false
scheduleMeeting("18:00",15),    // false
)