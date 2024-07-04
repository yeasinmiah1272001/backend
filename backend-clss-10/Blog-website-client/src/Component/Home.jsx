import React from 'react';
import Banner from './Banner';
import BearPlace from './BearPlace';
import { useLoaderData } from 'react-router-dom';
import CoverWimrn from './CoverWimrn';
import Explore from './Explore';
import Riview from './Riview';

const Home = () => {
       const blogs = useLoaderData()
      
       return (
              <div>
                    <Banner></Banner>
                    <BearPlace blogs={blogs}></BearPlace>
                    <CoverWimrn></CoverWimrn>
                    <Explore></Explore>
                    <Riview></Riview>
              </div>
       );
};

export default Home;