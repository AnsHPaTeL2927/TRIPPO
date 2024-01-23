import '../pages/css/Home.css'
export const Footer = () => {
    return <>
        <div className="footer">
        <div className="data-left">
          <a><i className="ri-circle-fill"></i><span>Trippo@marwadiuniversity.ac.in</span></a>
          <a><i className="ri-circle-fill"></i><span>+123-456-789-0</span></a>
          <p><i className="ri-arrow-right-s-fill"></i>Trippo is a Non Government Organization, being run by young students for social reformation and building the nation with moral values and ethics.</p>
          <div className="icon">
            <i className="ri-youtube-fill"></i>
            <i className="ri-facebook-box-fill"></i>
            <i className="ri-whatsapp-fill"></i>
            <i className="ri-instagram-fill"></i>
          </div>
        </div>
        <div className="data-right">
          <img src="images/Blue_Wood-removebg-preview.png" alt=""/>
          
        </div>
        
      </div>
      <div className="space">
        <hr color="black"/>

      </div>
    </>
}