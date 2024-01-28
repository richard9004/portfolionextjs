"use client"
import Image from 'next/image';
import '@app/styles/resume.css';
import '@app/styles/rid.css';
import '@app/styles/newresume.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

const ResumeLayout =() => {


const handleDownload = async () => {
    const { default: html2pdf } = await import('html2pdf.js');

    const element = document.getElementById('inner');
    if (element) {
      const options = {
        filename: 'resume.pdf',
      };

      html2pdf().set(options).from(element).save();
    }
  };


  return (
<>

<div className="button-container">
  <button onClick={handleDownload} className="download-btn">
    <i className="fas fa-download"></i> Download PDF
  </button>
</div>

 <div id="doc2" className="yui-t7">
      <div id="inner">
        <div id="hd">
   <div className="container_resume">
  <div className="left">
    <div className="name">Richard Cedric Mendes</div>
    <div className="designation">Full Stack Developer</div>
  </div>
  <div className="right">
    <div className="contact-more">
      <div className="email">
        <i className="fas fa-envelope"></i> richardcedricmendes@gmail.com
      </div>
      <div className="website">
        <i className="fas fa-globe"></i> <a href="http://www.richard.getmakedigital.com" target="_blank" rel="noopener noreferrer">www.richard.getmakedigital.com</a>
      </div>
      <div className="linkedin">
        <i className="fab fa-linkedin"></i> <a href="https://linkedin.com/in/richard-mendes-906676130/" target="_blank" rel="noopener noreferrer">linkedin.com/in/richard-mendes-906676130/</a>
      </div>
      <div className="phone">
        <i className="fas fa-phone"></i> +91 9325166289
      </div>
    </div>
  </div>
</div>



        </div>
        <div id="bd">
          <div id="yui-main">
            <div className="yui-b">
            <div className="yui-gf mt-top">
                <div className="yui-u first ">
                  <h2 className="header2">About</h2>
                </div>
                <div className="yui-u">
                  <p className="para">Experienced and innovative Full Stack Developer with 8 years of expertise in delivering seamless web solutions.</p>
                </div>
              </div>
              <div className="yui-gf">
                <div className="yui-u first">
                  <h2 className="header2">Experience</h2>
                </div>
                <div className="yui-u">
                  <div className="job">
  <h2 className="header1">Full Stack Developer</h2>
  <h3 className="header3">
    JoomDev <b>( July 2022 - Present )</b>
  </h3>
  <p className="para">
  <span>Next.js</span>
  <span>PHP</span>
  <span>JavaScript</span>
  <span>jQuery</span>
  <span>Joomla</span>
  <span>Laravel</span>
  <span>MySQL</span>
  <span>Restful APIs</span>
  <span>Slack APIs</span>
  <span>Bootstrap</span>
</p>

</div>
                  <div className="job">
  <h2 className="header1">Full Stack Developer</h2>
  <h3 className="header3">
    Nordic Intent <b>( December 2020 - July 2022 )</b>
  </h3>
  <p className="para">
  <span>Vue.js</span>
  <span>PHP</span>
  <span>JavaScript</span>
  <span>jQuery</span>
  <span>Joomla</span>
  <span>Laravel</span>
  <span>MySQL</span>
  <span>Restful APIs</span>
  <span>Bootstrap</span>
</p>

</div>
                                <div className="job">
  <h2 className="header1">Software Engineer</h2>
  <h3 className="header3">
    Quagnitia Systems PVT LTD <b>( September 2016 - December 2020 )</b>
  </h3>
  <p className="para">
  <span>PHP</span>
  <span>JavaScript</span>
  <span>jQuery</span>
  <span>MySQL</span>
  <span>Restful APIs</span>
  <span>Laravel</span>
  <span>Codeigniter</span>
  <span>Bootstrap</span>

</p>

</div>
                      <div className="job">
  <h2 className="header1">Web Developer</h2>
  <h3 className="header3">
    Cloud Infra Technologies <b>( June 2015 - July 2016 )</b>
  </h3>
  <p className="para">

  <span>PHP</span>
  <span>JavaScript</span>
  <span>jQuery</span>
 <span>Bootstrap</span>
  <span>MySQL</span>
  <span>Restful APIs</span>
  <span>CSS</span>
  <span>HTML</span>
</p>

</div>

                     <div className="job last">
  <h2 className="header1">Digital Marketing Strategist</h2>
  <h3 className="header3">
    Digital Marketing Skills
  </h3>
  <p className="para">
  <span>Search Engine Optimization (SEO)</span>
  <span>Keyword Research</span>
  <span>SEM Rush</span>
  <span>Google Search Console</span>
  <span>Page Speed and Optimization</span>
</p>

</div>
                
                </div>
              </div>
              <div className="yui-gf last">
                <div className="yui-u first">
                  <h2 className="header2">Education</h2>
                </div>
                <div className="yui-u">
                 <h2 className="header1">Institute of Computer Studies - Pune University - Pune, India</h2>
                 <h3 className="header3">Masters in Computer Application ( MCA ) — <strong>68%</strong></h3>
                
                </div>
               <div className="yui-u">
                 <h2 className="header1">St. Xaviers College - Goa University - Goa, India</h2>
                 <h3 className="header3">Bachelor in Computer Application ( BCA ) — <strong>68%</strong></h3>
                
                </div>
              </div>
             {/* <div className="yui-gf last">
                <div className="yui-u first">
                  <h2 className="header2">Skills</h2>
                </div>
                <div className="yui-u mu">
                  <ul className="talent_z">
                    <li className="li">JavaScript</li>
                    <li className="li">Next.js</li>
                    <li className="li">jQuery</li>
                    <li className="li">Bootstrap</li>
                    <li className="li last">Vue.js</li>
                  </ul>
                  <ul className="talent_z">
                    <li className="li">PHP</li>
                    <li className="li">Laravel</li>
                    <li className="li">MySQL</li>
                    <li className="li">CSS/HTML</li>
                    <li className="li last">CakePHP</li>
                  </ul>
                  <ul className="talent_z">
                    <li className="li">MongoDB</li>
                    <li className="li">WordPress</li>
                    <li className="li">Prestashop</li>
                    <li className="li">Third Party</li>
                    <li className="li last">WooCommerce</li>
                  </ul>
                </div>
              </div>*/}
            </div>
          </div>
        </div>
  

      </div>
    </div>
</>
    
 
   
  );
}


export default ResumeLayout;