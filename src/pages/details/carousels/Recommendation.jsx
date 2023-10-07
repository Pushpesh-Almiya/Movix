import React from 'react'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel';
function Recommendation({mediaType,id}) {
    const {data,loading,error}= useFetch(`/${mediaType}/${id}/recommendations`)
    
  return (
    <Carousel title="Recommendation" data={data?.results} loading={loading} endPoint={mediaType}/>
  )
}

export default Recommendation
