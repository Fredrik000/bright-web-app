import React from 'react';
import {products} from "../Objects/Products";
import lampGuideStanding from "../../images/manual-sunbell/lamp-guide.png";
import lampGuideHanging from "../../images/manual-sunbell/lamp-guide-hanging.png";
import lampParts from "../../images/manual-sunbell/sunbell-inst-0.png";
import part1 from "../../images/manual-sunbell/sunbell-inst-1.png"
import part2 from "../../images/manual-sunbell/sunbell-inst-2.png"
import part3 from "../../images/manual-sunbell/sunbell-inst-3.png"
import part4 from "../../images/manual-sunbell/sunbell-inst-4.png"
import part5 from "../../images/manual-sunbell/sunbell-inst-5.png"
import part6 from "../../images/manual-sunbell/sunbell-inst-6.png"
import part7 from "../../images/manual-sunbell/sunbell-inst-7.png"


function Manuals() {

  const sunbell = products[0];

  return(
      <div className="manuals">
        <h1 className="manual-h-tag">How to use your Sunbell 2.0</h1>
        <h3 className="manual-h-tag">{sunbell.description}</h3>

        <div className='image-div-holder'>
          <div className='image-div-parts'>
            <img className="manual-parts-img" alt="instruction-image" src={lampParts} />
          </div>
            <div className='image-div'>
                <h1 className="part-number">1</h1>
                <img className="guide-img" alt="instruction-image" src={lampGuideStanding}/>
                <img className="manual-img" alt="instruction-image" src={part1} />
            </div>
            <div className='image-div'>
                <h1 className="part-number">2</h1>
                <img className="guide-img" alt="instruction-image" src={lampGuideStanding}/>
                <img className="manual-img" alt="instruction-image" src={part2} />
            </div>
            <div className='image-div'>
                <h1 className="part-number">3</h1>
                <img className="guide-img" alt="instruction-image" src={lampGuideStanding}/>
                <img className="manual-img" alt="instruction-image" src={part3} />
            </div>
            <div className='image-div'>
                <h1 className="part-number">4</h1>
                <img className="guide-img" alt="instruction-image" src={lampGuideStanding}/>
                <img className="manual-img" alt="instruction-image" src={part4} />
            </div>
            <div className='image-div'>
                <h1 className="part-number">5</h1>
                <img className="guide-img" alt="instruction-image" src={lampGuideHanging}/>
                <img className="manual-img" alt="instruction-image" src={part5} />
            </div>
            <div className='image-div'>
                <h1 className="part-number">6</h1>
                <img className="guide-img" alt="instruction-image" src={lampGuideHanging}/>
                <img className="manual-img" alt="instruction-image" src={part6} />
            </div>
            <div className='image-div' id="night-background">
                <h1 className="part-number">7</h1>
                <img className="guide-img" alt="instruction-image" src={lampGuideHanging}/>
                <img className="manual-img" alt="instruction-image" src={part7} />
            </div>
        </div>

      </div>
);
}

export default Manuals;
