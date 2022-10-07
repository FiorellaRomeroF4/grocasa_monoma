import React from "react"
import { estateInfo } from '../../mockData/mockData'
import styles from './Home.module.scss'

export const Home = () => {

  const icons = [
    {src: '/multimedia/icons/arrows.svg', alt: 'area'},
    {src: '/multimedia/icons/bed.svg', alt: 'bed'},
    {src: '/multimedia/icons/toilet.svg', alt: 'toilet'},
  ]
  
  return (
    <section>
      <div>
        <img src={'/multimedia/images/Grocasa.png'} alt="logo" width={'150px'} />
      </div>
      <div className={styles.information}>
        {estateInfo.map((ele, index) => (
          <div key={index}>
            <img src={ele.img} alt="estate" width={'500px'}/>
            <div className={styles.titleWrapper}>
              <p className={styles.title}>{ele.title}</p>
              <p className={styles.subtitle}>{ele.subtitle}</p>
            </div>
            <div className={styles.infoWrapper}>
              <div className={styles.icons}>
                {icons.map((ele) => (
                  <img src={ele.src} alt={ele.alt} width={'40px'} />
                ))}
              </div>
              <div>
                <p className={styles.price}>{`${ele.price}€`}</p>
              </div>
              <div>
                <button className={styles.button}>
                  Más info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}