import styled from "styled-components";
import { useState } from "react";
import { FoodListItem } from "./FoodListItem";
import { foods } from "./constants/foods";

export default function NotLayoutModal() {
  const [shouldShow, setShouldShow] = useState(false);

  return (
    <>
      <button onClick={() => setShouldShow(true)}>Show Modal</button>
      {shouldShow && (
        <ModalBackground onClick={() => setShouldShow(false)}>
          <ModalBody onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setShouldShow(false)}>X</button>
            <FoodListItem foods={foods} />
          </ModalBody>
        </ModalBackground>
      )}
    </>
  );
}

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalBody = styled.div`
  background-color: white;
  width: 50%;
  margin: 10% auto;
  padding: 20px;
`;
