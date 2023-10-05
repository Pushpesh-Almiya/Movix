import React, { useState } from 'react'
import "./style.scss"
function SwitchTabs({data,onTabChange}) {
    const [selectedTab, setSelectedTab]=useState(0)
    const [position, setPosition]=useState(0)

    //Animation while tab
    const activeTab =(tab,index)=>{
        setPosition(index*100)
        setTimeout(()=>{
            setSelectedTab(index)
        },300)
        onTabChange(tab,index)
    }
  return (
    <div className='switchingTabs'>
      <div className="tabItems">
        {data.map((tab,index)=>(
            <span key={index} className={`tabItem ${selectedTab ===index ?"active":""}`} onClick={()=>{activeTab(tab,index)}}>{tab}</span>
        ))}
        <span className='movingBg' style={{left:position}}/>
      </div>
    </div>
  )
}

export default SwitchTabs
