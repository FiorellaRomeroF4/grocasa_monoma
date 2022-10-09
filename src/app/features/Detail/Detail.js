/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { Map } from "../../components/Map/Map"
import { Switch, Carousel } from "antd";
import { getPropertyDetail, getRelatedProperties } from "../../store/property/property"
import { PropertyList } from '../../components/PropertyList/PropertyList'
import styles from './Detail.module.scss'

export const Detail = () => {
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

  const icons = [
    {src: '/multimedia/icons/arrows.svg', alt: 'area'},
    {src: '/multimedia/icons/bed.svg', alt: 'bed'},
    {src: '/multimedia/icons/toilet.svg', alt: 'toilet'},
  ]

  const images = ['/multimedia/images/image.png', '/multimedia/images/image.png', '/multimedia/images/image.png']

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
        <Carousel dots={true} slidesToShow={2}>
          {images && images.map((ele) => (
            <div>
              <img src={ele} alt="property"/>
            </div>
          ))}
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
          <div className={styles.icons}>
            {icons.map((ele) => (
              <img src={ele.src} alt={ele.alt} width={'40px'} />
            ))}
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
        <div className={styles.quantity}>
          <p>{area}</p>
          <p>{beds}</p>
          <p className={styles.toilet}>{toilet}</p>
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
          <Switch checked/>
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