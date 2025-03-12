import React, { useState } from "react";
import Cards from "../components/Cards";

const Dashboard = () => {
  const [users] = useState([
    { name: "John Doe", email: "john@example.com", age: 22 },
    { name: "Jane Smith", email: "jane@example.com", age: 34 },
    { name: "Alice Johnson", email: "alice@example.com", age: 28 },
    { name: "Bob Brown", email: "bob@example.com", age: 25 },
    { name: "Charlie Davis", email: "charlie@example.com", age: 30 },
    { name: "David Evans", email: "david@example.com", age: 36 },
  ]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-5 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-sans text-center">
      <div className="container mx-auto mt-10 p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {users.map((user) => (
            <Cards key={user.name} name={user.name} email={user.email} age={user.age} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;