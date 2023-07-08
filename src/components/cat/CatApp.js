import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { loadData } from '../../redux/catRedux/cat.actions'
import { CAT_KEY } from '../../redux/catRedux/cat.reducer'
import {
  FacebookShareButton,
  WhatsappShareButton,
  TwitterShareButton,
  WhatsappIcon,
  FacebookIcon,
  TwitterIcon,
} from "react-share";



const CatApp = () => {

// initialize dispatch
let dispatch = useDispatch()

useEffect(() =>{
    dispatch(loadData())

}, [])


// view data from store
let viewCat = useSelector((state) =>{
    return state[CAT_KEY]
})


// handle button click
let handleBtn = () =>{
    dispatch(loadData())

}


const shareUrl = "https://www.pakkamarwadi.tk/";

    return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(viewCat)}</pre> */}
        <div className="card">
          <div className="card-header">
            <h5>RANDOM IMAGE GENERATOR</h5>
          </div>

          {/* body section */}
          <div className="card-body centered">
            <div className="catContainer centered">
              <div className="imgContainer centered">
                {viewCat.data.length === 0 ? null : (
                  <React.Fragment>
                    {viewCat.data.map((item) => {
                      return (
                        <div key={item.id}>
                          <img src={item.url} alt="" />
                        </div>
                      );
                    })}
                  </React.Fragment>
                )}
              </div>

              <div className="btnContainer">

                <button className="btns">
                  <FacebookShareButton
                    url={shareUrl}
                    quote={"Quote 0"}
                    hashtag={"#portfolio..."}
                  >
                    <FacebookIcon size={30} round={true} />
                  </FacebookShareButton>
                  <WhatsappShareButton
                    url={shareUrl}
                    quote={"Quote 1"}
                    hashtag={"#portfolio..."}
                  >
                    <WhatsappIcon size={30} round={true} />
                  </WhatsappShareButton>
                  <TwitterShareButton
                    url={shareUrl}
                    quote={"Quote 2"}
                    hashtag={"#portfolio..."}
                  >
                    <TwitterIcon size={30} round={true} />
                  </TwitterShareButton>
                </button>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
}

export default CatApp
