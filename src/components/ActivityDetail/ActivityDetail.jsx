import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getActivity } from '../../features/activities/activitySlice'

const ActivityDetail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getActivity())
  })
  return (
    <div>ActivityDetail
        
    </div>
  )
}

export default ActivityDetail