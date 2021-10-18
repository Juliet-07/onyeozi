import { gql} from "@apollo/client"

export const SIGNUP = gql`
    mutation onSignUp ($fullName:String!, $email:String!, $phone:String! $password:String! $userAccountType:accountType!){
        addUser(data:{
            fullName: $fullName
            email: $email
            phone: $phone
            password: $password
            userAccountType: $userAccountType
        })
    }
`