
import ResumeLayout from '@/app/components/ResumeLayout'
import Head from 'next/head'

export const metadata = {
  title: 'My Resume',
  description:'Send a query by filling up the contact form'
}

const Resume = () => {


  return (
<>
{/*<h1>Hello resume</h1>*/}
<ResumeLayout/>
</>
    
 
   
  );
}


export default Resume;