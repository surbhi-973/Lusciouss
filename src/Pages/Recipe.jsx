import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

import React from 'react';

function Recipe() {


    let params = useParams();
    const [details, setDetails] = useState({});
    const [activeTab, setActiveTab] = useState('instructions');

    const fetchDetails = async () => {
        const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
        const detailData = await data.json();
        setDetails(detailData);
    }

    useEffect(() => {
        fetchDetails();
    }, [params.name]);

  return (
    <DetailWrapper>
          <div className="first">
              <h2>{details.title}</h2>
              <img src={details.image} alt="" />
          </div>
          <Info>
              <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab("instructions")}>Instructions</Button>
              <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab("ingredients")}>Ingredients</Button>
              {activeTab === 'instructions' && (
                  <div>
                  {/* <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3> */}
                  <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
              </div> 
              )} 
              {activeTab === 'ingredients' && (
                  <ul>
                  {details.extendedIngredients.map((ingredient) => 
                      <li key={ingredient.id}>{ingredient.original}</li>
                  )}
              </ul>
              )}
          </Info>
    </DetailWrapper>
  )
};

const DetailWrapper = styled.div`
    margin-top: 3rem;
    margin-bottom: 2.5rem;
    display: flex;
    .first{

        width: 50%;

        img{
            width: 18rem;
            height: 13rem;
        }
    }

    .active{
        background: linear-gradient(35deg, #494949, #313131);
        color: white;
    }
    h2{
        margin-bottom: 1rem;
        font-size: 0.8rem;
    }
    h3{
        font-size: 0.7rem;
    }
    li{
        font-size: 0.7rem;
        line-height: 1.5rem;
    }
    ul{
        margin-top: 2rem;
        margin: 2rem 0rem;
    }
`;

const Button = styled.button`
    padding: 0.7rem 2rem;
    font-size: 0.7rem;
    color: #313131;
    background: white;
    border: 2px solid black;
    margin-right: 2rem;
    font-weight: 600;
`;

const Info = styled.div`
    margin-left: 5rem;
`;

export default Recipe;
