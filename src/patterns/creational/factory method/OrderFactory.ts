import { OrderEnum } from "./enum/OrderEnum";
import OrderAirplane from "./concrete/OrderAirplane";
import AbstractOrder from "./base/AbstractOrder";
import OrderTrain from "./concrete/OrderTrain";
import OrderTaxi from "./concrete/OrderTaxi";
import OrderHotel from "./concrete/OrderHotel";

export default class OrderFactory {
    public getOrder(orderType: number): AbstractOrder {
        switch (orderType) {
            case OrderEnum.AIRPLANE:
                return new OrderAirplane();
            case OrderEnum.TRAIN:
                return new OrderTrain();
            case OrderEnum.TEXI:
                return new OrderTaxi();
            case OrderEnum.HOTEL:
                return new OrderHotel();
            default:
        }
    }
}