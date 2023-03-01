import styled from '@emotion/styled';
import { Form } from 'formik';

const FormEl = styled(Form)`
    display: flex;
    flex-direction: column;
    width: 300px;
        outline: 2px solid black;
    padding: 10px;
label {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}
input {
        margin-top: 6px;
        
}
button {
        width: 100px;
    background-color: #5ca8f4;
    border-radius: 5px;
}
}`;

export { FormEl };
