import React from 'react'
import { Layout } from './newItems.styled'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useLocation} from 'react-router-dom'
import * as productActions from '../../Redux/Actions/productActions'
import { Skeleton} from 'antd';

function NewItem() {

  const dispatch = useDispatch()
  const location = useLocation()

  var settings = {
    dots: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 0,
  };
  
  const productReducer = useSelector(state => state.productReducer)
  const { products, loading, error } = productReducer

  useEffect(() => {
    dispatch(productActions.getAllProducts())

  }, [dispatch, location])
  return (
    <Layout>
      <div className="layout-headline">
        <h1>ახალი დამატებული</h1>
      </div>
    <Slider className='slider-wrapper' {...settings}>
        {
          loading ? 
          <strong>loading...</strong> 
          : products.map(product => (
            <div key={product._id} className='slider-card slick-slide'>
              <div className="card-hero">
              <img src={product.hero} alt="" />
    
              </div>
              <div className="card-description">
                <h5>{product.name}</h5>
                  <b>
                    <h4>{product.price}₾</h4>
                  </b>
              </div>
          </div>
          ))
        }
      </Slider>
    </Layout>
  )
}

export default NewItem
