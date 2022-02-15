import React from 'react';
import styled from 'styled-components';
import ImageSlider from './ImageSlider';
import Movies from './Movies';
import Viewers from './Viewers';
import { useEffect } from 'react';
import db from '../firebase'
//import { auth } from '../firebase';
import { collection, query, onSnapshot ,getDocs} from "firebase/firestore";
import {useDispatch} from "react-redux"
import { setMovies } from '../features/movie/movieSlice';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(async()=>{
    const querySnapshot = await getDocs(collection(db, "movies"));
    let allmovies = querySnapshot.docs.map((doc) => {
      console.log(doc.id, " => ", doc.data());
      return { id : doc.id , ... doc.data() };
    });
    console.log(allmovies)
    dispatch(setMovies(allmovies))
    
  },[])
  return (
    <Container>
        <ImageSlider/>
        <Viewers/>
        <Movies/>
    </Container>
  );
}

const Container = styled.main`
    min-height: calc(100vh - 70px);
    padding: 0 calc(3.5vw + 5px);
    position: relative;
    overflow: hidden;

    &:before{
        background: url("/images/home-background.png") center center / cover fixed;
        
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index:-1;
    }
`