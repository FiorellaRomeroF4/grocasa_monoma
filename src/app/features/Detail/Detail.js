/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { Map } from "../../components/Map/Map"
import { Switch, Carousel } from "antd";
import { getPropertyDetail, getRelatedProperties } from "../../store/property/property"
import { PropertyList } from '../../components/PropertyList/PropertyList'
import { useMediaQuery } from 'react-responsive'
import styles from './Detail.module.scss'

export const Detail = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const dispatch = useDispatch()
  const { property } = useSelector((state) => state)
  const { propertyDetail, relatedProperties } = property
  const { id } = useParams()

  const [propertyInfo, setPropertyInfo] = useState({})
  const [relatedPropertiesInfo, setRelatedPropertiesInfo] = useState([])
  const [like, setLike] = useState(true)

  useEffect(() => {
      dispatch(getPropertyDetail(id))
      dispatch(getRelatedProperties())
    }, [])
  
  useEffect(() => {
    if (propertyDetail) {
      setPropertyInfo(propertyDetail)
    }
  }, [propertyDetail])

  useEffect(() => {
    if (relatedProperties && relatedProperties.length > 0) {
      setRelatedPropertiesInfo(relatedProperties)
    }
  }, [relatedProperties])

  const images = ['/multimedia/images/image.png', '/multimedia/images/image.png', '/multimedia/images/image.png']
  const imagesResponsive = ['/multimedia/images/image-responsive.png', '/multimedia/images/image-responsive.png', '/multimedia/images/image-responsive.png']

  const {
    title,
    subtitle,
    description,
    area,
    beds,
    toilet,
    price,
    characteristics,
    extras
  } = propertyInfo

  const handleLike = () => {
    setLike(!like)
  }

  const handleContact = () => {
    const a = document.createElement('a')
    a.href = 'tel: +57-315-228-96-86'
    document.body.appendChild(a)
    a.target = '_blank'
    a.click()
  }

  return (
    <section>
      <div className={styles.header}>
        <a href="/">
          <img src={'/multimedia/icons/arrow-back.svg'} alt="arrow-back" width={'25px'} />
        </a>
        <img src={'/multimedia/images/Grocasa.png'} alt="logo" width={'150px'}/>
      </div>
      <div className={styles.wrapperCarousel}>
        <Carousel dots={true} slidesToShow={isMobile ? 1.3 : 2.2} autoplay>
          {isMobile ? (
            imagesResponsive.map((ele) => (
              <div>
                <img src={ele} alt="property" width={'300px'}/>
              </div>
            ))) : (          
            images.map((ele) => (
              <div>
                <img src={ele} alt="property"/>
              </div>
            )))}
        </Carousel>
      </div>
      <div className={styles.wrapperInfo}>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.wrapperDescription}>
          <p className={styles.description}>{description}</p>
        </div>
        <div className={styles.wrapperItems}>
          <div className={styles.wrapperIcons}>
            <div className={styles.icons}>
              <img src={'/multimedia/icons/arrows.svg'} alt={'area'} width={isMobile ? '30px' : '40px'} />
              <div>
                <p className={styles.quantity}>{area}</p>
              </div>
            </div>
            <div className={styles.icons}>
              <img src={'/multimedia/icons/bed.svg'} alt={'beds'} width={isMobile ? '30px' : '40px'} />
              <div>
                <p className={styles.quantity}>{beds}</p>
              </div>
            </div>
            <div className={styles.icons}>
              <img src={'/multimedia/icons/toilet.svg'} alt={'toilet'} width={isMobile ? '30px' : '40px'} />
              <div>
                <p className={styles.quantity}>{toilet}</p>
              </div>
            </div>
          </div>
          <div className={styles.wrapperPrice}>
            <p className={styles.price}>{`${price}€`}</p>
            <img 
              src={like ? '/multimedia/icons/heart-outlined.svg' : '/multimedia/icons/like.svg'}
              alt="heart"
              width={'40px'} 
              onClick={handleLike}
              style={{ cursor: 'pointer' }}
            />
          </div>
        </div>
        <div className={styles.wrapperExtras}>
          <div>
            <p className={styles.label}>Características</p>
            <div className={styles.characteristics}>
              {characteristics && characteristics.map((ele) => (
                <div className={styles.options}>{ele}</div>
              ))}
            </div>
          </div>
          <div>
            <p className={styles.label}>Extras</p>
            <div className={styles.characteristics}>
              {extras && extras.map((ele) => (
                <div className={styles.options}>{ele}</div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.wrapperMap}>
          <Map />
        </div>
        <div className={styles.wrapperContact}>
          <p className={styles.tellMe}>Avísame si baja</p>
          <Switch defaultChecked/>
          <button onClick={handleContact} className={styles.contactButton}>Contactar</button>
        </div>
      </div>
      <div className={styles.relatedProperties}>
        <div>
          <p className={styles.titleFooter}>También pueden interesarte</p>
        </div>
        <div>
          <PropertyList propertyInfo={relatedPropertiesInfo}/>
        </div>
      </div>
    </section>
  )
}