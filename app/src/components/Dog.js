import React from 'react'
import { connect } from "react-redux";


const Dogs = ({dogData}) => {
    return (
        <>
        <img src={dogData.message}></img>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        dogData: state.dogData
    }
}

export default connect(mapStateToProps, {})(Dogs)