import React, { useEffect, useState } from 'react'
import { OurModal,DisplayProject } from './containers'
import ReactPaginate from 'react-paginate'
import { Border, TypographyIcon } from './containers/units'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from 'react-redux'
import Grid from '@mui/material/Grid';

export const Projects = () => {
  const [pageNumber, setPageNumber] = useState(0)
  const data=useSelector((state)=>state.projects)
  const [dataSelector, setDataSelector] = useState(data)
  const dispatch=useDispatch()
  useEffect(() => {
    setDataSelector(data)
  }, [dataSelector,data,dispatch])
  const dataPerPage=12
  const pagesVisited=dataPerPage*pageNumber
  const pageCount = Math.ceil(dataSelector.length/dataPerPage)
  const changePage=({selected})=>setPageNumber(selected)
  return (
    <>
      <Border>
        <Grid item xs={12} className='flex justify-end my-3 mr-2'>
          <OurModal/>
        </Grid>
          <Grid item xs={12}>
            <Grid container  justifyContent="space-between">
              {dataSelector.length>0 &&
              dataSelector?.slice(pagesVisited,pagesVisited+dataPerPage).map(d=>
                <DisplayProject key={d._id} d={d}  />
              )}
            </Grid>
            {dataSelector.length===0 && <TypographyIcon variant='body1' styles='text-red-600 text-center mb-3' icon={faTriangleExclamation} text='you dont have any Stadiums yet'/>}
          </Grid>
        {dataSelector.length!==0&&<ReactPaginate previousLabel={'<'} nextLabel={'>'} pageCount={pageCount} onPageChange={changePage}
          containerClassName={'bg-gray-100 flex mx-auto rounded-full px-4 py-1  justify-center items-center'}
          previousLinkClassName={'text-sec px-1'} nextLinkClassName={'text-sec px-1'}
          activeClassName={'bg-base rounded-full py-1'}
          activeLinkClassName={'bg-opacity-0 mx-0'}
          pageLinkClassName={'bg-sec text-third rounded-full px-2 pb-1 mx-1'}
          breakLabel="..."/>}
      </Border>
    </>
  )
}
