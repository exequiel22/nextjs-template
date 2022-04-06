import type { NextApiRequest, NextApiResponse } from 'next';
import {
  randUserName,
  randFirstName,
  randLastName,
  randAddress,
  randEmail,
} from '@ngneat/falso';

type TUser = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  address: string;
};

type TResponse = {
  data: TUser[];
}

const createRandomUser = (): TUser => ({
  firstName: randFirstName(),
  lastName: randLastName(),
  username: randUserName(),
  email: `${randEmail()}`,
  address: `${randAddress().street} ${randAddress().city} ${randAddress().zipCode} ${randAddress().country}`,
});

export default (req: NextApiRequest, res: NextApiResponse<TResponse>) => {
  const users = Array.from({ length: 20 }).map(createRandomUser);
  res.status(200).json({
    data: users,
  });
};
