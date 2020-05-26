import React from 'react';
import { connect } from 'react-redux';
import "../styles/home.scss";
import reactimg from '../assets/react.png';
import { fetchDog } from '../redux/actions/dogActions'

const Home = (props) => {
  const { dispatch, url, loading } = props;
  return (
    <div className="home">
      <h1>React Starter</h1>
      <img src={reactimg} alt="React Starter" />
      <br/><br/>
      <button onClick={()=> dispatch(fetchDog())}>Get dog image</button>
      <br/><br/>
      {url && !loading ?<img src={url} alt='DOG'/>:null}
      {loading ? <span>loading...</span>:null}
    </div>
  )
}

const mapStateToProps = (state) => {
  const { dogReducer } = state;
  return {
    url: dogReducer && dogReducer.url ? dogReducer.url : '',
    loading: dogReducer && dogReducer.loading ? dogReducer.loading : false
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);