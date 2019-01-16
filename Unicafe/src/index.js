import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const handleGoodClick = () => {
        setGood(good +1)
        setTotal(total+1)
    }

    const handleNeutralClick = () => {
        setNeutral(neutral +1)
        setTotal(total+1)
    }

    const handleBadClick = () => {
        setBad(bad +1)
        setTotal(total+1)
    }

    return (
        <div>
            <h1>Anna palautetta</h1>
            <div>
                <Button 
                handleClick = {handleGoodClick}
                text = {"Hyvä"}
                />
                <Button 
                handleClick = {handleNeutralClick}
                text = {"Neutraali"}
                />
                <Button 
                handleClick = {handleBadClick}
                text = {"Huono"}
                />
            </div>
            <div>
                <Statistics 
                good = {good}
                neutral = {neutral}
                bad = {bad}
                total = {total}
                />
            </div>
        </div>
    )
}

const Statistics = (props) => {
    const good = props.good
    const neutral = props.neutral
    const bad = props.bad
    const total = props.total
    if (total === 0){
        return (
            <div>
            <h2>Statistiikka</h2>
            <p>ei yhtään palautetta annettu</p>
            </div>
        )
    }
    return (
        <div>
            <h2>Statistiikka</h2>           

        <table>
            <tbody>
                <Statistic
                text = {"Hyvä"}
                value = {good}
                />
                <Statistic
                text = {"Neutraali"}
                value = {neutral}
                />
                <Statistic
                text = {"Huono"}
                value = {bad}
                />
                <Statistic
                text = {"Average"}
                value = {Average({good, bad, total})}
                />
                <Statistic
                text = {"Positiivisia"}
                value = {Percentage(good, total)}
                />
            </tbody>
        </table>
        </div>
    )
}

const Statistic = ({text, value}) => (
        <tr>
        <td>
            {text}
        </td>
        <td>
            {value} 
        </td>
        </tr>
)

const Average = ({good, bad, total}) => {
    if (total > 0){
        return (
            ((good - bad) / total).toFixed(2)
        )
    }
    return 0
}

const Percentage = (part, total) => {
    if (total > 0){
    return ((part / total) * 100).toFixed(2) + " %"
    }

    return 0 + " %"
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
    {text}
    </button>
)

ReactDOM.render(
<App />, 
document.getElementById('root')
)
