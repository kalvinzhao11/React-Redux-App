import React, { useEffect } from 'react';
import {connect} from 'react-redux'
import {fetchDOG} from './store/actions/dogActions'

import Dog from './components/Dog'
function App({fetchDOG, loading, errorMessage}) {

  useEffect(()=>{
    fetchDOG()
  },[fetchDOG])
  return (
    <div className="App">
      <h1>Random Dog Image</h1>
      {/* {!loading ? <Dog /> : <div>... loading</div>} */}
      {!errorMessage ? (!loading ? <Dog /> : <div>... loading</div>) : <div>{errorMessage}</div>}
    </div>
  );
}

const mapsToStateProps = (state) => {
  return {
    dogData: state.dogData,
    loading: state.loading,
    errorMessage: state.errorMessage
  }
}

export default connect(mapsToStateProps, {fetchDOG})(App);
