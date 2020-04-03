import React from 'react'

function Conditional(props) {
    return(
            <h1>SOO GOOD</h1>
    )
}
/* Решение той же задачи тернарным оператором
function Conditional(props) {
    return (
        props.isLoading === true ? <h1>Loading ... </h1> : <h1>SO GOOD</h1>
    )
}
*/
export default Conditional