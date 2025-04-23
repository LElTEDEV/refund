import FoodSvg from "../assets/food.svg";
import OthersSvg from "../assets/others.svg";
import ServicesSvg from "../assets/services.svg";
import TransportSvg from "../assets/transport.svg";
import AccommodationSvg from "../assets/accommodation.svg";

export const CATEGORIES = {
  Food: {
    name: "Alimentação",
    icon: FoodSvg,
  },
  Others: {
    name: "Outros",
    icon: OthersSvg,
  },
  Services: {
    name: "Serviços",
    icon: ServicesSvg,
  },
  Transport: {
    name: "Transporte",
    icon: TransportSvg,
  },
  Accommodation: {
    name: "Hospedagem",
    icon: AccommodationSvg,
  },
};

export const CATEGORIES_KEYS = Object.keys(CATEGORIES) as Array<
  keyof typeof CATEGORIES
>;
