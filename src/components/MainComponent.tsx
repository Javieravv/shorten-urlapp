import React from 'react'
import { DetailsComponent, 
    FooterComponent, 
    GetStartedComponent, 
    HeaderComponent, 
    NavBar, 
    ShortenComponent, 
    StatisticsComponent } from './'

export const MainComponent = () => {
    return (
        <>
            <NavBar />
            <div className="container-main">
                <HeaderComponent />
            </div>
            <div className="container-main1">
                <ShortenComponent />
                <StatisticsComponent />
                <DetailsComponent />
            </div>
            <div className="container-main2">
                <GetStartedComponent />
            </div>
            <div className="container-main3">
                <FooterComponent />
            </div>
        </>
        
  )
}
