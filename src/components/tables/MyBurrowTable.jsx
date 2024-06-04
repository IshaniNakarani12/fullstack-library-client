import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import { getAllBooksAction } from "../../features/books/bookAction";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const MyBurrowTable = ({ burrows = [] }) => {
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch]);
  return (
    <div>
      <div className="d-flex justify-content-between mb-4">
        <div>30 Burrowed history found!</div>
      </div>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>thumbnail</th>
            <th>Name</th>
            <th>Due Date</th>
            <th>Returned Date</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {burrows.map((item, i) => (
            <tr key={item._id}>
              <td>{i + 1}</td>
              <td>
                <img src={item.thumbnail} alt="" width={"70px"} />
              </td>
              <td>
                <h2>{item.bookTitle.slice(0, 30)} ...</h2>
              </td>
              <td>{item?.dueDate?.slice(0, 10)}</td>
              <td> - </td>

              <td>
                <Link to={"/admin/book/edit/" + item._id}>
                  <Button variant="success">Return Book</Button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
