import React, { useEffect } from 'react';
import {connect, useSelector} from 'react-redux'
import {fetchDOG} from './store/actions/dogActions'
// import styled from 'styled-components'
import './App.css'

// const Div = styled.div `
//   text-align: center;
// `

import Dog from './components/Dog'
function App({fetchDOG, errorMessage}) {
  const loading = useSelector(state => state.loading)
  useEffect(()=>{
    fetchDOG()
  },[fetchDOG])
  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {/* {!loading ? <Dog /> : <div>... loadingg</div>} */}
      {!errorMessage ? (!loading ? <Dog /> : <div>... loading</div>) : <div>{errorMessage}</div>}
    </div>
  );
}

const mapsToStateProps = (state) => {
  return {
    dogData: state.dogData,
    // loading: state.loading,
    errorMessage: state.errorMessage
  }
}

export default connect(mapsToStateProps, {fetchDOG})(App);
