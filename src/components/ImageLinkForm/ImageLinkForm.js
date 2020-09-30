import React from 'react'
import './ImageLinkForm.css'

const ImageLinkForm = ({loadLink,clickDetect}) => {

  return (
    <div>
    	<p className='f3'>{'This magic brain will detect faces in your pictures. Give it a try.'}</p>
       <div className='form center pa4 br3 shadow-5'>
				<input className='f4' type='text' style={{width:'70%'}} 
              onChange={loadLink} 
        ></input>	
				<button className='f4 pa2'style={{width:'30%'}}
              onClick={clickDetect}
        >Detect</button>
       </div> 
    </div>
  )
}

export default ImageLinkForm