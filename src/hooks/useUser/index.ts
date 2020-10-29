import useSWR from "swr";

// const fetcher = (url: string) => fetch(url).then((res) => res.json());
// const end_point_url = '/'

import userFetcher from "@Core/mock/api-user";
export default function useUser() {
  //   const { data, mutate, error } = useSWR("/api/user.json", fetcher);
  const { data, mutate, error } = useSWR("api_user", userFetcher);
  const loading = !data && !error;
  const loggedOut = error && error.status === 403;

  const addOrUpdateContactNumber = async (contact: string) => {
    console.log(contact, "contact");
    // return await fetch(end_point_url,{method: 'POST', body: contact });
  };
  const addOrUpdateAddress = async (address: string) => {
    console.log(address, "address");

    // return await fetch(end_point_url,{method: 'POST', body: address });
  };
  const addOrUpdatePaymentCard = async (payment_card: string) => {
    console.log(payment_card, "payment_card");

    // return await fetch(end_point_url,{method: 'POST', body: payment_card });
  };
  const deleteContactNumber = async (contactId: string) => {
    console.log(contactId, "contactId");

    // return await fetch(end_point_url,{method: 'POST', body: contactId });
  };
  const deleteAddress = async (addressId: string) => {
    console.log(addressId, "addressId");

    // return await fetch(end_point_url,{method: 'POST', body: addressId });
  };
  const deletePaymentCard = async (cardId: string) => {
    console.log(cardId, "cardId");

    // return await fetch(end_point_url,{method: 'POST', body: cardId });
  };

  return {
    // loggedOut,
    user: data,
    loading,
    loggedOut,
    mutate,
    error,
    addOrUpdateContactNumber,
    addOrUpdateAddress,
    addOrUpdatePaymentCard,
    deleteContactNumber,
    deleteAddress,
    deletePaymentCard,
  };
}
