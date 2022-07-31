import { Container } from "@mui/material"
import React from "react"

//TODO: make it a card component

const VisitView = ({ visit }) => {
    return (
        <Container>
            {visit.what}
        </Container>
    )
}

export default VisitView