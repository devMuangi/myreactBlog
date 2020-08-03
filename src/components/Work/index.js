import React from 'react';
import Hero from "../Hero";
import Banner from '../Banner';
import {Link} from 'react-router-dom';
import Worksingle from '../Worksingle';
import {ProductConsumer} from '../Context/context';
import "./style.scss";

export default function Work ({name, title}) {

    return (
    <>
      <Hero>
        <Banner title="Some of my work" subtitle="I have worked with teams in some projects">
        </Banner>
      </Hero>
      <div>
    {/* render worksingle here */}
        <React.Fragment>
        <div className="works-display">
          <ProductConsumer>
            {value => {
              return value.projectData.map(project => {
                return <Worksingle key={project.id} project={project} />
              })
            }}
          </ProductConsumer>
        </div>
        </React.Fragment> 
      </div>
    </>
    )
}
