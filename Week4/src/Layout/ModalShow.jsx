import React from "react";
import Modal from "./Modal";
import { FoodListItem } from "./FoodListItem";
import { foods } from "./constants/foods";

export default function ModalShow() {
  return (
    <Modal>
      <FoodListItem foods={foods} />
    </Modal>
  );
}
