// /* eslint-disable no-unused-vars */

// declare type SearchParamProps = {
//     params: { [key: string]: string };
//     searchParams: { [key: string]: string | string[] | undefined };
//   };
  
//   // ========================================
  
  declare type SignInParams = {
    email: string;
    password: string;
  };

  declare type SignUpParams = {
    firstName: string;
    lastName: string;
    code: string;
    mobile: string;
    email: string;
    password: string;
  };  
  
//   declare type LoginUser = {
//     email: string;
//     password: string;
//   };
  
//   declare type User = {
//     $id: string;
//     email: string;
//     userId: string;
//     dwollaCustomerUrl: string;
//     dwollaCustomerId: string;
//     firstName: string;
//     lastName: string;
//     name: string;
//     address1: string;
//     city: string;
//     state: string;
//     postalCode: string;
//     dateOfBirth: string;
//     ssn: string;
//   };
  
//   declare type NewUserParams = {
//     userId: string;
//     email: string;
//     name: string;
//     password: string;
//   };
  
//   declare type Account = {
//     id: string;
//     availableBalance: number;
//     currentBalance: number;
//     officialName: string;
//     mask: string;
//     institutionId: string;
//     name: string;
//     type: string;
//     subtype: string;
//     appwriteItemId: string;
//     shareableId: string;
//   };
  

  
//   declare type Bank = {
//     $id: string;
//     accountId: string;
//     bankId: string;
//     accessToken: string;
//     fundingSourceUrl: string;
//     userId: string;
//     shareableId: string;
//   };
  
//   declare type AccountTypes =
//     | "depository"
//     | "credit"
//     | "loan "
//     | "investment"
//     | "other";
  
//   declare type Category = "Food and Drink" | "Travel" | "Transfer";
  
//   declare type CategoryCount = {
//     name: string;
//     count: number;
//     totalCount: number;
//   };
  
//   declare type Receiver = {
//     firstName: string;
//     lastName: string;
//   };
  
//   declare type TransferParams = {
//     sourceFundingSourceUrl: string;
//     destinationFundingSourceUrl: string;
//     amount: string;
//   };
  
//   declare type AddFundingSourceParams = {
//     dwollaCustomerId: string;
//     processorToken: string;
//     bankName: string;
//   };
  
//   declare type NewDwollaCustomerParams = {
//     firstName: string;
//     lastName: string;
//     email: string;
//     type: string;
//     address1: string;
//     city: string;
//     state: string;
//     postalCode: string;
//     dateOfBirth: string;
//     ssn: string;
//   };
  
//   declare interface CreditCardProps {
//     account: Account;
//     userName: string;
//     showBalance?: boolean;
//   }
  
//   declare interface BankInfoProps {
//     account: Account;
//     appwriteItemId?: string;
//     type: "full" | "card";
//   }
  
//   declare interface HeaderBoxProps {
//     type?: "title" | "greeting";
//     title: string;
//     subtext: string;
//     user?: string;
//   }
  
//   declare interface MobileNavProps {
//     user: User;
//   }
  
//   declare interface PageHeaderProps {
//     topTitle: string;
//     bottomTitle: string;
//     topDescription: string;
//     bottomDescription: string;
//     connectBank?: boolean;
//   }
  
//   declare interface PaginationProps {
//     page: number;
//     totalPages: number;
//   }
  
//   declare interface PlaidLinkProps {
//     user: User;
//     variant?: "primary" | "ghost";
//     dwollaCustomerId?: string;
//   }
  
//   // declare type User = sdk.Models.Document & {
//   //   accountId: string;
//   //   email: string;
//   //   name: string;
//   //   items: string[];
//   //   accessToken: string;
//   //   image: string;
//   // };
  
//   declare interface AuthFormProps {
//     type: "sign-in" | "sign-up";
//   }
  
  
//   declare interface FooterProps {
//     user: User;
//     type?: 'mobile' | 'desktop'
//   }
  

//   declare interface SiderbarProps {
//     user: User;
//   }
    
//   declare interface signInProps {
//     email: string;
//     password: string;
//   }
  
//   declare interface getUserInfoProps {
//     userId: string;
//   }
  
//   declare interface Session {
//         id: string;
//         aud: string;
//         role: string;
//         email: string;
//         email_confirmed_at: string;
//         phone: string;
//         confirmed_at: string;
//         last_sign_in_at: string;
//         app_metadata: {
//           provider: string;
//           providers: string[];
//         };
//         user_metadata: {
//           email: string;
//           email_verified: boolean;
//           phone_verified: boolean;
//           sub: string;
//         };
//         identities: {
//           identity_id: string;
//           id: string;
//           user_id: string;
//           identity_data: {
//             email: string;
//             email_verified: boolean;
//             phone_verified: boolean;
//             sub: string;
//           };
//           provider: string;
//           last_sign_in_at: string;
//           created_at: string;
//           updated_at: string;
//           email: string;
//         }[];
//         created_at: string;
//         updated_at: string;
//         is_anonymous: boolean;
//   }

type FormType = "sign-in" | "sign-up";
  