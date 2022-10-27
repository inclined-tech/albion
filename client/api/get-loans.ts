import { gql, useQuery } from '@apollo/client'
import { GetLoans } from '../shared/types'

export const GET_LOANS = gql`
  query GetLoans {
    loans {
      id
      name
      status
      amount
    }
  }
`

export type Loans = GetLoans['loans']

/**
 * A hook which returns all the loans in the db
 *
 * @return {Loans} an array of loans
 */
export function useLoans(): Loans {
  const { data, error } = useQuery<GetLoans>(GET_LOANS, {
    fetchPolicy: 'cache-and-network',
  })

  if (error) {
    console.error('Failed to get loans ', error)
  }

  if (data && data.loans) {
    return data.loans
  }

  return []
}
