import { ReactElement, useCallback, useState } from "react";
import AdminSidebar from "../components/AdminSidebar";
import TableHOC from "../components/TableHOC";
import { Column } from "react-table";
import { Link } from "react-router-dom";
import { FaPlus } from "react-icons/fa";

interface DataType {
  photo: ReactElement;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}

const columns: Column<DataType>[] = [
  {
    Header: "Photo",
    accessor: "photo",
  },
  {
    Header: "Name",
    accessor: "name",
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Stock",
    accessor: "stock",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

const Products = () => {
  const img =
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8&w=1000&q=804";

  const img2 = "https://m.media-amazon.com/images/I/514T0SvwkHL._SL1500_.jpg";

  const arr: DataType[] = [
    {
      photo: (
        <img
          src={img}
          alt="Shoes"
        />
      ),
      name: "Puma",
      price: 100,
      stock: 10,
      action: <Link to="/admin/product/sajknaskd">Manage</Link>,
    },
    {
      photo: (
        <img
          src={img2}
          alt="Laptop"
        />
      ),
      name: "Mcbook",
      price: 300000,
      stock: 55,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: (
        <img
          src={img}
          alt="Shoes"
        />
      ),
      name: "Puma",
      price: 100,
      stock: 10,
      action: <Link to="/admin/product/sajknaskd">Manage</Link>,
    },
    {
      photo: (
        <img
          src={img2}
          alt="Laptop"
        />
      ),
      name: "Mcbook",
      price: 300000,
      stock: 55,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: (
        <img
          src={img}
          alt="Shoes"
        />
      ),
      name: "Puma",
      price: 100,
      stock: 10,
      action: <Link to="/admin/product/sajknaskd">Manage</Link>,
    },
    {
      photo: (
        <img
          src={img2}
          alt="Laptop"
        />
      ),
      name: "Mcbook",
      price: 300000,
      stock: 55,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: (
        <img
          src={img}
          alt="Shoes"
        />
      ),
      name: "Puma",
      price: 100,
      stock: 10,
      action: <Link to="/admin/product/sajknaskd">Manage</Link>,
    },
    {
      photo: (
        <img
          src={img2}
          alt="Laptop"
        />
      ),
      name: "Mcbook",
      price: 300000,
      stock: 55,
      action: <Link to="/admin/product/sdaskdnkasjdn">Manage</Link>,
    },
    {
      photo: (
        <img
          src={img}
          alt="Shoes"
        />
      ),
      name: "Puma",
      price: 100,
      stock: 10,
      action: <Link to="/admin/product/sajknaskd">Manage</Link>,
    },
  ];
  {
    const [data] = useState<DataType[]>(arr);

    const Table = useCallback(
      TableHOC<DataType>(
        columns,
        data,
        "dashboard-product-box",
        "Products",
        true
      ),
      []
    );

    return (
      <div className="admin-container">
        <AdminSidebar />
        <main>{Table()}</main>
        <Link
          to="/admin/product/new"
          className="create-product-btn"
        >
          <FaPlus />
        </Link>
      </div>
    );
  }
};

export default Products;
