import { gql} from "@apollo/client"
export const SIGNUP = gql`
  mutation($data: addUserInput!){
    addUser(data: $data){
      email
      message
    }
  }
`;
export const SIGNIN = gql`
  mutation($data: UserLoginInput!){
    loginUser(data: $data){
      token
      userAccountType
    }
  }
`;

export const VERIFY_ACCOUNT =  gql`
  mutation($data: verifyCustomerInput){
    verifyCustomer(data: $data){
      message
      userAccountType
      token
    }
  }
`;

export const LOGOUT = gql`
  mutation{
    logout
  }
`;