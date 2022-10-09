import { createSlice } from '@reduxjs/toolkit'
import { estateInfo, propertyDetail, relatedProperties } from '../../mockData/mockData'

export const slice = createSlice({
  name: 'property',
  initialState: {
    propertyList: [],
    propertyDetail: {},
    relatedProperties: [],
    isLoading: false,
    isSuccess: false,
    isFail: false,
    isLoadingDetail: false,
    isSuccessDetail: false,
    isFailDetail: false,
    isLoadingRelatedProperties: false,
    isSuccessRelatedProperties: false,
    isFailRelatedProperties: false,
  },
  reducers: {
    getPropertyListRequest: (state) => {
      return {
        ...state,
        isLoading: true,
        isSuccess: false,
        isFail: false,
      }
    },
    getPropertyListSuccess: (state, action) => {
      return {
        ...state,
        propertyList: action.payload,
        isLoading: false,
        isSuccess: true,
        isFail: false,
      }
    },
    getPropertyListFail: (state) => {
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
        isFail: true,
      }
    },
    getPropertyDetailRequest: (state) => {
      return {
        ...state,
        isLoadingDetail: true,
        isSuccessDetail: false,
        isFailDetail: false,
      }
    },
    getPropertyDetailSuccess: (state, action) => {
      return {
        ...state,
        propertyDetail: action.payload,
        isLoadingDetail: false,
        isSuccessDetail: true,
        isFailDetail: false,
      }
    },
    getPropertyDetailFail: (state) => {
      return {
        ...state,
        isLoadingDetail: false,
        isSuccessDetail: false,
        isFailDetail: true,
      }
    },
    getRelatedPropertiesRequest: (state) => {
      return {
        ...state,
        isLoadingRelatedProperties: true,
        isSuccessRelatedProperties: false,
        isFailRelatedProperties: false,
      }
    },
    getRelatedPropertiesSuccess: (state, action) => {
      return {
        ...state,
        relatedProperties: action.payload,
        isLoadingRelatedProperties: false,
        isSuccessRelatedProperties: true,
        isFailRelatedProperties: false,
      }
    },
    getRelatedPropertiesFail: (state) => {
      return {
        ...state,
        isLoadingRelatedProperties: false,
        isSuccessRelatedProperties: false,
        isFailRelatedProperties: true,
      }
    },
  },
})

export default slice.reducer

export const {
  getPropertyListRequest,
  getPropertyListSuccess,
  getPropertyListFail,
  getPropertyDetailRequest,
  getPropertyDetailSuccess,
  getPropertyDetailFail,
  getRelatedPropertiesRequest,
  getRelatedPropertiesSuccess,
  getRelatedPropertiesFail
} = slice.actions

export const getPropertyList = () => async (dispatch) => {
  dispatch(getPropertyListRequest())
  try {
    // Here the endpoint will be called
    const res = estateInfo
    dispatch(getPropertyListSuccess(res))
  } catch {
    dispatch(getPropertyListFail())
  }
}

export const getPropertyDetail = (id) => async (dispatch) => {
  dispatch(getPropertyDetailRequest())
  try {
    // Here the endpoint will be called
    const res = propertyDetail[id]
    dispatch(getPropertyDetailSuccess(res))
  } catch {
    dispatch(getPropertyDetailFail())
  }
}

export const getRelatedProperties = (id) => async (dispatch) => {
  dispatch(getRelatedPropertiesRequest())
  try {
    // Here the endpoint will be called
    const res = relatedProperties
    dispatch(getRelatedPropertiesSuccess(res))
  } catch {
    dispatch(getRelatedPropertiesFail())
  }
}