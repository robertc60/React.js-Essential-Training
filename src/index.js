import React , {Component} from 'react'
import ReactDOM, {render} from 'react-dom'

let holidayDays = {
    total: 25,
    taken: 0,
    leftToTake: 25
}

const getPercent = decimal => {
    return decimal * 100 + '%'
}

const calcPercentageLeft = (total, leftToTake) => {
    return getPercent(leftToTake/total)
}

const WorkHolidayDays = ({total, taken, leftToTake}) => {
    return (
        <section>
            <div>
                <p>Total Holidays: {total}</p>
            </div>  
            <div>
                <p>Total Holidays: {taken}</p>
            </div>  
            <div>
                <p>Total Holidays: {calcPercentageLeft(total, leftToTake)}</p>
            </div>  
        </section>
    )
}

render(
    <WorkHolidayDays 
        total={holidayDays.total}
        taken={holidayDays.taken}
        leftToTake={holidayDays.leftToTake}
    />,
    document.getElementById('root')
)