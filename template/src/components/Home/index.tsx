import Modal from "react-modal";
import { FormEvent, useContext, useEffect, useState } from "react";
import Header from "../Header";
import { BoxContent } from "./styles";
import img from "../../image/N.png";
import { PaymentContext } from "../../context/payment";
import { AuthContext } from "../../context/auth";

type PaymentCustomer = {
  cardCVV: string;
  cardName: string;
  cardNumber: string;
  cardValidity: string;
  cep: string;
  city: string;
  cpf: string;
  email: string;
  id: string;
  name: string;
  neighborhood: string;
  number: string;
  phone: string;
  street: string;
  uf: string;
}

function Home() {
  const { subscription } = useContext(PaymentContext);
  const { user } = useContext(AuthContext);

  const [modalIsOpen, setIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");

  const [cep, setCep] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [uf, setUf] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardValidity, setCardValidity] = useState("");
  const [cardCVV, setCardCVV] = useState("");
  
  const [stage, setStage] = useState(1);

  const [data, setData] = useState({});
  
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function handleSubmitUser(event: FormEvent) {
    event.preventDefault();

    setData({
      id: user._id,
      name,
      email,
      phone,
      cpf
    });

    setStage(2);
  }

  function handleSubmitAddress(event: FormEvent) {
    event.preventDefault();

    setData({...data,
      cep,
      street,
      number,
      city,
      neighborhood,
      uf
    });

    setStage(3);
  }

  function handleSubmitCard(event: FormEvent) {
    event.preventDefault();

    setData({...data,
      cardNumber,
      cardName,
      cardValidity,
      cardCVV
    });

    setStage(4);

    closeModal();
  }

  useEffect(() => {
    if(stage == 4) {
      setStage(1);
      
      subscription(data);
      
      setData({});
    }
  }, [stage]);

  return (
    <>
        <Header />

        <BoxContent>
            <div className="limit">
                <div>
                    <p>Newsletter muito legal aproveite!</p>
                    <p>Preço imperdível!</p>
                    <span>R$ 10,00/mês</span>

                    <button onClick={openModal}>Assine!</button>

                    <Modal
                      isOpen={modalIsOpen}
                      // onAfterOpen={afterOpenModal}
                      onRequestClose={closeModal}
                      // style={customStyles}
                      // contentLabel="Example Modal"
                    >
                      { stage == 1 && (
                        <form onSubmit={handleSubmitUser}>
                            <input type="text" name="name" value={name} placeholder="name" onChange={event => setName(event.target.value)} />
                            <input type="text" name="email" value={email} placeholder="email" onChange={event => setEmail(event.target.value)} />
                            <input type="text" name="phone" value={phone} placeholder="phone" onChange={event => setPhone(event.target.value)} />
                            <input type="text" name="cpf" value={cpf} placeholder="cpf" onChange={event => setCpf(event.target.value)} />

                            <button type="submit">Enviar</button>
                        </form>
                      ) }

                      { stage == 2 && (
                        <form onSubmit={handleSubmitAddress}>
                            <input type="text" name="cep" value={cep} placeholder="CEP" onChange={event => setCep(event.target.value)} />
                            <input type="text" name="street" value={street} placeholder="Rua" onChange={event => setStreet(event.target.value)} />
                            <input type="text" name="number" value={number} placeholder="Número" onChange={event => setNumber(event.target.value)} />
                            <input type="text" name="neighborhood" value={neighborhood} placeholder="Bairro" onChange={event => setNeighborhood(event.target.value)} />
                            <input type="text" name="city" value={city} placeholder="Cidade" onChange={event => setCity(event.target.value)} />
                            <input type="text" name="uf" value={uf} placeholder="Uf" onChange={event => setUf(event.target.value)} />

                            <button type="submit">Enviar</button>
                        </form>
                      ) }

                      { stage == 3 && (
                        <form onSubmit={handleSubmitCard}>
                            <input type="text" name="cardNumber" value={cardNumber} placeholder="Número" onChange={event => setCardNumber(event.target.value)} />
                            <input type="text" name="cardName" value={cardName} placeholder="Nome (igual no cartão)" onChange={event => setCardName(event.target.value)} />
                            <input type="text" name="cardValidity" value={cardValidity} placeholder="Validade" onChange={event => setCardValidity(event.target.value)} />
                            <input type="text" name="cardCVV" value={cardCVV} placeholder="CVV" onChange={event => setCardCVV(event.target.value)} />

                            <button type="submit">Enviar</button>
                        </form>
                      ) }
                    </Modal>
                </div>

                <img src={img} alt="" />
            </div>
        </BoxContent>
    </>
  );
}

export default Home;