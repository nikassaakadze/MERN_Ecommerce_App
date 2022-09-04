import React from 'react'
import { Grid } from './popular.styled'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useLocation} from 'react-router-dom'
import * as productActions from '../../Redux/Actions/productActions'

function Popular() {

  const dispatch = useDispatch()
  const location = useLocation()

  var settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    id: 1
  };

  const productReducer = useSelector(state => state.productReducer)
  const { products, loading, error } = productReducer

  useEffect(() => {
    dispatch(productActions.getAllProducts())

  }, [dispatch, location])

  return (
    <Grid>
      <div className="layout-headline">
        <h1>პოპულარული პროდუქტები</h1>
      </div>
      <Slider className='slider-wrapper' {...settings}>
        {
          products.map(product => (
            <div key={product._id} className='slider-card slick-slide'>
              <div className="card-hero">
                <img src={product.hero} alt="" />
              </div>
              <div className="card-description">
                <h5>{product.headline}</h5>
                  <b>
                    <h4>{product.price}₾</h4>
                  </b>
              </div>
          </div>
          ))
        }
      </Slider>
    </Grid>
  )
}

export default Popular
