import styled from "styled-components";

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const ContactText = styled.div`
  margin: 50px 25px;
  font-size: 1.3em;
  text-align: justify;

  @media screen and (min-width: 768px) {
    margin: 50px 35px;
  }
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;

  img {
    display: none;

    @media screen and (min-width: 768px) {
      display: block;
      width: 35%;
    }

    @media screen and (min-width: 1024px) {
      width: 40%;
    }
  }

  form {
    display: flex;
    width: 300px;
    margin: 0;
    border-radius: 2px;
    flex-direction: column;
    justify-content: flex-end;
    ${"" /* background: #4e3272; */}
    background: #fcbf1e;

    h1 {
      font-size: 1.3em;
      margin: 5px 20px;
    }

    input,
    textarea {
      margin: 10px 20px;
      padding: 2px 5px;
      background: white;
      border: none;
      border-radius: 2px;
      ::placeholder {
        color: gray;
      }
    }

    textarea {
      resize: none;
      height: 80px;
    }

    input[type="submit"] {
      align-self: center;
      padding: 8px 20px;
      border-radius: 3px;
      font-size: 0.5em;
    }

    @media screen and (min-width: 768px) {
      h1 {
        margin-bottom: 30px;
      }

      textarea {
        margin-bottom: 10px;
      }
    }

    @media screen and (min-width: 1024px) {
      h1 {
        margin-top: 10px;
        margin-bottom: 65px;
      }

      textarea {
        margin-bottom: 30px;
      }
    }

    @media screen and (min-width: 1024px) {
      input[type="submit"] {
        margin-bottom: 30px;
        font-size: 0.8em;
      }
    }
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const Donation = styled.div`
  margin: 50px 25px;
  font-size: 22px;
  text-align: justify;
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    margin: 50px 35px;
  }
`;

export const DonationOptions = styled.div`
  display: flex;
  flex-direction: column;
  height: 120px;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-evenly;
  }

  @media screen and (min-width: 1024px) {
    justify-content: center;
  }
`;

export const Paypal = styled.div`
  @media screen and (min-width: 1024px) {
    margin: 0 30px;
  }
`;

export const MercadoPago = styled.div`
  img {
    width: 150px;
    background: white;
  }

  @media screen and (min-width: 1024px) {
    margin: 0 30px;
  }
`;
