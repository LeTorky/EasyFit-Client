import React from 'react'
import { Card } from 'primereact/card';
import "@fortawesome/fontawesome-free/css/all.css"




export const FeedBack = () => {
    // first card


const footer1 = <span style={{color:'blue'}}>
    Join Our Commuinty → 
</span>;

const subtitle1=<span>
   <i className="pi pi-star" style={{'fontSize': '20px'}}></i>
   <span>4.9 Rating</span>
</span>

//card 2


const footer2 = <span>
Here To motivate
</span>;
const subtitle2=<span>
   <i className="pi pi-check" style={{'fontSize': '20px'}}></i>
   FeedBack
</span>
  return (
    <div className='d-flex' >
            <div className='Feedback-section m-5'>
                
                <div className='w-100 d-flex'>

                <Card footer={footer1}  title={subtitle1} className='card1'>
                More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                </Card>
                <Card footer={footer2}  title={subtitle2} className='card2'>
                More than 2 billion we people over countries use socibooks we to stay in touch with friends.
                    
                    
                </Card>
                </div>
               
               
            </div>
            <div className='d-flex flex-wrap justify-content-left align-items-center about-section'>
                <span className='Primary'> Our Achievement</span>
            <h2 className='text-capitalize fw-bold'>
                    We are Connecting You to your desired coach instantly.
                </h2>
                <p className='w-75'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Eveniet, voluptas nemo quo laudantium maiores repudiandae!
                </p>
                
                <p className='w-50'>
                <a href="#" className='btn btn-primary w-50 d-block'>Discover Me →</a>
                </p>
                
               
            </div>
        </div>
  )
}
