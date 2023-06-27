import styled from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";

function Search() {

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/searched/" + input);
    }

  return (
      <FormStyle onSubmit={submitHandler}>
          <div>
              <FaSearch />
              <input onChange={(e) => setInput(e.target.value)}
                  type="text"
                  value={input}
              />
            </div>
    </FormStyle>
  )
}

const FormStyle = styled.form`
    margin: 0rem 10rem;
    div{
        width: 100%;
        position: relative;
    }
    input{
        border: none;
        input-size: 2px;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 0.8rem;
        color: white;
        padding: 0.5rem 1.5rem;
        border: none;
        border-radius: 0.7rem;
        outline: none;
        width: 100%;
    }
    svg{
        font-size: 0.5rem;
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search;
