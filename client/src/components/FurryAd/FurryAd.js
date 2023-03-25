import "./FurryAd.scss";

function FurryAd(){
    return(
      <div className="ad-container">
        <div className="ad-container__image-container">
          <img src="https://media.cnn.com/api/v1/images/stellar/prod/181007184119-furry-costume-pink-wolf.jpg?q=w_1738,h_972,x_0,y_0,c_fill" alt="Ruff and Ready" width="100%" height="100%"/>
        </div>
        <div className="ad-container__text">Hot Single Furrys in &lt;str-scraped-user-locale&gt; want to meet now!! </div>
      </div>
    )
  }

export default FurryAd;