import { FormEvent, useContext, useEffect, useState } from "react";

import Modal from "react-modal";

import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/material.css'

import { PaymentContext } from "../../context/payment";
import { AuthContext } from "../../context/auth";
import { ModalContext } from "../../context/modal";
import { SubscribeContext } from "../../context/subscribe";

import { BoxContent } from "./styles";
import { TextField } from '@mui/material';
import { cepApi } from "../../services/cep";

function ModalComponent() {
    const { subscription } = useContext(PaymentContext);
    const { user } = useContext(AuthContext);
    const { closeModal, modalIsOpen, stage, setStage } = useContext(ModalContext);
    const { paid } = useContext(SubscribeContext);

    const [name, setName] = useState("");
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
    
    const [data, setData] = useState({});

    function searchCEP() {
        if(cep.length == 8) {
            cepApi.get(`${cep}/json`).then(result => {
                setStreet(result.data.logradouro);
                setCity(result.data.localidade);
                setUf(result.data.uf);
                setNeighborhood(result.data.bairro);
            });
        }
    }

    function handleSubmitUser(event: FormEvent) {
        event.preventDefault();

        setData({
        id: user._id,
        name,
        phone: "+" + phone,
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
        <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
        >   
            <BoxContent>
                {paid && (
                    <p>Você já tem uma assinatura</p>
                )}

                {!paid && (
                    <>
                        { stage == 1 && (
                            <form onSubmit={handleSubmitUser}>
                                <TextField id="standard-basic" margin="dense" label="Nome" variant="standard" name="name" value={name} onChange={event => setName(event.target.value)} />
                                <TextField id="standard-basic" margin="dense" label="Email" variant="standard" value={user?.email} disabled className="email" />
                                <PhoneInput country={'br'} value={phone} onChange={phone => setPhone(phone)} inputClass="phone" masks={{br: '(..) .....-....'}} placeholder="+00 (00) 0000-0000" />
                                <TextField id="standard-basic" margin="dense" label="CPF" variant="standard" name="cpf" value={cpf} onChange={event => setCpf(event.target.value)} />

                                <button type="submit">Enviar</button>
                            </form>
                        )}

                        { stage == 2 && (
                            <form onSubmit={handleSubmitAddress}>
                                <TextField id="standard-basic" margin="dense" label="CEP" variant="standard" name="cep" value={cep} onBlur={searchCEP} onChange={event => setCep(event.target.value)} />
                                <TextField id="standard-basic" margin="dense" label="Rua" variant="standard" name="street" value={street} onChange={event => setStreet(event.target.value)} />
                                <TextField id="standard-basic" margin="dense" label="Número" variant="standard" name="number" value={number} onChange={event => setNumber(event.target.value)} />
                                <TextField id="standard-basic" margin="dense" label="Bairro" variant="standard" name="neighborhood" value={neighborhood} onChange={event => setNeighborhood(event.target.value)} />
                                <TextField id="standard-basic" margin="dense" label="Cidade" variant="standard" name="city" value={city} onChange={event => setCity(event.target.value)} />
                                <TextField id="standard-basic" margin="dense" label="UF" variant="standard" name="uf" value={uf} onChange={event => setUf(event.target.value)} />

                                <button type="submit">Enviar</button>
                            </form>
                        )}

                        { stage == 3 && (
                            <form onSubmit={handleSubmitCard}>
                                <TextField id="standard-basic" margin="dense" label="Número" variant="standard" name="cardNumber" value={cardNumber} onChange={event => setCardNumber(event.target.value)} />
                                <TextField id="standard-basic" margin="dense" label="Nome (igual no cartão)" variant="standard" name="cardName" value={cardName} onChange={event => setCardName(event.target.value)} />
                                <TextField id="standard-basic" margin="dense" label="Validade" variant="standard" name="cardValidity" value={cardValidity} onChange={event => setCardValidity(event.target.value)} />
                                <TextField id="standard-basic" margin="dense" label="CVV" variant="standard" name="cardCVV" value={cardCVV} onChange={event => setCardCVV(event.target.value)} />

                                <button type="submit">Enviar</button>
                            </form>
                        )}
                    </>
                )}
            </BoxContent>
        </Modal>
    );
}

export default ModalComponent;
