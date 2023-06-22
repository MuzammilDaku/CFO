import React from 'react'
import { Grid } from '@mui/material'
import graphImg from '../../../Assets/Images/graph.png'
import graphImg2 from '../../../Assets/Images/graph Green.png'
import img1 from '../../../Assets/Images/Group.png'
import img2 from '../../../Assets/Images/line-graph 1.png'
import img3 from '../../../Assets/Images/Vector.png'
import img4 from '../../../Assets/Images/chart 1.png'
import img5 from '../../../Assets/Images/Vector (1).png'
import img6 from '../../../Assets/Images/achievement 1.png'
import img7 from '../../../Assets/Images/skill-development 1.png'
import img8 from '../../../Assets/Images/wallet 1.png'
import img9 from '../../../Assets/Images/team-leader 1.png'
import img10 from '../../../Assets/Images/Vector (2).png'
import img11 from '../../../Assets/Images/new-offer 1.png'
import img12 from '../../../Assets/Images/acquisition 1.png'
import img13 from '../../../Assets/Images/scalable 1.png'
import img14 from '../../../Assets/Images/save-money 1.png'
import img15 from '../../../Assets/Images/organization 1.png'
import img16 from '../../../Assets/Images/achievement 2.png'

const BalanceSourceBoard = () => {
  const tableData1 = [
    {
      img:img1,
      kpi:'GP Growth',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img4,
      kpi:'Revenue Growth',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img3,
      kpi:'Revenue Per Customer',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img2,
      kpi:'Rev Per GP from inogranic Growth',
      score:'65.4',
      scoreytd:'50.7'
    },
  ]
  const tableData2 = [
    {
      img:img5,
      kpi:'Experience',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img6,
      kpi:'Placement Success',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img7,
      kpi:'Speciality Skill Set',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img8,
      kpi:'Share of Wallet',
      score:'65.4',
      scoreytd:'50.7'
    },
  ]

  const tableData3 = [
    {
      img:img9,
      kpi:'Acheive Throughout Leadership',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img10,
      kpi:'Custiomer Satisfaction',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img11,
      kpi:'Inovative Offering',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img12,
      kpi:'Orient Salesforce to specialtiy Sales',
      score:'65.4',
      scoreytd:'50.7'
    },
  ]
  const tableData4 = [
    {
      img:img13,
      kpi:'Capacity Utilization',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img14,
      kpi:'Cost to Serve',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img15,
      kpi:'Grow tier 3 Accounts',
      score:'65.4',
      scoreytd:'50.7'
    },
    {
      img:img16,
      kpi:'Placement Success',
      score:'65.4',
      scoreytd:'50.7'
    },
  ]
  return (
    <>
    <div className='container' >
    <h2>Balance Scoreboard</h2>
    <p style={{color:'#868E96'}}>Thu, 25 May, 2023, 10:00pm</p>
    <div style={{ backgroundColor:'#fefefe',padding:'40px'}}>

    <Grid container spacing={2} justifyContent={'space-between'} style={{
      marginTop:'2px'
    }}>
  <Grid item xs={5.9} lg={5.9} md={12} sm={12}  style={{
    boxShadow:'1px  2px 10px #000000',
  }}>
   <h3>Financial</h3>
   <Grid container spacing={2} justifyContent="space-between">
    <Grid item xs={6}> 
       <div style={{display:'flex'}}>
        <div>

       <h4 style={{color:'#868E96'}}>Scor</h4>
        <p style={{
      fontWeight:'bold',marginTop:'-1rem'
    }}>70.99</p>
        </div>
        <img src={graphImg} alt="Graph Image" width={102} height={23} style={{
          marginTop:'1.9rem',
          marginLeft:'1.2rem'
        }}/>
       </div>
       <div>
       </div>

    </Grid>
    <Grid item xs={6}> 
       <div style={{display:'flex'}}>
        <div>

       <h4 style={{color:'#868E96'}}>Score YTD</h4>
        <p style={{
      fontWeight:'bold',marginTop:'-1rem'
    }}>70.99</p>
        </div>
        <img src={graphImg2} alt="Graph Image" width={102} height={23} style={{
          marginTop:'1.9rem',
          marginLeft:'1.2rem'
        }}/>
       </div>
       <div>
       </div>

    </Grid>

   </Grid>
   <table style={{
    borderCollapse:'collapse',
    width:'97%',
    textAlign:'left'
   }}>
    <thead style={{
      height:'40px'
    }}>
      <tr style={{
        backgroundColor:'#ECF0F5'
      }}>
        <th style={{paddingLeft:'0.3rem'}} >KPI</th>
        <th>Score</th>
        <th>Score YTD</th>
      </tr>
    </thead>
    {tableData1.map((e)=>{
      return(
        <>
        <tbody>
      <tr style={{
        borderBottom:'1px solid #E2E5E8'
      }}>
        <td style={{
          paddingTop:'8px'
        }}>
          <img src={e.img} height={28} width={28} alt="" style={{
            marginBottom:'-3px'
          }} />
          <span style={{
            marginLeft:'0.6rem'
          }}>{e.kpi}</span>
        </td>
        <td >{e.score}</td>
        <td style={{
          paddingTop:'8px',paddingBottom:'9px',textAlign:'center'
        }}>{e.scoreytd}</td>
      </tr>
    </tbody>
        
        </>
      )
    })}
   </table>
 
  </Grid>
  <Grid item xs={5.9} lg={5.9} md={12} sm={12}  style={{
    boxShadow:'1px  2px 10px #000000',
    
  }}>
   <h3>Customer</h3>
   <Grid container spacing={2}>
    <Grid item xs={6}> 
       <div style={{display:'flex'}}>
        <div>

       <h4 style={{color:'#868E96'}}>Scor</h4>
        <p style={{
      fontWeight:'bold',marginTop:'-1rem'
    }}>70.99</p>
        </div>
        <img src={graphImg} alt="Graph Image" width={102} height={23} style={{
          marginTop:'1.9rem',
          marginLeft:'1.2rem'
        }}/>
       </div>
       <div>
       </div>

    </Grid>
    <Grid item xs={6}> 
       <div style={{display:'flex'}}>
        <div>

       <h4 style={{color:'#868E96'}}>Score YTD</h4>
        <p style={{
      fontWeight:'bold',marginTop:'-1rem'
    }}>70.99</p>
        </div>
        <img src={graphImg2} alt="Graph Image" width={102} height={23} style={{
          marginTop:'1.9rem',
          marginLeft:'1.2rem'
        }}/>
       </div>
       <div>
       </div>

    </Grid>

   </Grid>
   <table style={{
    borderCollapse:'collapse',
    width:'97%',
    textAlign:'left'
   }}>
    <thead style={{
      height:'40px'
    }}>
      <tr style={{
        backgroundColor:'#ECF0F5'
      }}>
        <th style={{paddingLeft:'0.3rem'}} >KPI</th>
        <th>Score</th>
        <th>Score YTD</th>
      </tr>
    </thead>
    {tableData2.map((e)=>{
      return(
        <>
        <tbody>
      <tr style={{
        borderBottom:'1px solid #E2E5E8'
      }}>
        <td style={{
          paddingTop:'8px'
        }}>
          <img src={e.img} height={28} width={28} alt="" style={{
            marginBottom:'-3px'
          }}/>
          <span style={{
            marginLeft:'0.6rem'
          }}>{e.kpi}</span>
        </td>
        <td style={{
          paddingTop:'8px'
        }}>{e.score}</td>
        <td style={{
          paddingTop:'8px',textAlign:'center'
        }}>{e.scoreytd}</td>
      </tr>
    </tbody>
        
        </>
      )
    })}
   </table>
 
  </Grid>
  <Grid item xs={5.9} lg={5.9} md={12} sm={12}  style={{
   boxShadow:'1px  2px 10px #000000',
    marginTop:'1rem'
    
  }}>
   <h3>Learning and Growth Financial</h3>
   <Grid container spacing={2}>
    <Grid item xs={6}> 
       <div style={{display:'flex'}}>
        <div>

       <h4 style={{color:'#868E96'}}>Scor</h4>
        <p style={{
      fontWeight:'bold',marginTop:'-1rem'
    }}>70.99</p>
        </div>
        <img src={graphImg} alt="Graph Image" width={102} height={23} style={{
          marginTop:'1.9rem',
          marginLeft:'1.2rem'
        }}/>
       </div>
       <div>
       </div>

    </Grid>
    <Grid item xs={6}> 
       <div style={{display:'flex'}}>
        <div>

       <h4 style={{color:'#868E96'}}>Score YTD</h4>
        <p style={{
      fontWeight:'bold',marginTop:'-1rem'
    }}>70.99</p>
        </div>
        <img src={graphImg2} alt="Graph Image" width={102} height={23} style={{
          marginTop:'1.9rem',
          marginLeft:'1.2rem'
        }}/>
       </div>
       <div>
       </div>

    </Grid>

   </Grid>
   <table style={{
    borderCollapse:'collapse',
    width:'97%',
    textAlign:'left'
   }}>
    <thead style={{
      height:'40px'
    }}>
      <tr style={{
        backgroundColor:'#ECF0F5'
      }}>
        <th style={{paddingLeft:'0.3rem'}} >KPI</th>
        <th>Score</th>
        <th>Score YTD</th>
      </tr>
    </thead>
    {tableData3.map((e)=>{
      return(
        <>
        <tbody>
      <tr style={{
        borderBottom:'1px solid #E2E5E8'
      }}>
        <td style={{
          paddingTop:'8px'
        }}>
          <img src={e.img} height={28} width={28} alt="" style={{
            marginBottom:'-3px'
          }}/>
          <span style={{
            marginLeft:'0.6rem'
          }}>{e.kpi}</span>
        </td>
        <td style={{
          paddingTop:'8px'
        }}>{e.score}</td>
        <td style={{
          paddingTop:'8px',textAlign:'center'
        }}>{e.scoreytd}</td>
      </tr>
    </tbody>
        
        </>
      )
    })}
   </table>
 
  </Grid>
  <Grid item xs={5.9} lg={5.9} md={12} sm={12}  style={{
    boxShadow:'1px  2px 10px #000000',
    marginTop:'1rem'
    
  }}>
   <h3> Financial</h3>
   <Grid container spacing={2}>
    <Grid item xs={6}> 
       <div style={{display:'flex'}}>
        <div>

       <h4 style={{color:'#868E96'}}>Scor</h4>
        <p style={{
      fontWeight:'bold',marginTop:'-1rem'
    }}>70.99</p>
        </div>
        <img src={graphImg} alt="Graph Image" width={102} height={23} style={{
          marginTop:'1.9rem',
          marginLeft:'1.2rem'
        }}/>
       </div>
       <div>
       </div>

    </Grid>
    <Grid item xs={6}> 
       <div style={{display:'flex'}}>
        <div>

       <h4 style={{color:'#868E96'}}>Score YTD</h4>
        <p style={{
      fontWeight:'bold',marginTop:'-1rem'
    }}>70.99</p>
        </div>
        <img src={graphImg2} alt="Graph Image" width={102} height={23} style={{
          marginTop:'1.9rem',
          marginLeft:'1.2rem'
        }}/>
       </div>
       <div>
       </div>

    </Grid>

   </Grid>
   <table style={{
    borderCollapse:'collapse',
    width:'97%',
    textAlign:'left'
   }}>
    <thead style={{
      height:'40px'
    }}>
      <tr style={{
        backgroundColor:'#ECF0F5'
      }}>
        <th style={{paddingLeft:'0.3rem'}} >KPI</th>
        <th>Score</th>
        <th>Score YTD</th>
      </tr>
    </thead>
    {tableData4.map((e)=>{
      return(
        <>
        <tbody>
      <tr style={{
        borderBottom:'1px solid #E2E5E8'
      }}>
        <td style={{
          paddingTop:'8px'
        }}>
          <img src={e.img} height={28} width={28} alt="" style={{
            marginBottom:'-3px'
          }} />
          <span style={{
            marginLeft:'0.6rem'
          }}>{e.kpi}</span>
        </td>
        <td style={{
          paddingTop:'8px'
        }}>{e.score}</td>
        <td style={{
          paddingTop:'8px',textAlign:'center'
        }}>{e.scoreytd}</td>
      </tr>
    </tbody>
        
        </>
      )
    })}
   </table>
 
  </Grid>
  

 
</Grid>
    </div>
    </div>
    </>
    
  )
}

export default BalanceSourceBoard