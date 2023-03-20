import React, {useState} from 'react';

import logoImg from '../../assets/Perfil-Analítica.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import {
    Container,
    Logo,
} from './styles';

const SignIn = () => {

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="Minha Carteira" />
                <h2>Analítica 3M</h2>
            </Logo>

                <Input 
                    type="email"
                    placeholder="Chave da API"
                    required
                    />
                <Input 
                    type="password"
                    placeholder="Link"
                    required
                    />

               <Button type="submit">Acessar</Button>
        </Container>
    );
}

export default SignIn;