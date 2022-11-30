import React, { Component } from 'react'

export default class HeroSection extends Component {
  render() {
    return (
        <div className="p-5 text-center navbarBg" style={{height: '512px'}}>
    
          <div className="d-flex justify-content-center align-items-center " style={{height : '300px'}}>
            <div className="text-white ">
                <h1 className='heading'>Hello World !!!</h1>
                <p className='pHero'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae possimus dolorem temporibus, unde et vero harum tempora debitis quo nobis dolorum ullam quas cumque hic autem illum ex fugiat laborum.
                </p>
                <p>
                    <a className='buttonHero' href='#!' role='button' >Learn more</a>
                </p>
            </div>
          </div>

      </div>
    )
  }
}
