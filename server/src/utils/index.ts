const convertHourStringToMinutes = (hourString: string ) => {
    const [hours, minutes] = hourString.split(":").map(Number)
    
    const minutesAmount = (hours * 60) + minutes
    
    return minutesAmount;
};

const convertMinutesToHourString = (minutesAmount: number) => {
    const hours = Math.floor(minutesAmount / 60);
    
    const minutes = minutesAmount % 60;
    
    return `${ String(hours).padStart(2, '0') }:${ String(minutes).padStart(2, '0') }`;
}

export {
    convertHourStringToMinutes,
    convertMinutesToHourString,
}
