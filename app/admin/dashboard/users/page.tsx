'use client'

import gql from "graphql-tag";
import { useQuery } from "@apollo/client";
import UserTable from "./_components/UserTable";
import Preloader from "@/components/Loader/Preloader";

// GraphQL query
const GET_ALL_USER = gql`
  query Users {
    users {
      id
      email
      name
      image
      createdAt
      role
    }
  }
`;


const AllUsers = () => {
  const { data, loading, error, refetch } = useQuery(GET_ALL_USER);

  // Handle loading and error states
  if (loading) return <Preloader />;
  if (error) return <p>Error: {error.message}</p>;

  // Safely access users
  const users = data?.users || [];

  return (
    <UserTable data={users} refetch={refetch} />
  );


};

export default AllUsers;
