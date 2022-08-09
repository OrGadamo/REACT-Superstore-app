import { Component } from "react";
import Customer from "./Customer.component";
export const customersArray = [
  {
    fName: "Lior",
    lName: "David",
    street: "Herzel",
    date: "08/09/2022",
    pic: "https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg",
  },
  {
    fName: "Aviel",
    lName: "Teka",
    street: "Herzel",
    date: "08/09/2022",
    pic: "https://cdn.vox-cdn.com/thumbor/G_Ts5lMSVPW3grBjSZ924gvyg-s=/0x0:666x444/1200x800/filters:focal(266x140:372x246)/cdn.vox-cdn.com/uploads/chorus_image/image/59491841/Macaca_nigra_self-portrait__rotated_and_cropped_.0.jpg",
  },
  {
    fName: "Batel",
    lName: "Haiyalo",
    street: "Herzel",
    date: "08/09/2022",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST6-2iM5HpTr-ReW31oLbG7jYbFGi61H4GuA&usqp=CAU",
  },
  {
    fName: "Dalia",
    lName: "Zegaya",
    street: "Herzel",
    date: "08/09/2022",
    pic: "https://astraherald.com/wp-content/uploads/2022/07/5247.jpg",
  },
];
export default class Customers extends Component {
  render() {
    return (
      <div>
        {customersArray.map((customer) => (
          <Customer
            fName={customer.fName}
            lName={customer.lName}
            street={customer.street}
            date={customer.date}
            pic={customer.pic}
          />
        ))}
      </div>
    );
  }
}
