import React from "react";
import AnimatedLetters from "../components/AnimatedLetters";
import { theme } from "../theme";
import { useRef } from "react";
import styled from "styled-components";

const StyledForm = styled.form`
  animation: backInLeft 1s;

  ul {
    list-style-type: none;
  }
  input {
    height: 50px;
    width: 50%;
    margin-bottom: 10px;
    font-size: 1rem;
    padding: 0 20px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  }

  textarea {
    min-height: 150px;
    width: 50%;
    margin-bottom: 10px;
    font-size: 1rem;
    padding: 20px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }
  }

  button {
    padding: 10px;
    text-decoration: none;
    border: none;
    background-color: ${({ theme }) => theme.secondaryColor};
    font-size: 1rem;
    border-radius: 4px;
    color: ${({ theme }) => theme.primaryColor};
    letter-spacing: 3px;
    font-weight: bold;
    transition: background-color 1s;

    &:hover {
      background-color: red;
    }
  }
`;

const Contact = () => {
  const subjectRef = useRef();
  const messageRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const subject = subjectRef.current.value;
    const message = messageRef.current.value;

    window.location.href = `mailto:kkamalkk1994@gmail.com?subject=${subject}&body=${message}`;
  };

  return (
    <div>
      <AnimatedLetters
        text={`Contact`}
        animationName="bounceIn"
        animationHover="bounce"
        fontSize="40"
        fontColor={theme.secondaryColor}
      />
      <section>
        <p>
          I'm interested in web development and currently focusing mainly on
          front end development. However if you have any other request or
          question, don't hesitate to contact me.
        </p>
        <div>
          <StyledForm onSubmit={submitHandler}>
            <ul>
              <li>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  required
                  ref={subjectRef}
                />
              </li>
              <li>
                <textarea
                  placeholder="Message"
                  name="Message"
                  ref={messageRef}
                ></textarea>
              </li>
            </ul>
            <button>SEND</button>
          </StyledForm>
        </div>
      </section>
    </div>
  );
};

export default Contact;
