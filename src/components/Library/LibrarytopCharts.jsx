import React from 'react'
import LibraryGrid from './LibraryGrid'

function LibrarytopCharts({charts}) {
  return (
    <div className='mt-10'><LibraryGrid title="Top Chart" items={charts} isRounded={true}/></div>
  )
}

export default LibrarytopCharts
