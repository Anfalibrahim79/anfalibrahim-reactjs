import React from 'react'


const HeroSection = () => {
  return (
    <div className='hero_section bg-dark '> 
       <div className="p-5 text-center navbarBg" style={{height: '512px'}}>
            
            <div className="d-flex justify-content-center align-items-center " style={{height : '300px'}}>
            <div className="text-white ">
                <h1 className='headinghero p-3'>Hello World !!!</h1>
                <p className='pHero'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae possimus dolorem temporibus, unde et vero harum tempora debitis quo nobis dolorum ullam quas cumque hic autem illum ex fugiat laborum.
                </p>
                <p className='pHero'>
                    <a className='buttonhero ' href='#!' role='button' >Learn more</a>
                </p>
            </div>
            </div>

        </div>
    </div>
)
}

export default HeroSection