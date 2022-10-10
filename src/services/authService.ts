import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import  { CreateUserData }  from '../types/authTypes';
import { createUser, getUserByEmail } from '../repositories/authRepository'
import * as error from '../utils/errors'

export async function LogIn(authData: CreateUserData){
  
  const user = await getUserByEmail(authData.email);

  if (user && bcrypt.compareSync(authData.password, user.password )) {
      
    const SECRET: string = process.env.TOKEN_SECRET_KEY ?? '';
    const EXPIRES_IN = process.env.TOKEN_EXPIRES_IN;

    const jwtConfig = {
      expiresIn: EXPIRES_IN
    };

    const token = jwt.sign({ userId: user.id, userEmail: user.email, userName: user.name , userProfileImg: user.profileImg }, SECRET, jwtConfig);

    return token;
  } else {
    return null;
  }

}

export async function SignUp(userData: CreateUserData){

  const user = await getUserByEmail(userData.email);

  if(user){
    throw error.conflict();
  }
 
  const encryptedPassword = bcrypt.hashSync(userData.password, 10);

  const newUserData : CreateUserData = {
    name: userData.name,
    email: userData.email,
    profileImg: userData.profileImg,
    password: encryptedPassword
  }

  await createUser(newUserData);
}