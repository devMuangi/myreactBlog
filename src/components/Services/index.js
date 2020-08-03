import React from 'react';
import Hero from "../Hero";
import Banner from '../Banner';
import {Link} from 'react-router-dom';
import Service from '../Service';
import {ProductConsumer} from '../Context/context';
import "./style.scss";

export default function Work ({name, title}) {

    return (
    <React.Fragment>
      <Hero className="servicesHero">
        <Banner title="My Services" subtitle="I offer the following services to my clients">
          <Link to='/work' className="btn-primary">
            portfolio of works
          </Link>
        </Banner>
      </Hero>
      <div>
    {/* render worksingle here */}
        <React.Fragment>
        <div className="services-display">
          <ProductConsumer>
            {value => {
              return value.serviceData.map(service => {
                return <Service key={service.id} service={service} style="margin:2rem;"/>
              })
            }}
          </ProductConsumer>
        </div>
        </React.Fragment> 
      </div>
    </React.Fragment>
    )
}
