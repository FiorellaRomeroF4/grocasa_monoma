import React from "react"
import { useNavigate } from "react-router-dom"
import { useMediaQuery } from 'react-responsive'
import styles from './PropertyList.module.scss'

export const PropertyList = ({propertyInfo}) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const navigate = useNavigate()

  const handleMoreInfo = (id) => {
    navigate(`/${id}`)
  }

  return (
    <div className={styles.information}>
      {propertyInfo.map((ele, index) => (
        <div key={index}>
          <img src={ele.img} alt="property" width={'99%'}/>
          <div className={styles.titleWrapper}>
            <p className={styles.title}>{ele.title}</p>
            <p className={styles.subtitle}>{ele.subtitle}</p>
          </div>
          <div className={styles.infoWrapper}>
            <div className={styles.wrapperIcons}>
              <div className={styles.icons}>
                <img src={'/multimedia/icons/arrows.svg'} alt={'area'} width={isMobile ? '30px' : '40px'} />
                <div>
                  <p className={styles.quantity}>{ele.area}</p>
                </div>
              </div>
              <div className={styles.icons}>
                <img src={'/multimedia/icons/bed.svg'} alt={'beds'} width={isMobile ? '30px' : '40px'} />
                <div>
                  <p className={styles.quantity}>{ele.beds}</p>
                </div>
              </div>
              <div className={styles.icons}>
                <img src={'/multimedia/icons/toilet.svg'} alt={'toilet'} width={isMobile ? '30px' : '40px'} />
                <div>
                  <p className={styles.quantity}>{ele.toilet}</p>
                </div>
              </div>
            </div>
            <div>
              <p className={styles.price}>{`${ele.price}€`}</p>
            </div>
            <div>
              <button className={styles.button} onClick={() => handleMoreInfo(ele.id)}>
                Más info
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}