import styled from "styled-components";
export function CardProductoSelect({text1,text2}) {
    return (
    <Container>
        <span className="descripcion">{text1}</span>
        <span className="stock">{text2}</span>
    </Container>);
}
const Container = styled.div`
margin-top: 10px;
display: flex;
flex-direction: column;
border-radius: 15px;
border: 1px dashed #54f04f;
background-color: rgba(84,240, 79, 0.1);
padding: 10px;
.descripcion{
    color: #1fee61;
}
.stock{
    color: #f6faf7
}
`