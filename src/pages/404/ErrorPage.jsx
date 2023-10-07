import React from "react";

import "./style.scss";

import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate()
    return (
        <div className="pageNotFound">
            <ContentWrapper>
                <span className="bigText">404</span>
                <span className="smallText">Page not found!</span>
                <button onClick={()=>{navigate('/')}}>Go Back</button>
            </ContentWrapper>
        </div>
    );
};

export default ErrorPage;