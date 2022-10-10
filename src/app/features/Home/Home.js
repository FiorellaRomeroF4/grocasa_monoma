/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { PropertyList } from "../../components/PropertyList/PropertyList"
import { getPropertyList } from "../../store/property/property"
import styles from './Home.module.scss'


export const Home = () => {
  const dispatch = useDispatch()
  const { property } = useSelector((state) => state)
  const { propertyList } = property

  const [propertyInfo, setPropertyInfo] = useState([])

  useEffect(() => {
    dispatch(getPropertyList())
  }, [])

  useEffect(() => {
    if (propertyList && propertyList.length > 0) {
      setPropertyInfo(propertyList)
    }
  }, [propertyList])
  
  return (
    <section className={styles.home}>
      <div className={styles.wrapperLogo}>
        <img src={'/multimedia/images/Grocasa.png'} alt="logo" width={'150px'} />
      </div>
      <PropertyList propertyInfo={propertyInfo} />
    </section>
  )
}