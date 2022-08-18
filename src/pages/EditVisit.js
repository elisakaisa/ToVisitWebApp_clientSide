import React from 'react'

const EditVisit = ({ visit }) => {

    if (!visit) {
        return null
    }

    console.log(visit)
    return (
        <div>edit visit {visit.what}</div>
    )
}

export default EditVisit