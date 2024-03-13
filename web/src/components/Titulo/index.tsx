import styled from "styled-components";

interface TituloProps {
    tamanhoFonte: string;
    cor: string;
    alinhamento?: string;
}

export const Titulo = styled.h2<TituloProps>`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: ${({ cor }) => cor != '#EB9B00' ? cor : '#EB9B00'};
    font-size: ${({ tamanhoFonte }) => tamanhoFonte != '18px' ? tamanhoFonte : '18px'};
    text-align: ${({ alinhamento }) => alinhamento != null ? alinhamento : 'center'};
    margin: 0;
`
