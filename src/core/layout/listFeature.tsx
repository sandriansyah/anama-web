import { FiHome } from "solid-icons/fi";
import { TbUsers } from "solid-icons/tb";
import { JSXElement } from "solid-js";

export const features: {
  iconName: JSXElement;
  featureName: string;
  url: string;
}[] = [
  {
    featureName: "Home",
    iconName: <FiHome color="#FDFEFE" size={20} />,
    url: "/",
  },
  {
    featureName: "Customers",
    iconName: <TbUsers color="#FDFEFE" size={20} />,
    url: "/customers",
  },
];
